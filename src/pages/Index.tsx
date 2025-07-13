
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="comment">
        <HowItWorks />
      </div>
      <div id="avis">
        <Testimonials />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
