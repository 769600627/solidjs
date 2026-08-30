import { useParams, A } from "@solidjs/router";
import { onMount } from "solid-js";
import { articles } from "../data/articlesData";
import { initReveal } from "../utils/animations";

export default function ArticleDetail() {
  const params = useParams();
  const article = () => articles.find((a) => a.slug === params.slug);

  onMount(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    initReveal();
  });

  return (
    <section id="article-detail">
      {article() ? (
        <div class="article-container reveal">
          <A href="/articles" class="back-link">
            ← 返回技术实战列表
          </A>
          <div class="article-header">
            <h1>{article().title}</h1>
            {article().subtitle && (
              <p class="article-subtitle">{article().subtitle}</p>
            )}
            <div class="article-meta">
              <span class="article-date">📅 {article().date}</span>
              <div class="article-tags">
                {article().tags.map((t) => (
                  <span class="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div
            class="article-content"
            innerHTML={article().html}
          ></div>
        </div>
      ) : (
        <div class="article-container reveal" style="text-align: center; padding: 4rem 2rem;">
          <h2>未找到该文章</h2>
          <p style="margin: 1.5rem 0; color: var(--text-secondary);">
            请求的文章不存在或已被移除。
          </p>
          <A href="/articles" class="btn btn-primary">
            返回实战列表
          </A>
        </div>
      )}
    </section>
  );
}
