import { useState, useMemo } from "react";
export const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const bind = useMemo(
    () => ({
      onMouseMove: (event) => {
        setX(event.nativeEvent.offsetX);
        setY(event.nativeEvent.offsetY);
      },
    }),
    []
  );

  return [x, y, bind];
};
