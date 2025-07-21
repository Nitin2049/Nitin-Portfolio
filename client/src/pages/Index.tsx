import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Page load animation
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
