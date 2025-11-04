import React from 'react';
import { Gauge, Cloud, AlertTriangle, Activity, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 p-6 sm:p-7 shadow-xl shadow-purple-900/10"
  >
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="mt-3 space-y-2 text-white/75 text-sm">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const WhySection = () => {
  return (
    <section id="why" className="relative py-16 sm:py-20 bg-gradient-to-b from-transparent to-[#0b0813]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-10 h-48 w-48 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.7),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">How AI Traffic Light Cameras Work</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">Always-on intelligence for real streets</h2>
          <p className="mt-3 max-w-3xl text-white/70">AI cameras and sensors constantly analyze conditions to coordinate signals that adapt in real time.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-indigo-600/80 ring-1 ring-white/15 text-white">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Live traffic flow</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">Optimizes phases using real-time volumes, speeds, and queues.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-indigo-600/80 ring-1 ring-white/15 text-white">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Safety awareness</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">Understands crossings, near-misses, and emergency routes.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-indigo-600/80 ring-1 ring-white/15 text-white">
                <Map className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Network optimization</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">Coordinates corridors, not just single intersections.</p>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Card
            title="The problem with traditional lights"
            items={[
              'Fixed timers can\'t react to closures, rush hours, or events',
              'Weather and incidents create long backups',
              'Outdated plans lead to stop‑and‑go delays',
            ]}
          />
          <Card
            title="What the AI system reads"
            items={[
              'Traffic flow from multiple directions',
              'Speed patterns by time of day',
              'Pedestrian crossings and safety',
              'Accident and near‑miss activity',
              'Emergency vehicle routes',
            ]}
          />
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-fuchsia-600/15 via-purple-600/15 to-indigo-600/15 ring-1 ring-white/10 p-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            <span>Result: shorter waits and smoother flow for drivers, cyclists, and pedestrians.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
