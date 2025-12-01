"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We took 150 of our top dealers to Dubai. The arrangements by Vishal Holidays were flawless, from the desert safari to the gala dinner.",
    author: "Rajesh Gupta",
    role: "MD, Gupta Textiles Pvt Ltd",
  },
  {
    quote:
      "Our annual distributor meet in Thailand was a massive hit. The team handled the logistics for 300 people perfectly.",
    author: "Amit Patel",
    role: "Director, Apex Ceramics",
  },
  {
    quote:
      "Vishal Holidays understands what Indian businessmen need. Great food, luxury stay, and smooth travel. Highly recommended.",
    author: "Suresh Reddy",
    role: "CEO, Reddy Pharma Distributors",
  },
];

const LOGOS = [
  "Tata Group",
  "Reliance Industries",
  "Aditya Birla Group",
  "Mahindra & Mahindra",
  "Wipro",
  "Infosys",
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
