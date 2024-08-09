import { useState, useEffect, forwardRef } from "react";

const MouseFollower = forwardRef(function MouseFollower({}, inputRef) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailElements, setTrailElements] = useState([]);
  const [isOverClickable, setIsOverClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      console.log(x, y);

      setMousePosition({ x: x - 27, y: y - 27 });

      const newElement = {
        id: Date.now(),
        x,
        y,
      };

      setTrailElements((prevElements) => [...prevElements, newElement]);

      setTimeout(() => {
        setTrailElements((prevElements) =>
          prevElements.filter((element) => element.id !== newElement.id)
        );
      }, 300);
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
    <>
      <div
        className={`MOUSE_POINTER w-12 h-12 z-[9999] max-[1100px]:hidden fixed select-none pointer-events-none rounded-full backdrop-invert bg-opacity-5 ${
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
      <div className="TRAIL">
        {trailElements.map((el) => (
          <span
            key={el.id}
            style={{
              position: "fixed",
              top: `${el.y - 21}px`, // Centering the 32x32 trail element
              left: `${el.x - 21}px`, // Centering the 32x32 trail element
            }}
            className="w-8 h-8 bg-gray-400 select-none pointer-events-none rounded-full blur-sm animate-bgColor"
          ></span>
        ))}
      </div>
    </>
  );
});

export default MouseFollower;
