import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

function TrafficLight() {
  return (
    <div className="relative mx-auto w-28 sm:w-32 md:w-36 lg:w-40">
      <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-md p-4 sm:p-5 shadow-2xl ring-1 ring-white/10">
        <div className="space-y-3 sm:space-y-4">
          <span className="block mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-600/30 shadow-inner ring-1 ring-red-300/20">
            <span className="animate-redGlow block h-full w-full rounded-full"></span>
          </span>
          <span className="block mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-yellow-500/20 shadow-inner ring-1 ring-yellow-300/20">
            <span className="animate-yellowGlow block h-full w-full rounded-full"></span>
          </span>
          <span className="block mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-500/20 shadow-inner ring-1 ring-emerald-300/20">
            <span className="animate-greenGlow block h-full w-full rounded-full"></span>
          </span>
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 h-12 w-3 -translate-x-1/2 rounded-b-lg bg-zinc-800/80 ring-1 ring-white/10" />
      <style>{`
        @keyframes redPulse { 0%, 60% { opacity: 1; box-shadow: 0 0 24px 8px rgba(239,68,68,0.55), inset 0 0 12px rgba(239,68,68,0.6);} 61%, 100% { opacity: .15; box-shadow: none; } }
        @keyframes yellowPulse { 0%, 20%, 80%, 100% { opacity: .15; box-shadow: none; } 21%, 60% { opacity: 1; box-shadow: 0 0 24px 8px rgba(234,179,8,0.55), inset 0 0 12px rgba(234,179,8,0.6);} }
        @keyframes greenPulse { 0%, 60% { opacity: .15; box-shadow: none; } 61%, 100% { opacity: 1; box-shadow: 0 0 24px 8px rgba(16,185,129,0.55), inset 0 0 12px rgba(16,185,129,0.6);} }
        .animate-redGlow { animation: redPulse 6s infinite; background: radial-gradient(circle at 50% 50%, rgba(239,68,68,0.85), rgba(239,68,68,0.2)); border-radius: 9999px; }
        .animate-yellowGlow { animation: yellowPulse 6s infinite; background: radial-gradient(circle at 50% 50%, rgba(234,179,8,0.9), rgba(234,179,8,0.2)); border-radius: 9999px; }
        .animate-greenGlow { animation: greenPulse 6s infinite; background: radial-gradient(circle at 50% 50%, rgba(16,185,129,0.9), rgba(16,185,129,0.2)); border-radius: 9999px; }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/30 to-purple-950/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-28 sm:pt-32 md:pt-40">
        <TrafficLight />
        <h1 className="mt-10 text-center font-extrabold tracking-tight text-white drop-shadow-xl [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
          Stop Waiting. Go Faster.
        </h1>
        <p className="mt-4 max-w-3xl text-center text-lg sm:text-xl text-white/90 [text-wrap:balance]">
          How AI-Powered Traffic Light Cameras Can Transform Travel in Gunai County.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#plan" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-900 shadow-lg shadow-purple-500/30 transition hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-white/60">
            Read the Plan
          </a>
          <a href="#why" className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60">
            Why It Matters
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center text-white/80">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="mt-2 h-6 w-6 animate-bounce" />
        </div>

        <div className="mt-10 max-w-3xl text-center text-white/90">
          <p>
            Gunai County deserves a traffic system that keeps us moving. AI-powered traffic light cameras can reduce delays, prevent accidents, and make everyday travel less stressful.
          </p>
        </div>
      </div>
    </section>
  );
}
