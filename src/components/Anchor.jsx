import React from "react";

export default function Anchor({ href, text }) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      style={{ color: "#fbbc05" }}
    >
      {text}
    </a>
  );
}
