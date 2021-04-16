import { useState } from "react";

const useSetloader = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return loading;
};

export default useSetloader;
