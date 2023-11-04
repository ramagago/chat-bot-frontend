import { useEffect } from "react";

export const useScrollList = (ref, deps) => {
  useEffect(() => {
    ref?.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [deps, ref]);
};
