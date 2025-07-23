import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactForm from "@/components/ContactForm";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Pricing from "./components/Pricing";
import WebsiteOnboardingForm from "./components/WebsiteOnboardingForm";
import ReactGA from 'react-ga4';
import "./App.css"

const queryClient = new QueryClient();

const MEASUREMENT_ID = "G-HZZJRHMG07";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/book-consultation" element={<ContactForm />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/website-onboarding" element={<WebsiteOnboardingForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
