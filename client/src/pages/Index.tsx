
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
