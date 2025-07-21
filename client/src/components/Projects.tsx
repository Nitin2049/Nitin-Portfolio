
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projectsRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Admin Dashboard",
      description: "Modern e-commerce solution with advanced Dashboard for managing products, orders, and customers.",
      image: "/admindash.png",
      tech: ["ReactJs", "ExpressJs", "Tailwind", "Mongodb", "Node.js"],
      link: "https://nitinadmindash.netlify.app/"
    },
    {
      id: 2,
      title: "NTI Tech Academy",
      description: "Web application for the startup to sell online courses with user-friendly interface and secure payment integration.",
      image: "/nti.png",
      tech: ["ReactJs", "ExpressJs", "Tailwind", "Mongodb", "Node.js"],
      link: "https://ntitech.onrender.com"
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "Web application for online shopping with product listings, cart functionality, and secure checkout.",
      image: "sport.png",
      tech: ["ReactJs", "ExpressJs", "Tailwind", "Mongodb", "Node.js"],
      link: "https://sportshub-lo9z.onrender.com"
    }
  ];

  useEffect(() => {
    // Animate project cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  const handleCardHover = (index: number, isHovering: boolean) => {
    const card = cardsRef.current[index];
    if (card) {
      gsap.to(card, {
        scale: isHovering ? 1.05 : 1,
        y: isHovering ? -10 : 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section 
      id="projects"
      ref={projectsRef}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          A collection of my recent work and creative experiments
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 relative"
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
            style={{
              border: '2px solid transparent',
              background: `
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) padding-box,
                linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899) border-box
              `,
              boxShadow: `
                0 0 20px rgba(59, 130, 246, 0.4),
                0 0 40px rgba(6, 182, 212, 0.3),
                0 0 60px rgba(139, 92, 246, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
              animation: 'neonPulse 3s ease-in-out infinite alternate'
            }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => {
                  const colorCombos = [
                    "text-white font-bold border border-purple-400/40 hover:border-purple-300/60",
                    "text-white font-bold border border-cyan-400/40 hover:border-cyan-300/60",
                    "text-white font-bold border border-teal-400/40 hover:border-teal-300/60",
                    "text-white font-bold border border-red-400/40 hover:border-red-300/60",
                    "text-white font-bold border border-purple-400/40 hover:border-purple-300/60"
                  ];
                  
                  return (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${colorCombos[techIndex % colorCombos.length]} transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm bg-transparent`}
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </div>
              
              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                onClick={() => window.open(project.link, '_blank')}
              >
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
