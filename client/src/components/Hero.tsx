
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Hero text animations
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Floating particles animation
    if (particlesRef.current) {
      const particles = Array.from(particlesRef.current.children) as HTMLElement[];
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: "random(-50, 50)",
          x: "random(-30, 30)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });
      });
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-16 pb-4"
    >
      {/* Animated background particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 
          ref={titleRef}
          className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          
          Welcome to the world of Nitin Singh
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 mb-8 font-light"
        >
          Web Developer & UI/UX Designer
        </p>
        
        <div ref={buttonRef}>
          <Button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white border-0 transition-all duration-300 px-8 py-6 text-lg rounded-full shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-violet-500/60 hover:scale-105 glow-button"
          >
            View My Work
          </Button>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 pointer-events-none" />
    </section>
  );
};

export default Hero;
