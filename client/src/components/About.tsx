import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCards from "./ServicesCards.tsx";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Animation can be added here if needed for ServiceCards
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="pt-8 pb-20 px-4 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl">
            <ServiceCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
