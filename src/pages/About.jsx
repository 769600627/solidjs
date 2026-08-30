import { createSignal, onMount } from "solid-js";
import { initReveal } from "../utils/animations";

export default function About() {
  const [btnState, setBtnState] = createSignal({
    text: "🚀 发送消息",
    bg: "",
  });
  let isSending = false;

  onMount(() => {
    initReveal();

    // 数字滚动递增动效
    const numbers = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const endVal = parseInt(target.dataset.target, 10);
            let current = 0;
            const step = Math.max(1, Math.floor(endVal / 40));
            const timer = setInterval(() => {
              current += step;
              if (current >= endVal) {
                current = endVal;
                clearInterval(timer);
              }
              target.textContent = current + (target.dataset.suffix || "+");
            }, 30);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );
    numbers.forEach((el) => observer.observe(el));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    isSending = true;
    const form = e.target;
    setBtnState({ text: "⏳ 发送中...", bg: "" });

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setBtnState({
          text: "✅ 已发送！",
          bg: "linear-gradient(135deg, #00b894, #00cec9)",
        });
        form.reset();
      } else {
        throw new Error("fail");
      }
    } catch {
      setBtnState({
        text: "💌 感谢留言！可直接邮件联系",
        bg: "linear-gradient(135deg, #6c5ce7, #00cec9)",
      });
    }

    setTimeout(() => {
      isSending = false;
      setBtnState({ text: "🚀 发送消息", bg: "" });
    }, 4000);
  };

  return (
    <section id="about">
      <div class="about-grid">
        <div class="about-image-wrapper reveal">
          <div class="about-image">🖥️</div>
        </div>
        <div class="about-text reveal">
          <h3>折腾党 & 自建派</h3>
          <p>
            我是 Mohican，一名热爱自建（Self-Hosting）与前沿技术的极客。以飞牛 NAS（FnOS）为核心枢纽，搭建起了覆盖私有云存储、Emby 影音娱乐、MoviePilot 自动化追剧、HomeAssistant 全屋智能以及 OpenClaw AI 大模型调度的家庭数字基础设施。
          </p>
          <p>
            热衷于使用 Docker 容器编排各类现代化微服务，通过 Cloudflare Tunnel 与 Nginx 实现双栈统一域名接入，打造高可用、免折腾、极致体验的私人网络生态。
          </p>
          <div class="stats-row">
            <div class="stat-item">
              <div class="stat-number" data-target="38" data-suffix="+">
                0
              </div>
              <div class="stat-label">Docker 容器</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="20" data-suffix="+">
                0
              </div>
              <div class="stat-label">自建服务</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="10" data-suffix="+">
                0
              </div>
              <div class="stat-label">开源仓库</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="99" data-suffix=".9%">
                0
              </div>
              <div class="stat-label">在线可用率</div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-wrapper reveal">
        <div class="contact-info">
          <h3>保持联系 🤝</h3>
          <p>无论是自建经验交流、影视方案讨论、开源项目协作还是随便聊聊，都欢迎与我联系。</p>
          <div class="contact-links">
            <a href="mailto:769600627@qq.com" class="contact-link-item">
              <span class="contact-link-icon">📧</span>
              <div class="contact-link-text">
                <strong>Email</strong>
                <span>769600627@qq.com</span>
              </div>
            </a>
            <a
              href="https://github.com/769600627"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link-item"
            >
              <span class="contact-link-icon">🐙</span>
              <div class="contact-link-text">
                <strong>GitHub</strong>
                <span>github.com/769600627</span>
              </div>
            </a>
            <a
              href="https://x.com/769600627"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link-item"
            >
              <span class="contact-link-icon">🐦</span>
              <div class="contact-link-text">
                <strong>Twitter / X</strong>
                <span>@769600627</span>
              </div>
            </a>
          </div>
        </div>

        <form class="contact-form" onSubmit={handleSubmit}>
          <div class="form-group">
            <input type="text" name="name" placeholder="你的名字" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="你的邮箱" required />
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="想对我说点什么..." required></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            style={`width: 100%; justify-content: center; background: ${btnState().bg}`}
          >
            {btnState().text}
          </button>
        </form>
      </div>
    </section>
  );
}
