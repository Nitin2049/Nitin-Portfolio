
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
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-white/80 text-lg">
          Let's work together to bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div ref={formRef}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white/90 text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white/90 text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white/90 text-sm font-medium">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 py-6 text-lg"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
        
        <div ref={socialRef} className="space-y-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Connect With Me
            </h3>
            
            <div className="space-y-4">
              {[
                { icon: Youtube, label: 'YouTube', handle: '@nitinsingh' },
                { icon: Instagram, label: 'Instagram', handle: '@nitinsingh' },
                { icon: MessageCircle, label: 'WhatsApp', handle: '+91 7310498750' },
                { icon: Mail, label: 'Email', handle: 'contact@nitinsingh.com' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="https://www.instagram.com/bitsbynitin?igsh=MWxjNGltMno5dm8xeA=="
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <social.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  <div>
                    <div className="text-white font-medium">{social.label}</div>
                    <div className="text-white/60 text-sm">{social.handle}</div>
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
