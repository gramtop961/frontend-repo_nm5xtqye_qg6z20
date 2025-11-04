import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function CTASocialFooter() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-purple-900 p-8 sm:p-12 shadow-2xl ring-1 ring-white/10">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [text-wrap:balance]">
              Support smarter travel for our county. Sign the petition.
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-900 shadow-lg transition hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-white/60">
                Add Your Name
              </a>
              <a href="#" className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60">
                Learn More
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5 text-white/90">
              <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/15">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-white/15">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/15">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="rounded-full bg-white/10 p-2 hover:bg-white/15">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-8 text-center text-sm text-white/80">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
            <p className="mt-4">© {new Date().getFullYear()} Gunai County Mobility Initiative</p>
          </div>
        </div>
      </div>
    </section>
  );
}
