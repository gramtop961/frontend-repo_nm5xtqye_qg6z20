import React from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ImpactSection from './components/ImpactSection';
import CTASocialFooter from './components/CTASocialFooter';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-purple-800 to-purple-900 text-white">
      <Hero />
      <WhySection />
      <ImpactSection />
      <CTASocialFooter />
    </div>
  );
}
