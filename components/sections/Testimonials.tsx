"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The most seamless executive retreat we've ever had. Every detail was anticipated before we even thought of it.",
    author: "Alexander V.",
    role: "CEO, Tech Giant",
  },
  {
    quote:
      "Vishal Holidays understands the nuance of high-stakes networking. The setting was perfect for closing our Series B.",
    author: "Sarah J.",
    role: "VP Operations, FinTech",
  },
  {
    quote:
      "Unforgettable. The Antarctica trip changed our leadership dynamic forever. Truly a bonding experience like no other.",
    author: "Marcus R.",
    role: "Founder, Unicorn Startup",
  },
];

const LOGOS = [
  "Stark Industries",
  "Wayne Enterprises",
  "Cyberdyne Systems",
  "Massive Dynamic",
  "Tyrell Corp",
  "Oscorp",
];

export function Testimonials() {
  return (
    <section className="py-24 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-starlight mb-12">
          Trusted by the Elite
        </h2>

        {/* Logo Marquee */}
        <div className="flex overflow-hidden mb-24 mask-image-gradient">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="text-2xl font-bold text-starlight/20 uppercase tracking-widest"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg relative"
            >
              <Quote className="absolute top-6 right-6 text-glacial/20 w-8 h-8" />
              <p className="text-starlight/90 mb-6 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-starlight">{t.author}</p>
                <p className="text-sm text-glacial">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
