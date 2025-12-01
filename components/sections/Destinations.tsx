"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const DESTINATIONS = [
  {
    id: "dubai",
    name: "Dubai, UAE",
    top: "38%",
    left: "58%",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=3540&auto=format&fit=crop",
    description: "Luxury, opulence, and world-class experiences.",
  },
  {
    id: "thailand",
    name: "Thailand",
    top: "42%",
    left: "75%",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=3539&auto=format&fit=crop",
    description: "Tropical paradise with vibrant culture and nightlife.",
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    top: "58%",
    left: "80%",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=3538&auto=format&fit=crop",
    description: "Island serenity and spiritual retreats.",
  },
  {
    id: "goa",
    name: "Goa, India",
    top: "45%",
    left: "67%",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=3474&auto=format&fit=crop",
    description: "Beach bliss and vibrant Indian coastal culture.",
  },
  {
    id: "kerala",
    name: "Kerala, India",
    top: "48%",
    left: "68%",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=3538&auto=format&fit=crop",
    description: "Backwaters, tea plantations, and tranquility.",
  },
  {
    id: "rajasthan",
    name: "Rajasthan, India",
    top: "40%",
    left: "67%",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=3540&auto=format&fit=crop",
    description: "Royal heritage and desert adventures.",
  },
];

export function Destinations() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="destinations" className="py-24 bg-obsidian-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-starlight mb-4">
            Global Reach
          </h2>
          <p className="text-starlight/60">
            From the ends of the earth to the center of culture.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-[#050b14] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
          {/* Map Background (Abstract) */}
          <div className="absolute inset-0 opacity-40">
             <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop"
              alt="World Map"
              fill
              className="object-cover"
            />
          </div>

           {/* Grid Overlay */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          {/* Hotspots */}
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="absolute"
              style={{ top: dest.top, left: dest.left }}
              onMouseEnter={() => setActiveId(dest.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="relative group cursor-pointer">
                <div className="w-4 h-4 bg-glacial rounded-full shadow-[0_0_20px_rgba(100,255,218,0.6)] animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-glacial rounded-full animate-ping opacity-50" />

                {/* Tooltip */}
                <AnimatePresence>
                  {activeId === dest.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 bg-obsidian/90 backdrop-blur-xl border border-white/10 p-4 rounded-lg shadow-2xl z-20"
                    >
                      <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-playfair font-bold text-starlight">
                        {dest.name}
                      </h4>
                      <p className="text-xs text-starlight/70 mt-1">
                        {dest.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
