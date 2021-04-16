import React from "react";
import "../styles/theme-input-toggle.scss";

const ToggleTheme = ({ darkMode, setDarkMode }) => {
  return (
    <form id="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round"></span>
      </label>
    </form>
  );
};

export default ToggleTheme;
