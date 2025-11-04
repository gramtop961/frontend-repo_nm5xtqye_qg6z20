import React from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ImpactSection from './components/ImpactSection';
import CTASocialFooter from './components/CTASocialFooter';

const App = () => {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <WhySection />
      <ImpactSection />
      <CTASocialFooter />
    </div>
  );
};

export default App;
