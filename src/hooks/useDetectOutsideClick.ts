import React, { useState, useEffect } from "react";

type Return = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const useDetectOutsideClick = (
  element: React.RefObject<HTMLDivElement>
): Return => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent): void => {
      if (
        element.current !== null &&
        !element.current.contains(e.target as Node)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
