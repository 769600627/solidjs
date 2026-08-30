import { createSignal, onMount } from "solid-js";
import { useSearchParams, useNavigate } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";
import { initReveal } from "../utils/animations";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const [password, setPassword] = createSignal("");
  const [errorMsg, setErrorMsg] = createSignal("");

  onMount(() => {
    initReveal();
    if (isLoggedIn()) {
      const redirect = searchParams.redirect;
      if (redirect) {
        window.location.href = decodeURIComponent(redirect);
      } else {
        navigate("/projects");
      }
    }
  });

  const handleUnlock = (e) => {
    e.preventDefault();
    if (!password().trim()) {
      setErrorMsg("请输入访问密钥");
      return;
    }
    const success = login(password());
    if (success) {
      const redirect = searchParams.redirect;
      if (redirect) {
        window.location.href = decodeURIComponent(redirect);
      } else {
        navigate("/projects");
      }
    } else {
      setErrorMsg("密钥不正确，请重试");
    }
  };

  return (
    <section style="min-height: calc(100vh - 160px); display: flex; align-items: center; justify-content: center; padding: 2rem;">
      <div
        class="reveal"
        style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 3rem 2.5rem; width: min(420px, 92vw); backdrop-filter: blur(16px); text-align: center; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);"
      >
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🔒</div>
        <h2 style="font-size: 1.6rem; margin-bottom: 0.5rem;">
          <span class="gradient-text">私有服务解锁</span>
        </h2>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 2rem;">
          请输入访问密码以解锁家庭数据中心内网及私有服务直达链接
        </p>

        <form onSubmit={handleUnlock} style="display: flex; flex-direction: column; gap: 1.2rem;">
          <div class="form-group">
            <input
              type="password"
              placeholder="输入访问密钥..."
              value={password()}
              onInput={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
              required
              autofocus
            />
          </div>

          {errorMsg() && (
            <p style="color: #ff7675; font-size: 0.85rem; margin: -0.4rem 0 0;">
              {errorMsg()}
            </p>
          )}

          <button
            type="submit"
            class="btn btn-primary"
            style="width: 100%; justify-content: center; padding: 0.9rem;"
          >
            🔓 立即解锁
          </button>
        </form>
      </div>
    </section>
  );
}
