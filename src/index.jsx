import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import App from "./App";
import Home from "./pages/Home";
import "./css/style.css";

render(
  () => (
    <MetaProvider>
      <HashRouter root={App}>
        <Route path="/" component={() => (
          <>
            <Title>769600627 | 链接页</Title>
            <Meta name="description" content="769600627 - 个人链接页" />
            <Home />
          </>
        )} />
      </HashRouter>
    </MetaProvider>
  ),
  document.getElementById("root")
);