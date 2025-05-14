import { useEffect } from "react";

const useEscapeKeyDown = (key: string, func: () => void) => {
  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === key) {
        func();
      }
    }
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, [func, key]);
};

export default useEscapeKeyDown;
