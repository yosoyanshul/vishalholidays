"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const HERO_VIDEOS = [
  {
    src: "https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop",
    theme: "tranquility",
  },
  {
    src: "https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=3540&auto=format&fit=crop",
    theme: "party",
  },
  {
    src: "https://videos.pexels.com/video-files/3015511/3015511-hd_1920_1080_24fps.mp4",
    poster: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop",
    theme: "richness",
  },
];

// Select video outside component to ensure it only happens once per page load
const getRandomVideo = () => HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)];

export function Hero() {
  // Use useMemo with empty deps to ensure video is selected only once
  const selectedVideo = useMemo(() => getRandomVideo(), []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian/40 z-10" /> {/* Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={selectedVideo.poster}
        >
          <source src={selectedVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-starlight mb-6 leading-tight"
        >
          Reward Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            Growth Partners
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-starlight/90 max-w-3xl mx-auto mb-10 font-light"
        >
          From high-energy Dealer Meets in Dubai to exclusive Distributor Incentives in Thailand.
          We craft experiences that celebrate your wholesalers and retailers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="min-w-[200px] bg-amber-500 hover:bg-amber-600 text-obsidian font-bold">
            Plan Your Event
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-obsidian">
            View Destinations
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-starlight/50 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
