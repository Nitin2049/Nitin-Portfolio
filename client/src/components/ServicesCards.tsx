const services = [
  "Custom Website Development",
  "Mobile-Responsive Design",
  "Fast Loading & SEO-Friendly",
  "User Login & Authentication",
  "Admin Dashboards",
  "Online Booking & Payment Integration",
  "Contact Forms & Lead Capture",
  "Database Integration",
  "Maintenance & Updates",
  "Hosting & Domain Support",
];

export default function ServiceCards() {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        What I Can Offer
      </h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {services.map((service, index) => {
          const textColors = [
            'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent',
            'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent',
          ];

          return (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 hover:scale-105 relative flex items-center justify-center"
              style={{
                borderColor: `rgba(${index % 2 === 0 ? '139, 92, 246' : '236, 72, 153'}, 0.8)`,
                boxShadow: `inset 0 0 0 1px rgba(${index % 2 === 0 ? '139, 92, 246' : '236, 72, 153'}, 0.3), 0 0 20px rgba(${index % 2 === 0 ? '139, 92, 246' : '236, 72, 153'}, 0.4), 0 0 30px rgba(${index % 2 === 0 ? '139, 92, 246' : '236, 72, 153'}, 0.2), 0 4px 15px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <h3 className={`text-xl font-semibold text-center ${textColors[index]} drop-shadow-lg`}>
                {service}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
