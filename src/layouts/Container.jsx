import React from "react";

export default function Container({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {children}
    </div>
  );
}
