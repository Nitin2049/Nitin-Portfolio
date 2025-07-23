import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

const Navigation = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      element.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    console.log("Hamburger clicked, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("New state will be:", !isMobileMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className="top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-serif tracking-wide">
            Nitin Singh
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-white font-bold transition-all duration-300 text-lg px-4 py-2 hover:text-gray-300 border border-white/20 rounded-lg hover:border-white/40"
            >
              Home
            </button>

            <button
              onClick={() => {
                ReactGA.event({
                  category: "Button",
                  action: "Clicked 'Pricing' Button",
                  label: "Pricing Button",
                });
                navigate("/pricing");
              }}
              className="text-white font-bold transition-all duration-300 text-lg px-4 py-2 hover:text-gray-300 border border-white/20 rounded-lg hover:border-white/40"
            >
              Pricing
            </button>

            <button
              onClick={() => {
                ReactGA.event({
                  category: "Button",
                  action: "Clicked 'Navbar Book Consultation' Button",
                  label: "Navbar Book Consultation Button",
                });
                navigate("/book-consultation");
              }}
              className="text-white font-bold transition-all duration-300 text-lg px-4 py-2 hover:text-gray-300 border border-white/20 rounded-lg hover:border-white/40"
            >
              Book Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mb-8">
            <div className="px-4 pt-4 pb-4 space-y-2 bg-white/10 backdrop-blur-md border-t border-white/20">
              <button
                onClick={() => {
                  console.log(
                    "Home clicked - navigating to / and closing menu"
                  );
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center px-4 py-3 text-white font-bold transition-all duration-300 text-lg hover:text-gray-300 border border-white/20 rounded-lg hover:border-white/40"
              >
                Home
              </button>
              <button
                onClick={() => {
                  console.log(
                    "Pricing clicked - navigating to /pricing and closing menu"
                  );
                  navigate("/pricing");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center px-4 py-3 text-white font-bold transition-all duration-300 text-lg hover:text-gray-300 border border-white/20 rounded-lg hover:border-white/40 mt-2"
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  console.log(
                    "Book Consultation clicked - navigating to /book-consultation and closing menu"
                  );
                  navigate("/book-consultation");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center px-4 py-3 text-white font-bold transition-all duration-300 text-lg hover:text-gray-300 border border-white/20 rounded-lg hover:border-white/40 mt-2"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
