"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Corporate Events & Conferences",
    description:
      "Annual meets, product launches, and team celebrations. We handle everything from venue to entertainment for groups of any size.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop",
  },
  {
    title: "Incentive & Reward Trips",
    description:
      "Motivate your teams with luxury getaways to Dubai, Thailand, or Bali. Perfect for top performers, dealers, and partners.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=3540&auto=format&fit=crop",
  },
  {
    title: "Team Offsites & Retreats",
    description:
      "Strategic planning sessions and team-building experiences in inspiring locations. Strengthen bonds while achieving goals.",
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
            Tailored Corporate Experiences
          </h2>
          <p className="text-starlight/60 max-w-2xl mx-auto">
            Whether it's a team offsite, dealer meet, or annual conference, we create seamless experiences that leave lasting impressions.
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
