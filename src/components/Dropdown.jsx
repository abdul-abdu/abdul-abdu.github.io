import React from "react";
import "../styles/dropdown.scss";

export default function Dropdown() {
  return (
    <div id="dropdown">
      <select>
        <option value="english">English</option>
        <option value="russian">Russian</option>
        <option value="uzbek">Uzbek</option>
      </select>
    </div>
  );
}
