"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Dealer & Distributor Meets",
    description:
      "Grand scale events that honor your network's success. Seamless logistics for hundreds of partners in exotic locations.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop",
  },
  {
    title: "Incentive Trips",
    description:
      "Motivate your top retailers and wholesalers with luxury getaways to Thailand, Dubai, or Bali. Drive performance with rewards.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=3540&auto=format&fit=crop",
  },
  {
    title: "Corporate Galas",
    description:
      "Unforgettable award nights and networking dinners with world-class entertainment, food, and ambiance.",
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=3387&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-starlight mb-4">
            Celebrate Your Success
          </h2>
          <p className="text-starlight/60 max-w-2xl mx-auto">
            We understand the Indian business ecosystem. We create environments where relationships are strengthened and deals are celebrated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-playfair font-bold text-starlight mb-2 group-hover:text-glacial transition-colors">
                  {service.title}
                </h3>
                <p className="text-starlight/80 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {service.description}
                </p>
                <div className="flex items-center text-glacial text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
