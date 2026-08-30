import { onMount, onCleanup } from "solid-js";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import LogoutModal from "./components/LogoutModal";

export default function App(props) {
  onMount(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
      document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 移除首屏 Boot Splash
    if (typeof window.__dismissBootSplash === "function") {
      window.__dismissBootSplash();
    }

    onCleanup(() => window.removeEventListener("mousemove", handleMouseMove));
  });

  return (
    <AuthProvider>
      <div class="spotlight"></div>
      <Particles />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
      <LogoutModal />
    </AuthProvider>
  );
}
