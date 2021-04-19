import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
};

export default useScrollTop;
