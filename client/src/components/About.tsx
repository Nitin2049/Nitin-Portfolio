import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ServiceCards from './ServicesCards.tsx';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      id="about"
      ref={aboutRef}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <div ref={logoRef} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
              <img 
                src="icons/logo.png" 
                alt="Profile Picture" 
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
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
