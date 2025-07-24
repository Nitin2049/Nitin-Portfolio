import { useState } from 'react';
import PricingCards from './PricingCards';

function Pricing() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        "Starter Plans",
        "CMS Plans", 
        "E‑Commerce / Online Store Plans",
        "Add-Ons"
    ];

    

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight">
                    Pricing Plans
                </h2>
                <p className="text-lg md:text-xl bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent font-medium tracking-wide">
                    Choose the perfect plan for your project
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-col md:flex-row justify-center mb-12 space-y-4 md:space-y-0 md:space-x-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative px-6 py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-500 transform hover:scale-105 ${
                            activeTab === index
                                ? 'text-white'
                                : 'text-white/70 hover:text-white/90'
                        }`}
                        style={{
                            background: activeTab === index
                                ? `linear-gradient(135deg, ${
                                    index === 0 ? '#8b5cf6, #06b6d4' :
                                    index === 1 ? '#ec4899, #f59e0b' :
                                    index === 2 ? '#10b981, #3b82f6' :
                                    '#f97316, #ef4444'
                                })`
                                : 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: activeTab === index 
                                ? '2px solid transparent'
                                : '2px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: activeTab === index
                                ? `0 0 30px ${
                                    index === 0 ? 'rgba(139, 92, 246, 0.5)' :
                                    index === 1 ? 'rgba(236, 72, 153, 0.5)' :
                                    index === 2 ? 'rgba(16, 185, 129, 0.5)' :
                                    'rgba(249, 115, 22, 0.5)'
                                }, 0 0 60px ${
                                    index === 0 ? 'rgba(6, 182, 212, 0.3)' :
                                    index === 1 ? 'rgba(245, 158, 11, 0.3)' :
                                    index === 2 ? 'rgba(59, 130, 246, 0.3)' :
                                    'rgba(239, 68, 68, 0.3)'
                                }`
                                : 'none',
                            animation: activeTab === index ? 'neonPulse 3s ease-in-out infinite alternate' : 'none'
                        }}
                    >
                        <span className="relative z-10">{tab}</span>
                        {activeTab === index && (
                            <div 
                                className="absolute inset-0 rounded-xl opacity-20 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${
                                        index === 0 ? 'rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3)' :
                                        index === 1 ? 'rgba(236, 72, 153, 0.3), rgba(245, 158, 11, 0.3)' :
                                        index === 2 ? 'rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3)' :
                                        'rgba(249, 115, 22, 0.3), rgba(239, 68, 68, 0.3)'
                                    })`
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <PricingCards activeTab={activeTab} />

        </section>
    );
}

export default Pricing;
