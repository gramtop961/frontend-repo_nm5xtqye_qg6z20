import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Activity, Map } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-lg"
  >
    <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:bg-fuchsia-500/20" />
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-fuchsia-500/15 p-2.5 ring-1 ring-fuchsia-500/30">
        <Icon className="h-5 w-5 text-fuchsia-300" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/80">{desc}</p>
  </motion.div>
);

const WhySection = () => {
  return (
    <section id="why" className="relative w-full bg-gradient-to-b from-[#0b0616] to-[#0e0820] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          How AI Traffic Light Cameras Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/80"
        >
          Cameras read live traffic patterns and adjust signals to keep cars moving safely and efficiently.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={Gauge}
            title="Adaptive Timing"
            desc="Signals adjust in real time based on actual flow, cutting idle time and improving throughput."
            delay={0.05}
          />
          <Card
            icon={Activity}
            title="Live Safety Signals"
            desc="Detection of crosswalk activity and near-miss patterns helps prioritize protection for people first."
            delay={0.1}
          />
          <Card
            icon={Map}
            title="Network Awareness"
            desc="Intersections talk to each other to prevent bottlenecks and cascading gridlock across corridors."
            delay={0.15}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold">The Old Way</h3>
            <p className="mt-2 text-white/80">
              Fixed timers treat every day like rush hour. That means unnecessary red lights, wasted fuel, and
              longer trips for everyone — especially at off-peak times.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20 p-6 ring-1 ring-white/10 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold">The AI Way</h3>
            <p className="mt-2 text-white/90">
              AI adapts in seconds. Fewer stops, smoother waves of green, and safer crossings — with clear privacy
              controls and zero ticketing bias.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
