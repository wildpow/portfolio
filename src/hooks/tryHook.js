import { useEffect } from "react";

export const useOnClickOutside = (ref, handler, state) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    const keyHandler = event => {
      if (e.key === "Escape" && state === true) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [ref, handler, state]);
};
