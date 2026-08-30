import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Login from "./pages/Login";
import "./css/style.css";

render(
  () => (
    <MetaProvider>
      <HashRouter root={App}>
        <Route
          path="/"
          component={() => (
            <>
              <Title>Mohican | 个人主页</Title>
              <Meta
                name="description"
                content="Mohican - 全栈开发者、AI探索者、开源贡献者、自建派"
              />
              <Home />
            </>
          )}
        />
        <Route
          path="/about"
          component={() => (
            <>
              <Title>Mohican | 关于我</Title>
              <Meta
                name="description"
                content="了解 Mohican 的自建经历、家庭数据中心与技术栈"
              />
              <About />
            </>
          )}
        />
        <Route
          path="/projects"
          component={() => (
            <>
              <Title>Mohican | 精选项目 & 自建服务</Title>
              <Meta
                name="description"
                content="Mohican 的家庭自建服务、开源作品与端口直达"
              />
              <Projects />
            </>
          )}
        />
        <Route
          path="/articles"
          component={() => (
            <>
              <Title>Mohican | 技术实战</Title>
              <Meta
                name="description"
                content="飞牛 NAS、Docker 编排与双栈网络实战经验"
              />
              <Articles />
            </>
          )}
        />
        <Route
          path="/article/:slug"
          component={() => (
            <>
              <Title>Mohican | 技术实战详情</Title>
              <ArticleDetail />
            </>
          )}
        />
        <Route
          path="/login"
          component={() => (
            <>
              <Title>Mohican | 访问解锁</Title>
              <Login />
            </>
          )}
        />
        <Route
          path="*paramName"
          component={() => <Home />}
        />
      </HashRouter>
    </MetaProvider>
  ),
  document.getElementById("root")
);
