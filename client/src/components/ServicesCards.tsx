const services = [
  "🌐 Custom Website Development",
  "📱 Mobile-Responsive Design",
  "⚡ Fast Loading & SEO-Friendly",
  "🔒 User Login & Authentication",
  "📊 Admin Dashboards",
  "🛍️ Online Booking & Payment Integration",
  "📞 Contact Forms & Lead Capture",
  "💾 Database Integration",
  "🔧 Maintenance & Updates",
  "🌍🖥️ Hosting & Domain Support",
];

export default function ServiceCards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 py-10 px-6 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        What I Can Offer
      </h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
          >
            <h3 className="text-xl font-semibold mb-2"> {service}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
}
