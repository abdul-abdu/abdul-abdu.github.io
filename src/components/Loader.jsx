import React from "react";
import "../styles/loader.scss";

export default function Loader() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="loader">Loading...</div>
    </div>
  );
}
