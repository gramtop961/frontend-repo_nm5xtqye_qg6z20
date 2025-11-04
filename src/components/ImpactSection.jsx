import React from 'react';
import { ShieldCheck, Zap, Leaf, Car, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefit = ({ icon: Icon, title, body }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-lg shadow-purple-900/10"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-indigo-600/80 ring-1 ring-white/15 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-white font-semibold">{title}</h4>
    </div>
    <p className="mt-2 text-sm text-white/75">{body}</p>
  </motion.div>
);

const CityStat = ({ city, stat }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 text-white/85"
  >
    <div className="text-lg font-semibold text-white">{city}</div>
    <div className="text-sm mt-1 text-white/75">{stat}</div>
  </motion.div>
);

const ImpactSection = () => {
  return (
    <section id="impact" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">Benefits Gunai County Will See</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">What changes on day one</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <Benefit icon={Zap} title="Shorter travel times" body="No more waiting at empty intersections — signals prioritize where flow is needed most." />
          <Benefit icon={ShieldCheck} title="Fewer red‑light crashes" body="Smart detection discourages risky behavior and reduces dangerous conflicts." />
          <Benefit icon={Leaf} title="Cleaner air and lower fuel costs" body="Less idling and stop‑and‑go improves mileage and cuts emissions." />
          <Benefit icon={Users} title="Smarter urban planning" body="Useful data informs better roads, transit, and safer active travel routes." />
          <Benefit icon={Car} title="Faster emergency response" body="Green waves for responders save vital minutes when seconds count." />
          <Benefit icon={Zap} title="Reduced stress" body="Smoother commutes mean calmer streets and better days." />
        </div>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">Data from cities already using AI traffic management</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CityStat city="Los Angeles" stat="Up to 40% faster traffic flow" />
            <CityStat city="Pittsburgh" stat="20–40% reduction in commute delays" />
            <CityStat city="London" stat="12% lower intersection collisions" />
            <CityStat city="New York City" stat="25% faster emergency arrivals" />
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-600/15 via-fuchsia-600/15 to-indigo-600/15 ring-1 ring-white/10 p-6 text-sm text-white/85">
          AI cameras are about prevention and efficiency — not punishment. The goal is flow, not fines; drivers don’t get tickets for honest mistakes, and insights help fix danger zones before accidents happen.
        </div>

        <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <h4 className="text-white font-semibold">What this means for the community</h4>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/80">
            <div><span className="font-semibold text-white">Daily workers:</span> Shorter drives and less wasted fuel</div>
            <div><span className="font-semibold text-white">Students:</span> Safer walking and cycling routes</div>
            <div><span className="font-semibold text-white">First responders:</span> Clear pathways to emergencies</div>
            <div><span className="font-semibold text-white">Businesses:</span> Faster deliveries and more customers</div>
            <div><span className="font-semibold text-white">Parents:</span> Less time in car lines</div>
            <div><span className="font-semibold text-white">Tourists:</span> Easier navigation and better experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
