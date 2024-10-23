import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = ({ onFinish }) => {
  const [loaderValue, setLoaderValue] = useState(0);
  const container = useRef();

  const updateLoader = () => {
    return new Promise((resolve) => {
      const update = () => {
        setLoaderValue((prevValue) => {
          if (prevValue >= 100) {
            clearInterval(interval);
            resolve();
            return 100;
          }
          let newValue = prevValue + Math.floor(Math.random() * 10) + 1;
          return newValue > 100 ? 100 : newValue;
        });
      };

      const interval = setInterval(
        update,
        Math.floor(Math.random() * 100) + 20
      );
    });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".PRELOADER_BAR_TOP", {
        y: -500,
        duration: 0.7,
        ease: "bounce",
      })
        .from(
          ".PRELOADER_BAR_BOT",
          {
            y: 500,
            duration: 0.7,
            ease: "bounce",
          },
          "<"
        )
        .from(".PRELOADER_VALUE", { y: 200, duration: 0.3, ease: "power2.out" })
        .call(() => {
          updateLoader().then(() => {
            tl.to(".PRELOADER_VALUE", {
              y: 200,
              duration: 0.3,
              ease: "power2.out",
            })
              .to(
                ".PRELOADER_BAR_TOP",
                {
                  y: -500,
                  duration: 0.7,
                  ease: "bounce",
                },
                ">"
              )
              .to(
                ".PRELOADER_BAR_BOT",
                {
                  y: 500,
                  duration: 0.7,
                  ease: "bounce",
                },
                "<"
              )
              .to(".PRELOADER", {
                opacity: 0,
                duration: 0.5,
                display: "none",
                ease: "power2.inOut",
                onComplete: onFinish,
              });
          });
        });
    },
    { scope: container }
  );

  return (
    <div
      className="PRELOADER w-full absolute bg-[#0b0b0b] z-20"
      ref={container}
    >
      <div className="PRELOADER_BAR_TOP w-full bg-black h-[50vh]"></div>
      <div className="PRELOADER_BAR_BOT w-full bg-black h-[50vh]"></div>
      <div className="PRELOADER_VALUE absolute bottom-0 right-1 font-exo text-9xl">
        {loaderValue}%
      </div>
    </div>
  );
};

export default Preloader;
