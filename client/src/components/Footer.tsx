
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const iconsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Animate icons on hover
    iconsRef.current.forEach((icon) => {
      if (icon) {
        const handleMouseEnter = () => {
          gsap.to(icon, {
            y: -5,
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(icon, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          icon.removeEventListener('mouseenter', handleMouseEnter);
          icon.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="py-12 px-4 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <p className="text-white/80 text-sm">
                © 2025 Nitin Singh. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Crafted with ❤️ by Nitin Singh
              </p>
            </div>
            
            {/* <div className="flex space-x-6">
              {[
                { icon: Youtube, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: MessageCircle, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  ref={(el) => (iconsRef.current[index] = el)}
                  href={social.href}
                  className="text-white/60 hover:text-blue-400 transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
