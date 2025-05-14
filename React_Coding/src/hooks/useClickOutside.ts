import { RefObject, useEffect } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  func: () => void
) => {
  useEffect(() => {
    function onClickOutSide(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        func();
      }
    }
    document.addEventListener("mousedown", onClickOutSide);
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  }, [func, ref]);
};

export default useClickOutside;
