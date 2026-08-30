import { onMount } from "solid-js";
import { A } from "@solidjs/router";
import { articles } from "../data/articlesData";
import { initReveal } from "../utils/animations";

export default function Articles() {
  onMount(() => {
    initReveal();
  });

  return (
    <section id="articles">
      <div class="section-header reveal">
        <h2>
          <span class="gradient-text">技术实战</span>
        </h2>
        <p>深入系统底层与网络架构，记录飞牛 NAS、Docker 编排与大模型实战经验</p>
      </div>

      <div class="articles-list">
        {articles.map((item) => (
          <A
            href={`/article/${item.slug}`}
            class="article-card reveal"
          >
            <div class="article-meta">
              <span class="article-date">📅 {item.date}</span>
              <div class="article-tags">
                {item.tags.map((t) => (
                  <span class="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span class="read-more">阅读全文 →</span>
          </A>
        ))}
      </div>
    </section>
  );
}
