import React from "react";

export default function Link(props) {
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById(props.to).offsetTop,
      behavior: "smooth",
    });
  };

  return <button {...props} onClick={handleScroll}></button>;
}
