// app/page.tsx
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTABanner />
        <AboutSection />
        {/* Additional sections will be added here later */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
