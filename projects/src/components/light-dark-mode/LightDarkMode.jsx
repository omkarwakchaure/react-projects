import React from "react";
import LocalStorage from "./LocalStorage";
import "./Styles.css";
const LightDarkMode = () => {
  const [theme, setTheme] = LocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="container" data-theme={theme}>
      <div>
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
