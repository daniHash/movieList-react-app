import { useEffect } from "react";

const useKey = (action, key) => {
  useEffect(() => {
    const callback = (e) => {
      if (e.key.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keyup", callback);

    return function () {
      document.removeEventListener("keyup", callback);
    };
  }, [action, key]);
};

export default useKey;
