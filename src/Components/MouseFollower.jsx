import { useState, useEffect, forwardRef } from "react";

const MouseFollower = forwardRef(function MouseFollower({}, inputRef) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailElements, setTrailElements] = useState([]);
  const [isOverClickable, setIsOverClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x: x - 10, y: y - 10 });

      const newElement = {
        id: Date.now(),
        x: x + 7,
        y: y - 5,
      };

      setTrailElements((prevElements) => [...prevElements, newElement]);

      setTimeout(() => {
        setTrailElements((prevElements) =>
          prevElements.filter((element) => element.id !== newElement.id)
        );
      }, 300);
    };

    const handleMouseOver = (e) => {
      if (e.target.classList.contains("link")) {
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
        className={`MOUSE_POINTER z-[9999] fixed max-lg:hidden select-none pointer-events-none rounded-full backdrop-invert bg-opacity-5 ${
          isOverClickable
            ? "w-12 aspect-square transition-[width] duration-200"
            : "w-5 aspect-square transition-[width] duration-100"
        }`}
        style={{
          left: mousePosition.x + "px",
          top: mousePosition.y + "px",
        }}
        ref={inputRef}
      ></div>
      {!isOverClickable && (
        <div className="TRAIL">
          {trailElements.map((el) => (
            <span
              key={el.id}
              style={{
                top: `${el.y}px`,
                left: `${el.x}px`,
              }}
              className="w-2 h-2 fixed bg-gray-400 select-none pointer-events-none rounded-full blur-sm animate-bgColor"
            ></span>
          ))}
        </div>
      )}
    </>
  );
});

export default MouseFollower;
