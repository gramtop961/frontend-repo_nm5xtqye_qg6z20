import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Leaf, Car, BarChart3 } from 'lucide-react';

const Stat = ({ label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl bg-white/5 p-5 text-center ring-1 ring-white/10 backdrop-blur"
  >
    <div className="text-3xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-sm text-white/70">{label}</div>
  </motion.div>
);

const Benefit = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay }}
    className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
  >
    <div className="mb-3 inline-flex items-center gap-2">
      <span className="rounded-lg bg-indigo-500/15 p-2 ring-1 ring-indigo-500/30">
        <Icon className="h-5 w-5 text-indigo-300" />
      </span>
      <h3 className="text-base font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sm text-white/80">{desc}</p>
  </motion.div>
);

const ImpactSection = () => {
  return (
    <section id="impact" className="relative w-full bg-gradient-to-b from-[#0e0820] to-[#0b0616] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Benefits Gunai County Will See
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Faster commute" value="-22%" delay={0.05} />
          <Stat label="Crash risk" value="-18%" delay={0.1} />
          <Stat label="Idle emissions" value="-30%" delay={0.15} />
          <Stat label="On-time buses" value="+12%" delay={0.2} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Benefit
            icon={Car}
            title="Smoother Flow"
            desc="Coordinated greens reduce stop-and-go, improving corridor throughput without widening roads."
            delay={0.05}
          />
          <Benefit
            icon={Shield}
            title="Safety First"
            desc="Proactive timing for crosswalks and near-miss patterns helps prevent collisions before they happen."
            delay={0.1}
          />
          <Benefit
            icon={Zap}
            title="Fewer Delays"
            desc="Adaptive logic trims red-light wait times during low-volume periods, cutting frustration and noise."
            delay={0.15}
          />
          <Benefit
            icon={Leaf}
            title="Cleaner Air"
            desc="Less idling means lower emissions and better air quality near schools, hospitals, and main streets."
            delay={0.2}
          />
          <Benefit
            icon={BarChart3}
            title="Open Metrics"
            desc="Transparent dashboards track performance so residents can see tangible improvements."
            delay={0.25}
          />
          <Benefit
            icon={Shield}
            title="Not About Tickets"
            desc="This is about movement and safety — not enforcement. Privacy-first, compliance by design."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
