import { onMount, onCleanup } from "solid-js";
import Particles from "./components/Particles";

export default function App(props) {
  onMount(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
      document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
    };
    window.addEventListener("mousemove", handleMouseMove);
    onCleanup(() => window.removeEventListener("mousemove", handleMouseMove));
  });

  return (
    <>
      <div class="spotlight"></div>
      <Particles />
      <main>{props.children}</main>
    </>
  );
}