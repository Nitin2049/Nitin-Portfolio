import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    reset();
  };

  return (
    <div className="min-h-screen py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight">
          Book a Consultation
        </h1>
        <p className="text-lg md:text-xl bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent font-medium tracking-wide">
          Let's discuss your project and bring your vision to life
        </p>
      </div>
      <div className="text-center mb-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="text-white/90 text-sm font-medium text-left mb-1"
                >
                  Name*
                </Label>
                <Input
                  id="name"
                  {...register("name", { 
                    required: true,
                    maxLength: {
                      value: 30,
                      message: "Name must be less than 30 characters"
                    }
                  })}
                  maxLength={30}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1 text-left">
                    {errors.name.message || "Name is required."}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-white/90 text-sm font-medium text-left mb-1"
                >
                  Email*
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
                      message: "Invalid email address",
                    },
                  })}
                  maxLength={30}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1 text-left">
                    {errors.email.message || "Email is required."}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="mobile"
                  className="text-white/90 text-sm font-medium text-left mb-1"
                >
                  Mobile*
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  {...register("mobile", {
                    required: true,
                    maxLength: {
                      value: 10,
                      message: "Mobile number must be less than 10 characters"
                    },
                    pattern: {
                      value: /^[+]?[0-9]{10,15}$/,
                      message: "Please enter a valid mobile number",
                    },
                  })}
                  maxLength={10}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50"
                  placeholder="+91 98765 43210"
                />
                {errors.mobile && (
                  <span className="text-red-400 text-xs mt-1 text-left">
                    {errors.mobile.message || "Mobile number is required."}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="text-white/90 text-sm font-medium text-left mb-1"
                >
                  Message*
                </Label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { 
                    required: true,
                    maxLength: {
                      value: 1000,
                      message: "Message must be less than 1000 characters"
                    }
                  })}
                  maxLength={1000}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/50 focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <span className="text-red-400 text-xs mt-1 text-left">
                    {errors.message.message || "Message is required."}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 py-6 text-lg"
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
