import { useState } from "react";

function useToggle() {
  const [toggle, setToggle] = useState<null | number>(null);

  function handleToggle(idx: number) {
    if (toggle === idx) {
      setToggle(null);
    } else {
      setToggle(idx);
    }
  }

  return { toggle, handleToggle };
}

export default useToggle;
