import { useEffect, useState } from "react";

function useOutsideInactivator(ref) {
  const [IsActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [IsActive, setIsActive];
}

export default useOutsideInactivator;
