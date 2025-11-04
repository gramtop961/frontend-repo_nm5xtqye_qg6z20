import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Share2, Link as LinkIcon } from 'lucide-react';

const CTASocialFooter = () => {
  return (
    <section className="relative w-full bg-[#0b0616] py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-fuchsia-600/15 to-indigo-600/15 p-8 text-center ring-1 ring-white/10 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Bring Smarter Signals to Gunai County</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">
            Add your name to support pilot intersections and transparent performance dashboards.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#petition"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 transition hover:brightness-110"
            >
              Sign the petition
            </a>
            <a
              href="#share"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            >
              <Share2 className="h-4 w-4" /> Share
            </a>
            <a
              href="mailto:info@gunai.gov"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row">
          <p>© 2025 Muse Abraham • Gunai County</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#open-data" className="hover:text-white">Open Data</a>
            <a href="#copy" className="inline-flex items-center gap-1 hover:text-white">
              <LinkIcon className="h-4 w-4" /> Copy link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASocialFooter;
