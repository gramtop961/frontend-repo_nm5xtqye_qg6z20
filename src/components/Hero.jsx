import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0616] via-[#120a2a] to-[#0b0616] text-white">
      {/* Soft nebula auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-fuchsia-200 ring-1 ring-white/10 backdrop-blur"
        >
          Gunai County • AI-Powered Traffic Light Cameras
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Smarter Intersections Start Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Real-time intelligence that reduces congestion, prioritizes safety, and keeps
          your commute smooth — without punitive enforcement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#why"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            How it works
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            See the impact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 hidden items-center gap-2 text-white/70 sm:flex"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Animated traffic light indicator */}
      <div className="pointer-events-none absolute bottom-6 right-6 z-10 hidden select-none sm:block">
        <div className="flex flex-col gap-2 rounded-xl bg-black/40 p-3 ring-1 ring-white/10 backdrop-blur">
          <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/60" />
          <span className="h-3 w-3 rounded-full bg-amber-400/40" />
          <span className="h-3 w-3 rounded-full bg-rose-400/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
