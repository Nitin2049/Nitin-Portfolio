
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Youtube, Instagram, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      socialRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact"
      ref={contactRef}
      className="py-12 md:py-20 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent font-medium tracking-wide px-2">
          Let's work together to bring your ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div ref={formRef} className="space-y-6 md:space-y-8 order-2 lg:order-1">
          {/* Book Consultation Button */}
          <div className="text-center">
            <Button
              className="relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-400 text-white border-0 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden"
              style={{
                boxShadow: `
                  0 0 20px rgba(168, 85, 247, 0.5),
                  0 0 40px rgba(236, 72, 153, 0.3),
                  0 0 60px rgba(6, 182, 212, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                animation: 'neonPulse 2s ease-in-out infinite alternate'
              }}
              onClick={() => {
                // Add your booking logic here
                window.open("/book-consultation");
              }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                <span className="text-base sm:text-xl">Book a Consultation</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
            </Button>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-medium px-2">
              🚀 Free 30-minute strategy session • No commitment required
            </p>
          </div>
        </div>
        
        <div ref={socialRef} className="space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center lg:text-left">
              Connect With Me
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Youtube, label: 'YouTube', handle: '@nitinsingh' },
                { icon: Instagram, label: 'Instagram', handle: '@nitinsingh' },
                { icon: MessageCircle, label: 'WhatsApp', handle: '+91 7310498750' },
                { icon: Mail, label: 'Email', handle: 'contact@nitinsingh.com' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="https://www.instagram.com/maxxcoding?igsh=MWxjNGltMno5dm8xeA=="
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-medium text-sm sm:text-base">{social.label}</div>
                    <div className="text-white/60 text-xs sm:text-sm truncate">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
