import { onMount, onCleanup } from "solid-js";
import { A } from "@solidjs/router";
import { initReveal, initTilt } from "../utils/animations";

export default function Home() {
  let typewriterEl;
  let timer;

  onMount(() => {
    initReveal();
    initTilt();

    const phrases = [
      "折腾党 & 自建派 🏠",
      "全栈开发者 🚀",
      "AI 探索者 🤖",
      "开源贡献者 💡",
      "终身学习者 📚",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
      if (!typewriterEl) return;
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typewriterEl.innerHTML =
          currentPhrase.substring(0, charIndex - 1) +
          '<span class="cursor"></span>';
        charIndex--;
      } else {
        typewriterEl.innerHTML =
          currentPhrase.substring(0, charIndex + 1) +
          '<span class="cursor"></span>';
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;
      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }
      timer = setTimeout(typeWriter, speed);
    }
    typeWriter();
  });

  onCleanup(() => {
    if (timer) clearTimeout(timer);
  });

  const navCards = [
    {
      icon: "👨‍💻",
      title: "关于我",
      desc: "了解我的背景、折腾经历与家庭数据中心",
      link: "/about",
    },
    {
      icon: "🚀",
      title: "精选项目 & 自建服务",
      desc: "飞牛私有云、Emby、HomeAssistant 与自建服务矩阵",
      link: "/projects",
    },
    {
      icon: "📝",
      title: "技术实战专栏",
      desc: "FnOS、Docker 容器编排、双栈网络与系统优化文章",
      link: "/articles",
    },
  ];

  return (
    <>
      <section class="hero">
        <div class="hero-content">
          <span class="hero-badge">👋 欢迎来到我的个人主页</span>
          <h1>
            <span class="gradient-text">Mohican</span>
          </h1>
          <div class="typewriter" ref={typewriterEl}>
            <span class="cursor"></span>
          </div>
          <div class="hero-buttons">
            <A href="/projects" class="btn btn-primary">
              🚀 探索项目
            </A>
            <A href="/about" class="btn btn-outline">
              👨‍💻 关于我
            </A>
          </div>
        </div>
        <div class="scroll-indicator">
          <span></span>
        </div>
      </section>

      <section class="explore-section">
        <div class="section-header reveal">
          <h2>
            <span class="gradient-text">探索更多</span>
          </h2>
          <p>了解我的自建服务矩阵与技术实战文章</p>
        </div>
        <div class="nav-cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
          {navCards.map((card) => (
            <A href={card.link} class="nav-card reveal tilt-card">
              <span class="nav-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </A>
          ))}
        </div>
      </section>
    </>
  );
}
