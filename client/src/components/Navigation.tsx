
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Navigation slide-in animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      ref={navRef}
      className="top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
