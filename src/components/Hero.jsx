import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const TrafficLight = () => {
  return (
    <div className="relative w-16 sm:w-20 md:w-24 h-40 sm:h-48 md:h-56 rounded-2xl bg-neutral-900/80 border border-white/10 shadow-2xl shadow-purple-500/20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-purple-500/60 via-fuchsia-400/60 to-indigo-400/60" />
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 h-full p-3">
        <span className="light light-red" aria-label="red light" />
        <span className="light light-yellow" aria-label="yellow light" />
        <span className="light light-green" aria-label="green light" />
      </div>
      <style>{`
        .light { display:block; width: 2.75rem; height: 2.75rem; border-radius: 9999px; opacity: 0.2; filter: blur(0.5px); box-shadow: inset 0 0 8px rgba(255,255,255,0.08); }
        @media (min-width: 640px) { .light { width: 3.25rem; height: 3.25rem; } }
        @media (min-width: 768px) { .light { width: 3.75rem; height: 3.75rem; } }
        .light-red { background: radial-gradient(60% 60% at 50% 40%, rgba(255,90,90,0.95), rgba(255,0,0,0.65)); animation: cycleRed 6s infinite; box-shadow: 0 0 24px rgba(255,0,0,0.35); }
        .light-yellow { background: radial-gradient(60% 60% at 50% 40%, rgba(255,240,160,0.95), rgba(255,210,0,0.65)); animation: cycleYellow 6s infinite; box-shadow: 0 0 24px rgba(255,210,0,0.35); }
        .light-green { background: radial-gradient(60% 60% at 50% 40%, rgba(160,255,200,0.95), rgba(0,220,130,0.65)); animation: cycleGreen 6s infinite; box-shadow: 0 0 24px rgba(0,220,130,0.35); }
        @keyframes cycleRed { 0%, 20% { opacity: 1 } 25%, 95% { opacity: 0.2 } 100% { opacity: 1 } }
        @keyframes cycleYellow { 0%, 45% { opacity: 0.2 } 50%, 70% { opacity: 1 } 75%, 100% { opacity: 0.2 } }
        @keyframes cycleGreen { 0%, 70% { opacity: 0.2 } 75%, 95% { opacity: 1 } 100% { opacity: 0.2 } }
      `}</style>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0712] via-[#160e27] to-[#08060d] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Purple cloud auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[52rem] w-[52rem] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.8),rgba(79,70,229,0.25)_60%,transparent_70%)]" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-96 w-96 rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.6),transparent_60%)]" />
        <div className="absolute bottom-[-6rem] right-[-6rem] h-96 w-96 rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.6),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 sm:pt-32">
        <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="mb-8 sm:mb-10">
          <TrafficLight />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center font-semibold leading-tight tracking-tight text-white drop-shadow-[0_6px_24px_rgba(124,58,237,0.35)] text-4xl sm:text-5xl md:text-6xl">
          Smarter Intersections Start Here
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 sm:mt-5 max-w-3xl text-center text-base sm:text-lg md:text-xl text-white/85">
          We’ve all been stuck at a red light when no one is coming from the other direction. It’s frustrating. It wastes gas. It wastes time.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-2 max-w-3xl text-center text-base sm:text-lg text-white/75">
          AI-powered traffic light cameras solve that problem — and more. Gunai County could lead the region with faster, safer, and more intelligent roads.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a href="#why" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm sm:text-base font-medium shadow-lg shadow-purple-600/30 ring-1 ring-white/10 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300">
            Why It Matters
          </a>
          <a href="#impact" className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-6 py-3 text-sm sm:text-base font-medium ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300">
            See the Impact
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-10 sm:mt-12 max-w-3xl text-center text-sm sm:text-base text-white/75">
          Using real-time insights, the system keeps vehicles, bikes, and pedestrians moving efficiently — not just waiting.
        </motion.div>

        <a href="#why" className="group mt-12 sm:mt-16 flex flex-col items-center text-white/70 hover:text-white focus:outline-none" aria-label="Scroll to learn more">
          <ArrowDown className="h-6 w-6 animate-bounce" />
          <span className="mt-1 text-xs">Scroll</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
