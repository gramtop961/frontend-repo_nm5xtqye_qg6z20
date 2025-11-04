import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15 transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const CTASocialFooter = () => {
  return (
    <footer className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3b1a66]/80 via-[#5b2b8d]/80 to-[#2b1c5a]/80 p-8 sm:p-10 ring-1 ring-white/10 shadow-2xl shadow-purple-900/30"
        >
          <div className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl opacity-20" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-fuchsia-300/20 blur-3xl opacity-30" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Support AI Smart Signals for Gunai County</h3>
              <p className="mt-2 text-white/85 max-w-2xl">Let’s build a road system where progress never stops — even at a red light.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 hover:translate-y-[-1px] transition-transform">Sign the Petition</a>
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium ring-1 ring-white/15 hover:bg-white/15">Read Community FAQ</a>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <span className="text-sm font-medium text-white/80">Share</span>
              <div className="flex items-center gap-3">
                <SocialIcon href="#" label="Share on Facebook" Icon={Facebook} />
                <SocialIcon href="#" label="Share on Twitter" Icon={Twitter} />
                <SocialIcon href="#" label="Share on Instagram" Icon={Instagram} />
                <SocialIcon href="#" label="Share via Email" Icon={Mail} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-white/75">
          <div className="text-sm">Technology is evolving — our roads must too. These smart signals create a safer, more eco‑friendly network that supports growth for the next 20+ years.</div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© 2025 Muse Abraham</div>
          <nav className="flex items-center gap-5">
            <a href="#why" className="hover:text-white">Why AI</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default CTASocialFooter;
