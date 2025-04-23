import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/sections/IntroductionSection";
import HistorySection from "@/components/sections/HistorySection";
import ExamplesSection from "@/components/sections/ExamplesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-biomimicry-neutral-50">
      <Navbar />
      <Hero />
      <IntroductionSection />
      <HistorySection />
      <ExamplesSection />
      <ResearchSection />
      <BenefitsSection />
      <ApplicationsSection />
      <Footer />
    </div>
  );
};

export default Index;
