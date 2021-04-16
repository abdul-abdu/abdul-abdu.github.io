import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <i
            style={{
              border: "solid #34a853",
              borderWidth: "0 10px 10px 0",
              display: "inline-block",
              padding: "10px",
              transform: "rotate(-135deg)",
              cursor: "pointer",
            }}
          ></i>
        </div>
      )}
    </div>
  );
}
