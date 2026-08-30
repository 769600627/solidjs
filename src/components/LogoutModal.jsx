import { useAuth } from "../context/AuthContext";

export default function LogoutModal() {
  const { showLogoutModal, setShowLogoutModal, logout } = useAuth();

  if (!showLogoutModal()) return null;

  return (
    <div class="dialog-overlay" onClick={() => setShowLogoutModal(false)}>
      <div class="dialog-box" onClick={(e) => e.stopPropagation()}>
        <h3>锁定私有服务</h3>
        <p>确定要退出解锁状态吗？退出后访问内网与私有服务链接需重新输入密码。</p>
        <div class="dialog-actions">
          <button
            type="button"
            class="btn btn-outline"
            onClick={() => setShowLogoutModal(false)}
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={logout}
          >
            确认锁定
          </button>
        </div>
      </div>
    </div>
  );
}
