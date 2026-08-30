import { createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, setShowLogoutModal } = useAuth();
  const location = useLocation();

  return (
    <nav id="navbar">
      <A href="/" class="logo">
        Mohican
      </A>
      <ul class="nav-links">
        <li>
          <A href="/" class={location.pathname === "/" ? "active" : ""}>
            首页
          </A>
        </li>
        <li>
          <A href="/about" class={location.pathname === "/about" ? "active" : ""}>
            关于
          </A>
        </li>
        <li>
          <A href="/projects" class={location.pathname === "/projects" ? "active" : ""}>
            项目
          </A>
        </li>
        <li>
          <A href="/articles" class={location.pathname.startsWith("/article") ? "active" : ""}>
            实战
          </A>
        </li>
        <li>
          {isLoggedIn() ? (
            <button
              type="button"
              class="nav-btn"
              onClick={() => setShowLogoutModal(true)}
              style="background: rgba(0, 206, 201, 0.15); border-color: var(--accent-2);"
            >
              🔓 已解锁
            </button>
          ) : (
            <A href="/login" class="nav-btn">
              🔒 解锁
            </A>
          )}
        </li>
      </ul>
    </nav>
  );
}
