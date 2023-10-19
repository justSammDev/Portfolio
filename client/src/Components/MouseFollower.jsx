import { useState, useEffect, forwardRef } from "react";

const MouseFollower = forwardRef(function MouseFollower({}, inputRef) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX - 27, y: e.clientY - 27 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className=" bg-fuchsia-100 border  w-16 h-16 fixed select-none pointer-events-none rounded-[50%] bg-clip-text"
      style={{
        left: mousePosition.x + "px",
        top: mousePosition.y + "px",
      }}
      ref={inputRef}
    ></div>
  );
});

export default MouseFollower;
