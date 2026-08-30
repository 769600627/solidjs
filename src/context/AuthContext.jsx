import { createContext, useContext, createSignal, onMount } from "solid-js";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
  const [showLogoutModal, setShowLogoutModal] = createSignal(false);

  onMount(() => {
    const saved = localStorage.getItem("mohican_auth");
    if (saved === "true") {
      setIsLoggedIn(true);
    }
  });

  const login = (password) => {
    // 默认允许输入密码解锁访问
    if (password && password.trim().length > 0) {
      setIsLoggedIn(true);
      localStorage.setItem("mohican_auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("mohican_auth");
    setShowLogoutModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        showLogoutModal,
        setShowLogoutModal,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
