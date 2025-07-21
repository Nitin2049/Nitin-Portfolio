import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const WebsiteOnboardingForm = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan');
  const selectedPrice = searchParams.get('price');
  const selectedCategory = searchParams.get('category');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    defaultValues: {
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      websiteType: "",
      budget: "",
      timeline: "",
      currentWebsite: "",
      targetAudience: "",
      goals: "",
      features: [],
      designPreferences: "",
      contentStatus: "",
      hostingPreference: "",
      additionalServices: [],
      projectDescription: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Website Onboarding Form submitted:", data);
    // Handle form submission here
    reset();
  };

  return (
    <div className="min-h-screen py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight">
          Website Onboarding
        </h1>
        <p className="text-lg md:text-xl bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent font-medium tracking-wide">
          Tell us about your project requirements and vision
        </p>
      </div>

      {/* Selected Plan Display */}
      {selectedPlan && (
        <div className="text-center mb-8">
          {/* <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto"> */}
            {/* <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Order Summary
            </h2> */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">Plan Selected</span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {selectedPlan}
                </h3>
                {selectedPrice && (
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-base font-medium text-gray-300">Starts from</span>
                    <span className="text-xl font-bold text-emerald-400">
                      {selectedPrice}
                    </span>
                  </div>
                )}
                {selectedCategory && (
                  <div className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full inline-block">
                    {selectedCategory}
                  </div>
                )}
              </div>
            </div>
          {/* </div> */}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Business Information Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Business Information</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="businessName" className="text-white/90 text-sm font-medium text-left mb-1">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  {...register("businessName", { 
                    required: true,
                    maxLength: {
                      value: 30,
                      message: "Business name must be less than 30 characters"
                    }
                  })}
                  maxLength={30}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="Your business or project name"
                />
                {errors.businessName && (
                  <span className="text-red-400 text-xs mt-1 text-left">{errors.businessName.message || "Business name is required."}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contactPerson" className="text-white/90 text-sm font-medium text-left mb-1">
                  Contact Person *
                </Label>
                <Input
                  id="contactPerson"
                  {...register("contactPerson", { 
                    required: true,
                    maxLength: {
                      value: 30,
                      message: "Contact person name must be less than 30 characters"
                    }
                  })}
                  maxLength={30}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="Your full name"
                />
                {errors.contactPerson && (
                  <span className="text-red-400 text-xs mt-1 text-left">{errors.contactPerson.message || "Contact person is required."}</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white/90 text-sm font-medium text-left mb-1">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    maxLength: {
                      value: 30,
                      message: "Email must be less than 30 characters"
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address"
                    }
                  })}
                  maxLength={30}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1 text-left">{errors.email.message || "Email is required."}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-white/90 text-sm font-medium text-left mb-1">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    maxLength: {
                      value: 10,
                      message: "Phone number must be less than 10 characters"
                    }
                  })}
                  maxLength={10}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Project Details</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="websiteType" className="text-white/90 text-sm font-medium text-left mb-1">
                  Website Type *
                </Label>
                <select
                  id="websiteType"
                  {...register("websiteType", { required: true })}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">Select website type</option>
                  <option value="business" className="bg-gray-800 text-white">Business Website</option>
                  <option value="ecommerce" className="bg-gray-800 text-white">E-commerce Store</option>
                  <option value="portfolio" className="bg-gray-800 text-white">Portfolio Website</option>
                  <option value="blog" className="bg-gray-800 text-white">Blog/Content Site</option>
                  <option value="landing" className="bg-gray-800 text-white">Landing Page</option>
                  <option value="other" className="bg-gray-800 text-white">Other</option>
                </select>
                {errors.websiteType && (
                  <span className="text-red-400 text-xs mt-1 text-left">Website type is required.</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="budget" className="text-white/90 text-sm font-medium text-left mb-1">
                  Budget Range *
                </Label>
                <select
                  id="budget"
                  {...register("budget", { required: true })}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">Select budget range</option>
                  <option value="2000-10000" className="bg-gray-800 text-white">₹2,000 - ₹10,000</option>
                  <option value="10000-25000" className="bg-gray-800 text-white">₹10,000 - ₹25,000</option>
                  <option value="25000-50000" className="bg-gray-800 text-white">₹25,000 - ₹50,000</option>
                  <option value="50000-100000" className="bg-gray-800 text-white">₹50,000 - ₹1,00,000</option>
                  <option value="100000-200000" className="bg-gray-800 text-white">₹1,00,000 - ₹2,00,000</option>
                  <option value="200000+" className="bg-gray-800 text-white">₹2,00,000+</option>
                </select>
                {errors.budget && (
                  <span className="text-red-400 text-xs mt-1 text-left">Budget range is required.</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="timeline" className="text-white/90 text-sm font-medium text-left mb-1">
                  Project Timeline *
                </Label>
                <select
                  id="timeline"
                  {...register("timeline", { required: true })}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">Select timeline</option>
                  <option value="1-2weeks" className="bg-gray-800 text-white">1-2 weeks</option>
                  <option value="2-4weeks" className="bg-gray-800 text-white">2-4 weeks</option>
                  <option value="1-2months" className="bg-gray-800 text-white">1-2 months</option>
                  <option value="2-3months" className="bg-gray-800 text-white">2-3 months</option>
                  <option value="3+months" className="bg-gray-800 text-white">3+ months</option>
                </select>
                {errors.timeline && (
                  <span className="text-red-400 text-xs mt-1 text-left">Timeline is required.</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="currentWebsite" className="text-white/90 text-sm font-medium text-left mb-1">
                  Current Website (if any)
                </Label>
                <Input
                  id="currentWebsite"
                  type="url"
                  {...register("currentWebsite", {
                    maxLength: {
                      value: 150,
                      message: "Website URL must be less than 150 characters"
                    }
                  })}
                  maxLength={150}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="https://your-current-website.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="targetAudience" className="text-white/90 text-sm font-medium text-left mb-1">
                Target Audience *
              </Label>
              <Input
                id="targetAudience"
                {...register("targetAudience", { 
                  required: true,
                  maxLength: {
                    value: 200,
                    message: "Target audience must be less than 200 characters"
                  }
                })}
                maxLength={200}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                placeholder="e.g., Small business owners, Young professionals, Tech enthusiasts"
              />
              {errors.targetAudience && (
                <span className="text-red-400 text-xs mt-1 text-left">{errors.targetAudience.message || "Target audience is required."}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="goals" className="text-white/90 text-sm font-medium text-left mb-1">
                Website Goals *
              </Label>
              <textarea
                id="goals"
                rows={3}
                {...register("goals", { 
                  required: true,
                  maxLength: {
                    value: 200,
                    message: "Website goals must be less than 200 characters"
                  }
                })}
                maxLength={200}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none resize-none"
                placeholder="What do you want to achieve with this website?"
              />
              {errors.goals && (
                <span className="text-red-400 text-xs mt-1 text-left">{errors.goals.message || "Website goals are required."}</span>
              )}
            </div>
          </div>
        </div>

        {/* Technical Preferences Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Technical Preferences</h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <Label className="text-white/90 text-sm font-medium text-left mb-3">
                Required Features (Select all that apply)
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Contact Form",
                  "Blog Section",
                  "Photo Gallery",
                  "E-commerce",
                  "User Registration",
                  "Payment Gateway",
                  "Social Media Integration",
                  "SEO Optimization",
                  "Analytics Integration",
                  "Multi-language Support",
                  "Admin Dashboard",
                  "API Integration"
                ].map((feature) => (
                  <label key={feature} className="flex items-center space-x-3 text-white/80">
                    <input
                      type="checkbox"
                      value={feature}
                      {...register("features")}
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                    />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="designPreferences" className="text-white/90 text-sm font-medium text-left mb-1">
                  Design Preferences
                </Label>
                <select
                  id="designPreferences"
                  {...register("designPreferences")}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">Select design style</option>
                  <option value="modern" className="bg-gray-800 text-white">Modern & Minimalist</option>
                  <option value="corporate" className="bg-gray-800 text-white">Corporate & Professional</option>
                  <option value="creative" className="bg-gray-800 text-white">Creative & Artistic</option>
                  <option value="traditional" className="bg-gray-800 text-white">Traditional & Classic</option>
                  <option value="trendy" className="bg-gray-800 text-white">Trendy & Contemporary</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contentStatus" className="text-white/90 text-sm font-medium text-left mb-1">
                  Content Status
                </Label>
                <select
                  id="contentStatus"
                  {...register("contentStatus")}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">Select content status</option>
                  <option value="ready" className="bg-gray-800 text-white">Content is ready</option>
                  <option value="partial" className="bg-gray-800 text-white">Partial content available</option>
                  <option value="need-help" className="bg-gray-800 text-white">Need help with content</option>
                  <option value="will-provide" className="bg-gray-800 text-white">Will provide later</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="hostingPreference" className="text-white/90 text-sm font-medium text-left mb-1">
                Hosting Preference
              </Label>
              <select
                id="hostingPreference"
                {...register("hostingPreference")}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select hosting preference</option>
                <option value="include" className="bg-gray-800 text-white">Include hosting in package</option>
                <option value="own" className="bg-gray-800 text-white">I have my own hosting</option>
                <option value="recommend" className="bg-gray-800 text-white">Need hosting recommendations</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white/90 text-sm font-medium text-left mb-3">
                Additional Services (Select all that apply)
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Logo Design",
                  "Content Writing",
                  "SEO Services",
                  "Social Media Setup",
                  "Email Marketing Setup",
                  "Maintenance & Support",
                  "Training & Documentation",
                  "Domain Registration"
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-3 text-white/80">
                    <input
                      type="checkbox"
                      value={service}
                      {...register("additionalServices")}
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="projectDescription" className="text-white/90 text-sm font-medium text-left mb-1">
                Additional Project Details
              </Label>
              <textarea
                id="projectDescription"
                rows={4}
                {...register("projectDescription", {
                  maxLength: {
                    value: 1000,
                    message: "Project description must be less than 1000 characters"
                  }
                })}
                maxLength={1000}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none resize-none"
                placeholder="Any additional information, specific requirements, inspiration websites, or special considerations..."
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            className="w-full max-w-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 py-6 text-lg"
          >
            Submit Onboarding Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WebsiteOnboardingForm;