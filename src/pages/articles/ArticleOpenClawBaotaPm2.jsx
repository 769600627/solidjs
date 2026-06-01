import { onMount } from 'solid-js';
import { A } from '@solidjs/router';

export default function ArticleOpenClawBaotaPm2() {
    onMount(() => {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        window.scrollTo(0, 0);
    });

    return (
        <section id="article-detail">
            <div class="article-container reveal">
                <A href="/articles" class="back-link">← 返回文章列表</A>
                <div class="article-header">
                    <h1>宝塔面板 OpenClaw 从安装到生产：PM2 托管、更新修复与环境变量优化</h1>
                    <p class="article-subtitle">npm 安装 · PM2 进程守护 · 更新按钮环境修复 · 控制面板优化 · 完整运维方案</p>
                    <div class="article-meta">
                        <span class="article-date">2026-06-01</span>
                        <div class="article-tags">
                            <span class="tech-tag">OpenClaw</span>
                            <span class="tech-tag">Baota</span>
                            <span class="tech-tag">PM2</span>
                            <span class="tech-tag">TencentOS</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">运维</span>
                        </div>
                    </div>
                </div>
                <div class="article-content">

                    <h2>一、背景</h2>
                    <p>OpenClaw 可以通过多种方式安装：Docker、一键脚本、商店版。但在国内服务器（TencentOS）上，最贴合现有运维习惯的方式是通过 <strong>宝塔面板 + npm 全局安装 + PM2 进程管理</strong>。</p>
                    <p>这种方式的好处是：</p>
                    <ul>
                        <li>与宝塔面板已有的 Node.js 版本管理集成</li>
                        <li>PM2 提供自动重启、日志轮转、资源监控</li>
                        <li>控制面板可绑定域名，通过 HTTPS 安全访问</li>
                        <li>更新流程简单：npm update 后 PM2 重载</li>
                    </ul>
                    <p>但也存在一些坑：更新按钮失效、环境变量未透传、PM2 频繁重启。本文将逐一解决。</p>

                    <h2>二、安装</h2>

                    <h3>2.1 通过宝塔面板安装 Node.js</h3>
                    <p>在宝塔面板的「软件商店」中安装 Node.js 版本管理器，选择 v24.x 版本。安装后确认：</p>
                    <pre>{`$ node --version
v24.16.0
$ npm --version
11.x`}</pre>

                    <h3>2.2 npm 全局安装 OpenClaw</h3>
                    <pre>{`npm install -g openclaw@latest

# 验证
$ openclaw --version
OpenClaw 2026.5.28 (e932160)`}</pre>

                    <p>安装完成后，OpenClaw 位于 Node.js 的全局模块目录：</p>
                    <pre>{`/www/server/nvm/versions/node/v24.16.0/lib/node_modules/openclaw/
└── openclaw.mjs     ← 入口文件
└── dist/            ← 编译产物
└── CHANGELOG.md`}</pre>

                    <p>全局 symlink 指向 <code>/www/server/nvm/versions/node/v24.16.0/bin/openclaw</code>。</p>

                    <h2>三、PM2 进程管理</h2>

                    <h3>3.1 为什么用 PM2</h3>
                    <p>OpenClaw Gateway 是一个长期运行的后台服务，需要：</p>
                    <ul>
                        <li><strong>自动重启</strong>：进程崩溃后自动拉起</li>
                        <li><strong>日志管理</strong>：统一管理 stdout/stderr 日志</li>
                        <li><strong>资源监控</strong>：CPU、内存一目了然</li>
                        <li><strong>零停机更新</strong>：PM2 reload 实现无缝切换</li>
                    </ul>

                    <h3>3.2 启动配置</h3>
                    <pre>{`$ pm2 start openclaw -- gateway --port 18789

$ pm2 save
$ pm2 startup   # 生成开机自启 systemd 单元`}</pre>

                    <p>其中端口 18789 是 OpenClaw Gateway 的默认端口，也是控制面板的访问端口。</p>

                    <h3>3.3 查看状态</h3>
                    <pre>{`$ pm2 list
┌────┬───────────┬──────────┬─────────┬──────────┬────────┬──────┬───────────┬─────┐
│ id │ name      │ version  │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu │
├────┼───────────┼──────────┼─────────┼──────────┼────────┼──────┼───────────┼─────┤
│ 2  │ openclaw  │ 2026.5.…│ fork    │ 409876   │ 3h     │ 23   │ online    │ 0%  │
└────┴───────────┴──────────┴─────────┴──────────┴────────┴──────┴───────────┴─────┘`}</pre>

                    <p><strong>注意 restart 计数（↺）</strong>：重启次数过多说明有异常。常见原因包括配置错误导致 Gateway 启动后立即退出。</p>

                    <h2>四、更新按钮与环境变量优化</h2>

                    <h3>4.1 问题的现象</h3>
                    <p>OpenClaw 控制面板的「检查更新」按钮点击后没有任何反应，或者提示找不到更新路径。原因是 Gateway 进程缺少正确的工作路径和环境变量。</p>

                    <h3>4.2 根因分析</h3>
                    <p>PM2 启动的进程与手动启动的进程工作目录不同。PM2 默认的 <code>exec_cwd</code> 是用户 home 目录（<code>/root</code>），但 OpenClaw 的更新逻辑需要：</p>
                    <ul>
                        <li><code>OPENCLAW_PATH_BOOTSTRAPPED=1</code></li>
                        <li><code>OPENCLAW_GATEWAY_PORT</code></li>
                        <li>正确的 <code>PATH</code> 环境变量（含 npm 全局 bin 目录）</li>
                    </ul>

                    <h3>4.3 解决方案：PM2 Ecosystem 配置</h3>
                    <p>创建 <code>ecosystem.config.cjs</code> 文件：</p>
                    <pre>{`module.exports = {
  apps: [{
    name: 'openclaw',
    script: 'openclaw',
    args: 'gateway --port 18789 --bind lan',
    cwd: '/root/.openclaw',
    env: {
      NODE_ENV: 'production',
      OPENCLAW_HIDE_BANNER: '1',
      OPENCLAW_GATEWAY_PORT: '18789',
      http_proxy: 'http://192.168.31.10:7890',
      https_proxy: 'http://192.168.31.10:7890',
      no_proxy: 'localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8',
    },
    error_file: '/root/logs/openclaw-error.log',
    out_file: '/root/logs/openclaw-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_restarts: 10,
    min_uptime: '30s',
    restart_delay: 5000,
  }]
};`}</pre>

                    <p>关键点：</p>
                    <ul>
                        <li><strong>cwd</strong> 设为 <code>/root/.openclaw</code> 确保工作路径正确</li>
                        <li><strong>env</strong> 显式传入所有所需的代理和环境变量</li>
                        <li><strong>max_restarts / min_uptime</strong> 控制重启策略，避免配置错误导致无限重启</li>
                    </ul>

                    <h3>4.4 更新流程</h3>
                    <pre>{`# 1. npm 全局更新
npm update -g openclaw

# 2. PM2 重载（零停机）
pm2 reload openclaw

# 或完全重启
pm2 restart openclaw`}</pre>

                    <p>通过 ecosystem 配置启动后，控制面板的「检查更新」按钮能正确识别版本号并执行更新。</p>

                    <h2>五、控制面板优化</h2>

                    <h3>5.1 绑定域名与 HTTPS</h3>
                    <p>通过宝塔面板的反代功能，将域名代理到 <code>http://127.0.0.1:18789</code>：</p>
                    <pre>{`# 宝塔面板 → 网站 → 添加站点
域名: claw.example.com
目标: http://127.0.0.1:18789
SSL: 自动申请 Let's Encrypt 证书`}</pre>

                    <p>同时确保 OpenClaw 的 controlUi 配置允许外部来源：</p>
                    <pre>{`"gateway": {
  "controlUi": {
    "enabled": true,
    "basePath": "/app/trim-openclaw/default",
    "allowedOrigins": ["*"]
  }
}`}</pre>

                    <h3>5.2 安全加固</h3>
                    <p>设置设备绑定和 Token 认证，防止控制面板暴露在公网：</p>
                    <pre>{`"gateway": {
  "auth": {
    "token": "your-secure-token"
  },
  "tailscale": {
    "mode": "off"
  }
}`}</pre>

                    <p>建议配合宝塔面板的「禁止 IP 直接访问」功能，仅允许通过域名 + HTTPS 访问控制面板。</p>

                    <h3>5.3 日志管理</h3>
                    <p>配置 PM2 日志轮转：</p>
                    <pre>{`$ pm2 install pm2-logrotate
$ pm2 set pm2-logrotate:max_size 100M
$ pm2 set pm2-logrotate:retain 5
$ pm2 set pm2-logrotate:compress true`}</pre>

                    <h2>六、异常排查</h2>

                    <h3>6.1 Gateway 频繁重启</h3>
                    <p>PM2 的 restart 计数过高（示例中 ↺=23）时，查看错误日志：</p>
                    <pre>{`$ tail -50 /root/.pm2/logs/openclaw-error.log`}</pre>

                    <p>常见的 restart 原因：</p>
                    <ul>
                        <li><strong>Invalid config</strong>：openclaw.json 或 models.json 有无法识别的字段</li>
                        <li><strong>端口被占用</strong>：18789 被其他进程占用导致 Gateway 无法绑定</li>
                        <li><strong>models.json 失步</strong>：openclaw.json 和 models.json 的 providers 不一致</li>
                        <li><strong>代理超时</strong>：fetch timeout 导致 Telegram/DingTalk 通道初始化失败</li>
                    </ul>

                    <h3>6.2 Telegram 通道不响应</h3>
                    <p>如本文前篇所述，Telegram Bot 无法直连海外 API，必须走代理。PM2 ecosystem 中确保传入了正确的 <code>http_proxy</code>/<code>https_proxy</code> 环境变量。</p>

                    <h3>6.3 更新后版本未变</h3>
                    <p>如果 <code>npm update -g openclaw</code> 后版本号没有变化，可能是 npm 缓存问题：</p>
                    <pre>{`$ npm cache clean --force
$ npm install -g openclaw@latest`}</pre>

                    <p>也可以通过指定版本号强制安装：</p>
                    <pre>{`$ npm install -g openclaw@2026.5.30`}</pre>

                    <h2>七、完整运维命令</h2>

                    <pre>{`# PM2 管理
pm2 list                        # 查看所有进程
pm2 logs openclaw               # 实时日志
pm2 logs openclaw --lines 100   # 查看最后100行
pm2 restart openclaw            # 重启
pm2 reload openclaw             # 零停机重载
pm2 stop openclaw               # 停止
pm2 delete openclaw             # 删除进程

# 更新
npm update -g openclaw          # npm 更新
pm2 restart openclaw            # 应用新版本

# 开机自启
pm2 startup                     # 生成 systemd 单元
pm2 save                        # 保存当前进程列表

# 日志轮转
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 100M

# 资源监控
pm2 monit                       # 实时终端监控
pm2 show openclaw               # 进程详情`}</pre>

                    <h2>八、总结</h2>
                    <p>通过宝塔面板 + npm + PM2 的组合，OpenClaw 可以在国内服务器上稳定运行：</p>
                    <ul>
                        <li><strong>PM2 统一管理</strong>：取代原始 Gateway 进程，提供自动重启、日志管理、资源监控</li>
                        <li><strong>环境变量显式配置</strong>：解决更新按钮失效问题，确保控制面板功能完整</li>
                        <li><strong>代理透传</strong>：Telegram/DingTalk 通道通过 PM2 env 获得代理能力</li>
                        <li><strong>控制面板加固</strong>：域名绑定 + HTTPS + Token 认证，安全可审计</li>
                        <li><strong>完整运维体系</strong>：更新、备份、监控、日志轮转一条龙</li>
                    </ul>

                    <p>这套方案已在 TencentOS + 宝塔面板环境中生产运行，restart 从频繁到稳定，控制面板更新按钮正常响应。</p>

                </div>
            </div>
        </section>
    );
}
