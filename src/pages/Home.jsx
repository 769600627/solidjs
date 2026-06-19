import { onMount, onCleanup } from "solid-js";

export default function Home() {
  let typewriterEl;
  let timer;

  onMount(() => {
    const phrases = ["开发者 🚀", "折腾爱好者 ⚡", "开源贡献者 💡", "自建派 🏠"];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;

    function typeWriter() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typewriterEl.innerHTML = currentPhrase.substring(0, charIndex - 1) + '<span class="cursor"></span>';
        charIndex--;
      } else {
        typewriterEl.innerHTML = currentPhrase.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
      }
      let speed = isDeleting ? 40 : 80;
      if (!isDeleting && charIndex === currentPhrase.length) { speed = 2000; isDeleting = true; }
      else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; speed = 500; }
      timer = setTimeout(typeWriter, speed);
    }
    typeWriter();
  });

  onCleanup(() => clearTimeout(timer));

  const links = [
    { icon: "🐙", title: "GitHub", desc: "我的开源项目", url: "https://github.com/769600627" },
    { icon: "🐦", title: "Twitter / X", desc: "日常动态", url: "https://x.com/769600627" },
    { icon: "📧", title: "Email", desc: "联系我", url: "mailto:769600627@example.com" },
    { icon: "📝", title: "博客", desc: "技术文章与思考", url: "https://www.769600627.xyz" },
  ];

  return (
    <>
      <section class="hero" style="min-height: 100vh;">
        <div class="hero-content">
          <span class="hero-badge">{'👋'} 欢迎来到我的链接页</span>
          <h1>
            <span class="gradient-text">769600627</span>
          </h1>
          <div class="typewriter" ref={typewriterEl}></div>
          <div class="link-grid">
            {links.map((link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" class="link-card">
                <span class="link-card-icon">{link.icon}</span>
                <div class="link-card-text">
                  <strong>{link.title}</strong>
                  <span>{link.desc}</span>
                </div>
                <span class="link-card-arrow">{'→'}</span>
              </a>
            ))}
          </div>
        </div>
        <div class="scroll-indicator"><span></span></div>
      </section>

      <footer style="position: relative; z-index: 1; text-align: center; padding: 2rem; border-top: 1px solid var(--glass-border); color: var(--text-secondary); font-size: 0.85rem;">
        <p>{'©'} {new Date().getFullYear()} 769600627. Made with {'❤'}</p>
      </footer>
    </>
  );
}