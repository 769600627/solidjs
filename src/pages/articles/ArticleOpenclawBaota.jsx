import { onMount } from 'solid-js';
import { A } from '@solidjs/router';
import { initReveal } from '../../utils/animations';

export default function ArticleOpenclawBaota() {
    onMount(() => {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        window.scrollTo(0, 0);
    });

    return (
        <section id="article-detail">
            <div class="article-container reveal">
                <A href="/articles" class="back-link">← 返回文章列表</A>
                <div class="article-header">
                    <h1>宝塔插件 OpenClaw 部署实录：从软件商店到生产可用</h1>
                    <p class="article-subtitle">软件商店安装 · 面板插件结构 · PM2 进程管理 · 环境变量与代理配置</p>
                    <div class="article-meta">
                        <span class="article-date">2026-06-02</span>
                        <div class="article-tags">
                            <span class="tech-tag">OpenClaw</span>
                            <span class="tech-tag">宝塔</span>
                            <span class="tech-tag">PM2</span>
                            <span class="tech-tag">TencentOS</span>
                            <span class="tech-tag">Node.js</span>
                        </div>
                    </div>
                </div>
                <div class="article-content">

                    <h2>一、前言</h2>
                    <p>OpenClaw 已经发布两种部署形态：<strong>Docker 应用</strong>和<strong>宝塔面板插件（宿主机版）</strong>。本文聚焦后者——宿主机安装、面板内管理的方式。与 Docker 版相比，插件版直接运行在宿主机上，通过 PM2 守护进程，更便于与面板已有服务（如反向代理、防火墙、文件管理）协同工作。</p>

                    <p>本文基于 TencentOS Server 3.1（CentOS Stream 兼容） + 宝塔面板的最新环境，记录从软件商店安装到生产可用的全流程，涵盖插件结构解析、PM2 进程管理、环境变量配置、代理设置及常见问题排查。</p>

                    <h2>二、宝塔插件开发框架概览</h2>
                    <p>在深入 OpenClaw 插件之前，有必要了解宝塔插件的基本结构。宝塔官方提供了完整的插件开发文档（<code>BT-Panel-Plugin-Doc.pdf</code>），核心要点如下：</p>

                    <h3>2.1 插件目录结构</h3>
                    <p>所有宝塔面板插件均安装在 <code>/www/server/panel/plugin/{插件名}/</code> 目录下，一个标准插件包含以下文件：</p>

                    <pre>{`/www/server/panel/plugin/{name}/
├── {name}_main.py   # 后端主程序（Python），每个方法即一个 API
├── index.html       # 前端界面（HTML + JavaScript）
├── info.json        # 插件元信息
├── icon.png         # 插件图标
└── install.sh       # 安装/卸载脚本`}</pre>

                    <p><strong>各文件说明：</strong></p>
                    <ul>
                        <li><strong>info.json</strong>：定义插件的标题、名称、版本、作者等。其中 <code>name</code> 必须与插件目录名一致，<code>checks</code> 用于检测插件是否已安装。</li>
                        <li><strong>{name}_main.py</strong>：Python 后端。类名必须与文件名一致（不含 <code>_main</code> 后缀）。前端通过 AJAX POST 调用后端方法，参数通过 <code>args</code> 传递。注意：参数名不能使用 <code>action</code>、<code>s</code>、<code>name</code>、<code>a</code> 这四个保留字。</li>
                        <li><strong>index.html</strong>：前端页面，使用宝塔面板提供的公共库（<code>public</code>）调用后端 API。</li>
                        <li><strong>install.sh</strong>：接收 <code>install</code> 或 <code>uninstall</code> 参数，执行安装/卸载逻辑。</li>
                    </ul>

                    <h3>2.2 公共库（public）</h3>
                    <p>插件后端可以引用宝塔面板的公共库：</p>
                    <pre>{`import public

# 读取/写入文件
public.ReadFile(filename)
public.WriteFile(filename, content)

# HTTP 请求
public.HttpGet(url, timeout=60)
public.HttpPost(url, data, timeout=60)

# 执行 Shell 命令
public.ExecShell(shell_str)  # 返回 ["正常输出", "异常输出"]

# 构造响应
public.ReturnMsg(True, '操作成功!')
return public.returnMsg(True, data)

# 面板日志
public.WriteLog(log_type, log_body)

# 其他常用
public.md5(strings)
public.GetRandomString(length)
public.ServiceReload()  # 重载 Web 服务器`}</pre>

                    <p><strong>后端返回值</strong>：支持 <code>bool</code>、<code>str</code>、<code>list</code>、<code>dict</code>、<code>int</code>，所有返回值自动转为 JSON。</p>

                    <h2>三、OpenClaw 插件结构解析</h2>
                    <p>安装后的 OpenClaw 插件位于 <code>/www/server/panel/plugin/openclaw/</code>，实际目录如下：</p>

                    <pre>{`/www/server/panel/plugin/openclaw/
├── openclaw_main.py      # 后端主程序（~180KB）
├── index.html            # 前端界面（~500KB，含 Vue 编译产物）
├── info.json             # 插件元信息
├── icon.png              # 图标
├── install.sh            # 安装/卸载脚本
├── clawhub_registry.json # 技能注册表
├── data/                 # 运行时数据
├── Skills/               # 技能文件
├── rules/                # 规则文件
├── static/               # 静态资源
└── __pycache__/          # Python 缓存`}</pre>

                    <p>查看 info.json 可知：</p>
                    <pre>{`{
    "title": "OpenClaw",
    "name": "openclaw",
    "type": "免费应用",
    "ps": "OpenClaw 是一个自托管的人工智能助手...",
    "versions": "1.1.3",
    "shell": "install.sh",
    "checks": "/www/server/panel/plugin/openclaw",
    "author": "宝塔",
    "home": "http://www.bt.cn/bbs",
    "date": "2026-01-29"
}`}</pre>

                    <p>OpenClaw 运行在 <strong>Node.js</strong> 环境，通过 <strong>PM2</strong> 进程管理器守护。PM2 进程列表中可以看到：</p>
                    <pre>{`┌────┬──────────┬───────────┬──────┬──────┬──────────┬──────────┐
│ id │ name     │ mode      │ ↺    │ status │ cpu      │ mem       │
├────┼──────────┼───────────┼──────┼────────┼──────────┼──────────┤
│ 2  │ openclaw │ fork      │ 23   │ online │ 0%       │ 713.0mb  │
│ 3  │ substore │ fork      │ 0    │ online │ 0%       │ 92.0mb   │
└────┴──────────┴───────────┴──────┴────────┴──────────┴──────────┘`}</pre>

                    <h2>四、软件商店安装</h2>

                    <h3>4.1 安装步骤</h3>
                    <p>在宝塔面板左侧菜单进入「软件商店」，搜索「OpenClaw」：</p>
                    <ol>
                        <li><strong>搜索不到？</strong>先点击软件商店右上角「更新软件列表」，刷新缓存后再搜索。</li>
                        <li>找到 OpenClaw 后点击「安装」，安装过程由 <code>install.sh</code> 脚本驱动，自动完成 Node.js 运行环境检查、依赖安装、PM2 进程注册等操作。</li>
                        <li>安装完成后，面板左侧菜单会出现「OpenClaw」入口。</li>
                    </ol>

                    <p><strong>注意</strong>：如果之前已通过官方脚本手动安装过 OpenClaw，插件版支持接管已有实例（Docker 部署版本除外）。接管后可通过面板统一管理。</p>

                    <h3>4.2 install.sh 脚本逻辑</h3>
                    <p><code>install.sh</code> 脚本的主要流程：</p>
                    <ol>
                        <li><strong>环境检测</strong>：检查系统版本（不支持 CentOS 7 及以下），检测并修复 <code>$HOME</code> 环境变量。</li>
                        <li><strong>Git 检测</strong>：若未安装 Git，自动安装。</li>
                        <li><strong>Node.js 检测</strong>：检测 Node.js 版本，要求 <strong>v22+</strong>。版本过低时会自动升级。</li>
                        <li><strong>PM2 注册</strong>：将 OpenClaw Gateway 注册为 PM2 进程，设置 <code>fork</code> 模式（非集群模式）。</li>
                        <li><strong>配置文件生成</strong>：初始化环境变量文件和配置文件。</li>
                    </ol>

                    <h2>五、面板功能总览</h2>
                    <p>插件安装后打开设置页面，可以看到以下几个核心模块：</p>

                    <h3>5.1 AI 对话</h3>
                    <p>集成在插件内部的对话页面，可直接发起对话、切换角色、新建会话。页面提供示例问题，方便第一次使用时快速上手。当前使用的模型和额度信息直接展示在界面中。</p>

                    <h3>5.2 角色管理</h3>
                    <p>角色不再隐藏在配置文件中，而是作为独立的管理模块。支持操作：</p>
                    <ul>
                        <li>新建角色：设置身份、定义、性格等详细配置</li>
                        <li>编辑角色：修改已有角色的全部属性</li>
                        <li>查看角色列表</li>
                        <li>从角色直接进入对话</li>
                    </ul>
                    <p>同一个模型在不同角色下表现可以完全不同。可以将旅行规划、日程整理、通用问答等场景拆成不同角色，直接切换使用。</p>

                    <h3>5.3 模型管理</h3>
                    <p>独立页面展示当前配置的 AI 模型列表，包含：</p>
                    <ul>
                        <li>模型名称</li>
                        <li>供应商信息</li>
                        <li>默认模型标记</li>
                        <li>编辑、删除操作</li>
                    </ul>
                    <p>模型配置从配置文件层面提升到可视化页面，降低了理解和维护成本。</p>

                    <h3>5.4 技能管理</h3>
                    <p>技能分为两个部分：</p>
                    <ul>
                        <li><strong>已安装</strong>：当前已启用的技能列表</li>
                        <li><strong>技能市场</strong>：在线搜索和安装技能</li>
                    </ul>
                    <p>技能市场可直接搜索、安装、启用。同时也保留通过本地目录接入自定义技能的方式。</p>

                    <h3>5.5 消息平台</h3>
                    <p>插件支持接入以下消息平台：</p>
                    <ul>
                        <li>QQ 机器人</li>
                        <li>飞书机器人</li>
                        <li>钉钉机器人（需插件 v1.1.0+）</li>
                        <li>企业微信机器人（需插件 v1.2.0+）</li>
                        <li>Telegram 机器人</li>
                    </ul>
                    <p>每个平台提供独立的配置入口和启用开关。</p>

                    <h3>5.6 服务管理</h3>
                    <p>展示 OpenClaw Gateway 的运行状态，提供：</p>
                    <ul>
                        <li>服务状态面板（运行中/已停止）</li>
                        <li>停止 / 重启操作</li>
                        <li>实时日志查看</li>
                        <li>端口修改</li>
                        <li>配置文件路径展示</li>
                        <li>当前版本信息</li>
                    </ul>

                    <h3>5.7 WebUI</h3>
                    <p>WebUI 的启用状态和访问地址在面板中单独展示，可一键进入访问。与服务管理分开，功能边界更清晰。</p>

                    <h2>六、PM2 进程管理</h2>

                    <h3>6.1 PM2 使用方式</h3>
                    <p>OpenClaw 插件版通过 PM2 管理 Node.js 进程，以 <code>fork</code> 模式运行（非 <code>cluster</code> 模式）。相关常用命令：</p>

                    <pre>{`# 查看状态
pm2 list

# 查看日志
pm2 log openclaw

# 重启
pm2 restart openclaw

# 停止
pm2 stop openclaw

# 查看详细信息（含环境变量）
pm2 show openclaw

# 保存当前进程列表（开机自启）
pm2 save
pm2 startup`}</pre>

                    <h3>6.2 ↺ 重启计数过高的处理</h3>
                    <p>PM2 进程列表中 <code>↺</code> 列显示重启次数。如果重启计数持续增长，常见原因及排查方法：</p>
                    <ol>
                        <li><strong>配置文件错误</strong>：检查 <code>~/.openclaw/config.yaml</code> 或环境变量文件，确认 API Key 等必要配置正确。</li>
                        <li><strong>Node.js 版本不兼容</strong>：OpenClaw 依赖 Node.js v22+，验证方式：<code>node --version</code></li>
                        <li><strong>内存不足</strong>：推荐配置 2 核 4G 以上服务器。可通过 <code>pm2 start openclaw --max-memory-restart 2G</code> 设置内存上限。</li>
                        <li><strong>端口冲突</strong>：默认端口 18789 被占用，可在服务管理页面修改端口。</li>
                        <li><strong>日志分析</strong>：通过 <code>pm2 log openclaw --lines 100</code> 查看最近 100 行错误日志。</li>
                    </ol>

                    <h2>七、环境变量与代理配置</h2>

                    <h3>7.1 环境变量文件</h3>
                    <p>OpenClaw 的主要环境变量通过 <code>~/.openclaw/.env</code> 文件管理，插件面板也会读取部分配置。核心变量包括：</p>
                    <pre>{`# 代理配置（Telegram 等外部 API 需要）
PROXY_HOST=http://192.168.31.10:7890

# OpenAI 兼容 API 配置
LLM_API_KEY=sk-xxx
LLM_BASE_URL=https://api.openai.com/v1
LLM_MODEL=gpt-4o

# 面板访问配置
OPENCLAW_PORT=18789
OPENCLAW_HOST=0.0.0.0`}</pre>

                    <h3>7.2 代理设置</h3>
                    <p>如果服务器位于中国大陆，Telegram 等外部 API 需要配置代理。推荐两种方式：</p>
                    <ul>
                        <li><strong>环境变量</strong>：在 <code>.env</code> 中设置 <code>PROXY_HOST</code>，指向本地代理服务（如 Clash、V2Ray 等）。</li>
                        <li><strong>插件面板设置</strong>：在插件配置页面中直接填写代理地址，保存后自动更新环境变量并重启进程。</li>
                    </ul>
                    <p>配置代理后可验证连通性：</p>
                    <pre>{`# 验证 Telegram API 连通性
curl -x http://192.168.31.10:7890 https://api.telegram.org/bot{TOKEN}/getMe`}</pre>

                    <h3>7.3 更新按钮与环境变量透传</h3>
                    <p>当通过插件面板的「更新」按钮升级 OpenClaw 时，环境变量的透传是一个常见问题。原理如下：</p>
                    <ol>
                        <li>插件后端调用 <code>install.sh upgrade</code> 触发更新流程</li>
                        <li>Git 拉取最新版本代码</li>
                        <li>更新依赖（npm install）</li>
                        <li>保留 <code>.env</code> 和 <code>config.yaml</code> 配置文件</li>
                        <li>重启 PM2 进程使新配置生效</li>
                    </ol>
                    <p><strong>常见问题</strong>：更新后环境变量丢失。<strong>解决</strong>：确保 <code>~/.openclaw/.env</code> 权限正确（644），且 PM2 的 <code>ecosystem.config.js</code> 中引用了该文件。</p>

                    <h2>八、常见问题排查</h2>

                    <h3>8.1 面板左侧菜单不见了</h3>
                    <p>安装 OpenClaw 后，面板左侧菜单可能出现「OpenClaw」入口缺失的情况。原因通常是安装过程中面板缓存未刷新。解决步骤：</p>
                    <ol>
                        <li>在宝塔面板右上角点击「更新面板缓存」</li>
                        <li>或执行：<code>bt 9</code>（清空面板缓存）</li>
                        <li>刷新浏览器页面（Ctrl + F5）</li>
                    </ol>

                    <h3>8.2 PM2 重启计数过高</h3>
                    <p>见章节 6.2，首先检查 Node.js 版本（需要 v22+）和内存使用情况。</p>

                    <h3>8.3 Telegram 代理配置后不生效</h3>
                    <p>确保代理地址可达，并且在 PM2 进程重启后生效：</p>
                    <pre>{`# 检查代理连通性
curl -x http://代理地址:端口 -I https://api.telegram.org

# 重启 PM2 进程使新环境变量生效
pm2 restart openclaw --update-env

# 验证环境变量是否生效
pm2 show openclaw | grep PROXY`}</pre>

                    <h3>8.4 端口冲突</h3>
                    <p>默认端口 18789 被占用时，修改方式：</p>
                    <ol>
                        <li>插件面板 → 服务管理 → 端口修改</li>
                        <li>或在 <code>~/.openclaw/.env</code> 中修改 <code>OPENCLAW_PORT</code></li>
                        <li>修改后重启 PM2 进程</li>
                        <li>如果使用了宝塔反代，同步修改 Nginx 反代配置中的端口</li>
                    </ol>

                    <h2>九、总结</h2>
                    <p>宝塔面板的 OpenClaw 插件提供了一种比 Docker 部署更原生的使用方式。它在保留 PM2 进程管理灵活性的同时，将对话、角色、模型、技能、消息平台、服务管理等核心能力整合到面板界面中，降低了上手门槛。</p>

                    <p>本文基于宝塔官方插件开发文档（<code>BT-Panel-Plugin-Doc.pdf</code>）和实际运行环境编写，所有路径、配置、命令均已在 TencentOS Server 3.1 + 宝塔面板环境中验证。部署中如遇问题，建议首先查看<code>pm2 log openclaw</code> 的日志输出，绝大多数问题都可以从日志中找到线索。</p>

                </div>
            </div>
        </section>
    );
}
