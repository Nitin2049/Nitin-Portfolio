import { useNavigate } from "react-router-dom";

interface PricingCardsProps {
    activeTab: number;
}

function PricingCards({ activeTab }: PricingCardsProps) {
    const Navigate = useNavigate();

    const tabContent = [
        {
            title: "Starter Plans",
            description: "Perfect for small businesses and startups",
            plans: [
                { 
                    name: "Basic \"Coming Soon\" Plan", 
                    price: "₹2,000", 
                    features: [
                        "One‐page \"Coming Soon\" landing page", 
                        "Simple design, placeholder content", 
                        "Launching soon announcement", 
                        "Suitable for pre-launch", 
                        "Minimal setup"
                    ] 
                },
                { 
                    name: "Starter Landing Plan", 
                    price: "₹3,000", 
                    features: [
                        "One fully designed static page", 
                        "Basic HTML/CSS page", 
                        "Simple enquiry/contact page", 
                        "Contact details included", 
                        "Professional design"
                    ] 
                },
                { 
                    name: "Standard Plan", 
                    price: "₹10,000", 
                    features: [
                        "3 pages (Home, Services, Contact)", 
                        "Minor content updates", 
                        "Form-backed backend", 
                        "Responsive design", 
                        "Basic SEO setup"
                    ] 
                }
            ]
        },
        {
            title: "CMS Plans", 
            description: "Content management solutions for growing businesses",
            plans: [
                { 
                    name: "CMS Starter Plan", 
                    price: "₹15,000", 
                    features: [
                        "Up to 5 pages", 
                        "Simple and mobile-responsive design", 
                        "Contact or enquiry form", 
                        "Blog module setup (basic)", 
                        "Client‑editable content (admin dashboard)", 
                        "Documentation provided (as PDF)"
                    ] 
                },
                { 
                    name: "CMS Standard Plan", 
                    price: "₹25,000", 
                    features: [
                        "Up to 10 pages", 
                        "Custom theme / design customization", 
                        "Blog module enabled, plus basic SEO plugin", 
                        "Client‑editable content (admin dashboard)", 
                        "Minor content assistance, basic site training", 
                        "Documentation provided (as PDF)"
                    ] 
                }
            ]
        },
        {
            title: "E‑Commerce Plans",
            description: "Complete online store solutions",
            plans: [
                { 
                    name: "E‑Commerce Basic (CMS‑Based)", 
                    price: "₹40,000", 
                    features: [
                        "Up to 50 products", 
                        "Product listing system, cart, checkout", 
                        "Payment Gateway Integration (Razorpay, Stripe)", 
                        "Shipping integration (flat shipping or basic plugin)", 
                        "CMS for product & content management"
                    ] 
                },
                { 
                    name: "E‑Commerce Plus (Advanced CMS Setup)", 
                    price: "₹70,000", 
                    features: [
                        "Up to 200 products, category & tag filters", 
                        "Coupon & discount codes, reviews, order tracking", 
                        "Advanced shipping integration, sales reports", 
                        "Advanced payment gateway features (recurring/subscriptions)", 
                        "Custom and responsive design, premium plugins", 
                        "Basic SEO setup, analytics integration"
                    ] 
                },
                { 
                    name: "E‑Commerce Custom (Full Custom Setup)", 
                    price: "₹2,00,000", 
                    features: [
                        "Large product catalogs (thousands of items), complex filters", 
                        "Multi‑vendor support, ERP/CRM integration, API integrations", 
                        "Advanced checkout flows, custom payment setups", 
                        "Multi‑language, inventory sync, analytics dashboards", 
                        "Enterprise‑grade hosting or cloud setup, robust security", 
                        "Long timeline (1–3 months development)"
                    ] 
                }
            ]
        }
    ];

    const currentContent = tabContent[activeTab];

    return (
        <div className="relative">
            <div className="transition-all duration-700 ease-in-out">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {currentContent.title}
                    </h3>
                    <p className="text-white/80 text-lg">
                        {currentContent.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {currentContent.plans.map((plan, planIndex) => (
                        <div
                            key={planIndex}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group flex flex-col h-full"
                            style={{
                                boxShadow: activeTab === 0 
                                    ? '0 0 20px rgba(139, 92, 246, 0.3)' 
                                    : activeTab === 1 
                                    ? '0 0 20px rgba(236, 72, 153, 0.3)' 
                                    : '0 0 20px rgba(16, 185, 129, 0.3)',
                                animation: 'neonPulse 4s ease-in-out infinite alternate'
                            }}
                        >
                            <div className="text-center mb-6">
                                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="text-white/60 text-sm">Starts from</div>
                                <div 
                                    className={`text-4xl font-bold mb-4 ${
                                        activeTab === 0 
                                            ? 'bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent' 
                                            : activeTab === 1 
                                            ? 'bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent' 
                                            : 'bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'
                                    }`}
                                >
                                    {plan.price}
                                </div>
                                
                            </div>
                            
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-white/80 flex items-center">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0" 
                                            style={{
                                                background: activeTab === 0 
                                                    ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' 
                                                    : activeTab === 1 
                                                    ? 'linear-gradient(135deg, #ec4899, #f59e0b)' 
                                                    : 'linear-gradient(135deg, #10b981, #3b82f6)'
                                            }} 
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform group-hover:scale-105"
                                style={{
                                    background: activeTab === 0 
                                        ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' 
                                        : activeTab === 1 
                                        ? 'linear-gradient(135deg, #ec4899, #f59e0b)' 
                                        : 'linear-gradient(135deg, #10b981, #3b82f6)',
                                    boxShadow: activeTab === 0 
                                        ? '0 4px 15px rgba(139, 92, 246, 0.4)' 
                                        : activeTab === 1 
                                        ? '0 4px 15px rgba(236, 72, 153, 0.4)' 
                                        : '0 4px 15px rgba(16, 185, 129, 0.4)'
                                }}
                                onClick={() => {
                                    // Navigate with plan information
                                    const planCategory = currentContent.title;
                                    Navigate(`/website-onboarding?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}&category=${encodeURIComponent(planCategory)}`);
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingCards;