import React, { useContext } from "react";
import { ThemeContext, Themes } from "../contexts/theme";
import "../styles/theme-input-toggle.scss";

const ToggleTheme = ({ darkMode, setDarkMode }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <form id="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === Themes.dark}
          onChange={() =>
            setTheme(theme === Themes.dark ? Themes.light : Themes.dark)
          }
        />
        <span className="slider round"></span>
      </label>
    </form>
  );
};

export default ToggleTheme;
