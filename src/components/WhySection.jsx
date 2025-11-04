import React from 'react';
import { Gauge, Shield, Ambulance } from 'lucide-react';

const Item = ({ icon: Icon, title, children }) => (
  <div className="flex flex-col rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-100/80">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
    </div>
    <p className="mt-3 text-zinc-600">
      {children}
    </p>
  </div>
);

export default function WhySection() {
  return (
    <section id="why" className="relative z-10 bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">Why AI Traffic Signals?</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          <Item icon={Gauge} title="Faster Commutes">
            AI predicts traffic flow by analyzing real-time movement and automatically adjusts light timing. That means longer green lights where traffic is heavier — and fewer moments stuck at an empty red.
          </Item>
          <Item icon={Shield} title="Fewer Accidents">
            Smarter sensors detect drivers who try to rush through intersections, lowering the risk of collisions and saving lives.
          </Item>
          <Item icon={Ambulance} title="Emergency-Aware">
            When ambulances or fire trucks approach, the system knows — and clears the way instantly. Every second matters.
          </Item>
        </div>
      </div>
    </section>
  );
}
