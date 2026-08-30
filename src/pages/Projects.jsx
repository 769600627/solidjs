import { createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";
import { initReveal, initTilt } from "../utils/animations";

export default function Projects() {
  const { isLoggedIn } = useAuth();
  const [activeCategory, setActiveCategory] = createSignal("all");

  const projectsData = [
    {
      icon: "🐮",
      name: "飞牛私有云 (FnOS)",
      desc: "家庭私有云存储、备份、相册与系统管理中枢。",
      category: "homelab",
      tech: ["FnOS", "NAS", "私有云"],
      publicUrl: "https://fnos.769600627.xyz",
      internalUrl: "http://192.168.2.188:5666",
    },
    {
      icon: "🎬",
      name: "Emby 媒体中心",
      desc: "4K HDR 影视私人影院，全端自动刮削海报墙与硬件解码流媒体。",
      category: "media",
      tech: ["Emby", "影视", "流媒体"],
      publicUrl: "https://nas.769600627.xyz:8196",
      internalUrl: "http://192.168.2.188:8096",
    },
    {
      icon: "🍿",
      name: "MoviePilot 观影自动化",
      desc: "全自动影视识别抓取、洗版追剧、BrushFlow 刷流与 Emby 自动整理入库。",
      category: "media",
      tech: ["MoviePilot", "PT", "自动化"],
      publicUrl: "https://mp.769600627.xyz",
      internalUrl: "http://192.168.2.188:3000",
    },
    {
      icon: "🏠",
      name: "HomeAssistant 智能家居",
      desc: "全屋智能控制中枢，集成灯光、传感器、家电与自动化联动场景。",
      category: "homelab",
      tech: ["HomeAssistant", "IoT", "智能家居"],
      publicUrl: "https://ha.769600627.xyz",
      internalUrl: "http://192.168.2.188:8123",
    },
    {
      icon: "🧩",
      name: "SubStore 订阅转换",
      desc: "高级订阅管理、协议转换与节点规则自动化处理工具。",
      category: "tools",
      tech: ["SubStore", "网络", "规则"],
      publicUrl: "https://substore.769600627.xyz",
      internalUrl: "http://192.168.2.188:3301",
    },
    {
      icon: "📥",
      name: "Transmission 下载器",
      desc: "高性能 PT 做种保种客户端，深度整合 BrushFlow 差异化刷流策略。",
      category: "media",
      tech: ["Transmission", "PT", "下载"],
      publicUrl: "https://ts.769600627.xyz",
      internalUrl: "http://192.168.2.188:9091",
    },
    {
      icon: "⚡",
      name: "qBittorrent 下载器",
      desc: "多功能种子下载器，支持多站点任务管理与高速下载队列。",
      category: "media",
      tech: ["qBittorrent", "BT/PT", "下载"],
      publicUrl: "https://qb.769600627.xyz",
      internalUrl: "http://192.168.2.188:8080",
    },
    {
      icon: "🧠",
      name: "Cliproxy API 网关",
      desc: "大语言模型 API 统一反向代理网关与格式转换接口。",
      category: "ai",
      tech: ["Cliproxy", "LLM", "API代理"],
      publicUrl: "https://api.769600627.xyz",
      internalUrl: "http://192.168.2.188:8317",
    },
    {
      icon: "🍳",
      name: "GanCook 菜谱助手",
      desc: "自建今天吃什么菜谱推荐与食材灵感管理应用。",
      category: "tools",
      tech: ["GanCook", "菜谱", "生活"],
      publicUrl: "https://eat.769600627.xyz",
      internalUrl: "http://192.168.2.188:3010",
    },
    {
      icon: "📺",
      name: "咪咕视频源 (Migu)",
      desc: "咪咕视频流媒体与直播源解析转发服务。",
      category: "media",
      tech: ["Migu", "直播源", "流媒体"],
      publicUrl: "https://migu.769600627.xyz",
      internalUrl: "http://192.168.2.188:1234",
    },
    {
      icon: "🌐",
      name: "OpenWrt 软路由 (OP)",
      desc: "家庭核心旁路由网络系统，承载流量分流与插件扩展。",
      category: "homelab",
      tech: ["OpenWrt", "软路由", "网络"],
      publicUrl: "https://op.769600627.xyz",
      internalUrl: "http://192.168.2.166",
    },
    {
      icon: "🛜",
      name: "主路由器后台",
      desc: "家庭主路由网络管理控制台。",
      category: "homelab",
      tech: ["Router", "网关", "网络"],
      publicUrl: "https://lyq.769600627.xyz",
      internalUrl: "http://192.168.2.1",
    },
    {
      icon: "🤖",
      name: "OpenClaw AI 平台",
      desc: "大模型智能体（Agent）平台与工作流自动化调度中心。",
      category: "ai",
      tech: ["OpenClaw", "AI", "Agent"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:8088",
    },
    {
      icon: "🐉",
      name: "青龙面板 (Qinglong)",
      desc: "支持 Python / Node.js 的自动化定时任务与脚本管理系统。",
      category: "tools",
      tech: ["Qinglong", "自动化", "定时任务"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:15700",
    },
    {
      icon: "🧭",
      name: "Sun-Panel 导航看板",
      desc: "极简自建服务统一入口看板，轻松掌握所有家庭服务的运行状态。",
      category: "tools",
      tech: ["Sun-Panel", "Dashboard", "导航"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:3002",
    },
    {
      icon: "🎵",
      name: "ByteMuse 音乐服务",
      desc: "私人高保真云端音乐与有声读物流媒体播放服务。",
      category: "media",
      tech: ["ByteMuse", "音乐", "流媒体"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:8043",
    },
    {
      icon: "💬",
      name: "VoceChat 私有即时通讯",
      desc: "轻量安全、支持端对端通信的自托管聊天室与通知系统。",
      category: "homelab",
      tech: ["VoceChat", "IM", "私有通讯"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:3111",
    },
    {
      icon: "🛠️",
      name: "IT-Tools 开发者工具箱",
      desc: "开发者必备工具集合（编解码、JWT 调试、JSON 格式化、网络测试）。",
      category: "tools",
      tech: ["IT-Tools", "开发工具", "工具箱"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:8011",
    },
    {
      icon: "⚡",
      name: "AriaNg 下载管理",
      desc: "现代化 Aria2 Web 前端，支持全格式多线程高速下载管理。",
      category: "tools",
      tech: ["Aria2", "AriaNg", "下载"],
      publicUrl: null,
      internalUrl: "http://192.168.2.188:6880",
    },
  ];

  const categories = [
    { key: "all", name: "全部服务" },
    { key: "homelab", name: "自建系统" },
    { key: "media", name: "影视媒体" },
    { key: "ai", name: "AI 智能" },
    { key: "tools", name: "实用工具" },
  ];

  onMount(() => {
    initReveal();
    initTilt();
  });

  const filteredProjects = () => {
    if (activeCategory() === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory());
  };

  return (
    <section id="projects">
      <div class="section-header reveal">
        <h2>
          <span class="gradient-text">精选项目 & 自建服务</span>
        </h2>
        <p>家庭数据中心（Homelab）核心服务矩阵，真实域名与内网端口直达</p>
      </div>

      <div class="project-filters reveal">
        {categories.map((cat) => (
          <button
            type="button"
            class={`filter-btn ${activeCategory() === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div class="projects-grid">
        {filteredProjects().map((p) => (
          <div class="project-card reveal tilt-card">
            <div class="project-preview">
              <div class="project-preview-bg">{p.icon}</div>
            </div>
            <div class="project-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div class="project-tech">
                {p.tech.map((t) => (
                  <span class="tech-tag">{t}</span>
                ))}
              </div>
              <div class="project-links">
                {isLoggedIn() ? (
                  <>
                    {p.publicUrl && (
                      <a
                        href={p.publicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link-btn"
                      >
                        🌐 公网访问
                      </a>
                    )}
                    {p.internalUrl && (
                      <a
                        href={p.internalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link-btn internal"
                      >
                        🔗 内网直达
                      </a>
                    )}
                  </>
                ) : (
                  <A
                    href="/login"
                    class="project-link-btn"
                    style="width: 100%; justify-content: center; background: rgba(108, 92, 231, 0.15); border-color: rgba(108, 92, 231, 0.35); color: var(--accent-2);"
                  >
                    🔒 解锁后显示访问链接
                  </A>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
