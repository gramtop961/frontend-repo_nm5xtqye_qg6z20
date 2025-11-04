import React from 'react';
import Hero from './components/Hero.jsx';
import WhySection from './components/WhySection.jsx';
import ImpactSection from './components/ImpactSection.jsx';
import CTASocialFooter from './components/CTASocialFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#08060d] antialiased">
      <Hero />
      <WhySection />
      <ImpactSection />
      <CTASocialFooter />
    </div>
  );
}

export default App;
