import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const contactContainer = useRef();
  const { contextSafe } = useGSAP({ scope: contactContainer });
  const [contactPopup, setContactPopup] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainer.current,
        start: "top bottom",
        end: "top 80%",
        scrub: true,
        once: true,
        // markers: true,
      },
    });
    mm.add("(min-width:1024px)", () => {
      tlContact.to(".CONTACT_HEADING", { x: "22rem" }, "<");
    });
    mm.add("(max-width:767px)", () => {
      tlContact.to(".CONTACT_HEADING", { x: "6rem" }, "<");
    });
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      tlContact.to(".CONTACT_HEADING", { x: "15rem" }, "<");
    });
  });
  const handleRevealClickContact = contextSafe(() => {
    setContactPopup((prevState) => {
      const newState = !prevState;
      const tlContact = gsap.timeline();

      if (newState) {
        // Opening animation
        tlContact
          .fromTo(
            ".CONTENT_CONTACT",
            { height: 0 },
            {
              display: "flex",
              height: "auto",
              duration: 0.2,
              ease: "bounce",
            }
          )
          .to(
            ".CONTACT_TEXT",
            { width: "100%", scale: 1, duration: 0.3, ease: "power4" },
            "<0.03"
          );
      } else {
        // Closing animation

        tlContact
          .to(".CONTACT_TEXT", {
            width: 0,
            scale: 0,
            duration: 0.3,
            ease: "power4",
          })
          .to(
            ".CONTENT_CONTACT",
            {
              height: 0,
              duration: 0.3,
              ease: "power3.in",
            },
            "<0.03"
          )
          .set(".CONTENT_CONTACT", { display: "none" });
      }

      return newState;
    });
  });

  return (
    <section
      id="contact"
      className="CONTACT w-full block bg-[#09090a] transition-colors duration-200 hover:bg-[#151516] rounded-lg"
    >
      <div
        className="w-11/12 mx-auto flex flex-col items-center relative gap-7 transition-colors duration-200  bg-[#151516] hover:bg-[#09090a] lg:my-12 my-4 py-2 lg:py-4 rounded-3xl"
        ref={contactContainer}
        onClick={handleRevealClickContact}
      >
        <div className="HEADING w-full flex items-center justify-center pr-2 py-3">
          <h2 className="CONTACT_HEADING text-3xl md:text-5xl lg:text-8xl font-exo">
            Contact
          </h2>
        </div>

        <div className="CONTENT_CONTACT hidden w-full justify-center items-center px-4">
          <p className="CONTACT_TEXT w-0 text-center scale-0 text-lg md:text-2xl lg:text-4xl">
            Contact me at:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samriddadevkota@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-exo text-gray-600 link"
            >
              samriddadevkota@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
