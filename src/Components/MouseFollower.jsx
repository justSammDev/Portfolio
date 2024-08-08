import { useState, useEffect, forwardRef } from "react";

const MouseFollower = forwardRef(function MouseFollower({}, inputRef) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverClickable, setIsOverClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX - 27, y: e.clientY - 27 });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.classList.contains("link") ||
        e.target.onclick
      ) {
        setIsOverClickable(true);
      }
    };

    const handleMouseOut = () => {
      setIsOverClickable(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`w-16 h-16 z-[100] max-[1100px]:hidden fixed select-none pointer-events-none rounded-[50%] bg-mouse-cursor-right bg-cover ${
        isOverClickable
          ? "rotate-180 transition-transform"
          : "rotate-0 transition-transform"
      }`}
      style={{
        left: mousePosition.x + "px",
        top: mousePosition.y + "px",
      }}
      ref={inputRef}
    ></div>
  );
});

export default MouseFollower;
