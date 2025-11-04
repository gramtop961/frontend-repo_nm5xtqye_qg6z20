import React from 'react';

const Stat = ({ value, label }) => (
  <div className="rounded-2xl bg-white p-6 text-center shadow-xl ring-1 ring-zinc-100/80">
    <div className="text-3xl font-extrabold tracking-tight text-zinc-900">{value}</div>
    <div className="mt-2 text-sm text-zinc-600">{label}</div>
  </div>
);

export default function ImpactSection() {
  return (
    <section id="plan" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">Real Impact for Gunai County</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Stat value="Up to 35%" label="shorter wait times during peak hours" />
          <Stat value="Less Idling" label="better fuel economy & reduced CO₂ emissions" />
          <Stat value="Priority Flow" label="smoother routes for drivers & first responders" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-100/80">
            <h3 className="text-lg font-semibold text-zinc-900">24/7 monitoring at critical intersections</h3>
            <p className="mt-2 text-zinc-600">Always-on visibility to keep traffic moving safely and efficiently.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-100/80">
            <h3 className="text-lg font-semibold text-zinc-900">Smarter planning with accurate data</h3>
            <p className="mt-2 text-zinc-600">Better insights help plan future roads and improvements that actually help.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
