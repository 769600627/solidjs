import { onMount } from "solid-js";
import { initReveal, initTilt } from "../utils/animations";

export default function Skills() {
  const skillsData = [
    {
      icon: "🎨",
      title: "前端开发",
      description: "构建响应式、现代化、交互体验丰富的 Web 应用与仪表盘",
      tags: [
        { name: "SolidJS", level: 88 },
        { name: "React", level: 82 },
        { name: "Vue.js", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vite", level: 90 },
      ],
    },
    {
      icon: "⚙️",
      title: "后端与 API",
      description: "设计高可用、低延迟的服务端架构、中间件与 API 代理",
      tags: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "FastAPI / Flask", level: 80 },
        { name: "RESTful API", level: 90 },
        { name: "WebSocket", level: 82 },
      ],
    },
    {
      icon: "☁️",
      title: "DevOps & 容器运维",
      description: "微服务容器化编排、自动化部署与反向代理网络",
      tags: [
        { name: "Docker & Compose", level: 95 },
        { name: "Linux / Debian", level: 90 },
        { name: "Nginx 反向代理", level: 88 },
        { name: "Cloudflare Tunnel", level: 92 },
        { name: "GitHub Actions", level: 85 },
      ],
    },
    {
      icon: "🤖",
      title: "AI 应用与智能体",
      description: "大语言模型私有化部署、Agent 智能代理与 API 网关调度",
      tags: [
        { name: "LLM 大模型调度", level: 88 },
        { name: "OpenClaw 智能体", level: 90 },
        { name: "Ollama Embeddings", level: 82 },
        { name: "Cliproxy / Grok2API", level: 88 },
        { name: "Prompt 工程", level: 85 },
      ],
    },
    {
      icon: "🎬",
      title: "影视媒体全流程",
      description: "私人影院流媒体、自动化搜刮、追剧入库与刷流保种",
      tags: [
        { name: "Emby 影音服务器", level: 90 },
        { name: "MoviePilot 自动化", level: 92 },
        { name: "BrushFlow 刷流策略", level: 88 },
        { name: "Transmission / qB", level: 90 },
        { name: "FFmpeg 硬件转码", level: 80 },
      ],
    },
    {
      icon: "🗄️",
      title: "网络与私有云基础设施",
      description: "软路由、全屋智能中枢、IPv4/IPv6 双栈穿透与数据存储",
      tags: [
        { name: "飞牛 FnOS 私有云", level: 92 },
        { name: "HomeAssistant 智能家居", level: 85 },
        { name: "SubStore 订阅转换", level: 88 },
        { name: "PostgreSQL / Redis", level: 80 },
        { name: "双栈隧道 / CoreDNS", level: 88 },
      ],
    },
  ];

  onMount(() => {
    initReveal();
    initTilt();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar, idx) => {
              const lvl = bar.dataset.level;
              setTimeout(() => {
                bar.style.width = lvl + "%";
              }, idx * 60);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      document.querySelectorAll(".skill-bar-group").forEach((el) => observer.observe(el));
    }, 100);
  });

  return (
    <section id="skills">
      <div class="section-header reveal">
        <h2>
          <span class="gradient-text">技能栈</span>
        </h2>
        <p>持续学习，深度折腾，不断探索与突破技术边界</p>
      </div>

      <div class="skills-grid">
        {skillsData.map((skill) => (
          <div class="skill-card reveal tilt-card">
            <div class="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div class="skill-tags">
              {skill.tags.map((t) => (
                <span class="skill-tag">{t.name}</span>
              ))}
            </div>
            <div class="skill-bar-group">
              {skill.tags.map((t) => (
                <div class="skill-bar-item">
                  <div class="skill-bar-header">
                    <span>{t.name}</span>
                    <span>{t.level}%</span>
                  </div>
                  <div class="skill-bar-track">
                    <div class="skill-bar-fill" data-level={t.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
