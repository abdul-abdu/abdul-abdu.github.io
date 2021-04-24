import React from "react";
import { Link } from "react-router-dom";
import "../styles/404.scss";

export default function NoMatch() {
  return (
    <div id="not-found">
      <h1>404</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
