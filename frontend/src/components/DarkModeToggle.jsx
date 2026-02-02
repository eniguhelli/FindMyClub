import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="dark-mode-btn"
      aria-label="Toggle dark mode"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;