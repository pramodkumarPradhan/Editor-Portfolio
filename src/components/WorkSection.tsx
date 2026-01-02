"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const demoVideos = [
  {
    title: "Brand Commercial",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354507/led_light_ads_3_wf9t2c.mp4",
    category: "Advertisement",
  },
  {
    title: "Documentary Edit",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354443/documentary_edit_1_jwzigt.mp4",
    category: "Documentary",
  },
  {
    title: "Motion Graphics",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767350812/motion_product_ads_4_rvnbsu.mp4",
    category: "Motion",
  },
  {
    title: "Social Media Reel",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767352174/cinematic_end_of_the_year_8_af3g0q.mov",
    category: "Social Media",
  },
  {
    title: "Product Showcase",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354422/gym_ads_6_rnvyf2.mp4",
    category: "Product",
  },
  {
    title: "Event Highlight",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767351781/cinematic_store_promotion_video_5_sudc8h.mp4",
    category: "Event",
  },
  {
    title: "Kerala Cinematic",
    video: "https://drive.google.com/uc?export=download&id=1VlXYvuBEC8Agdv-AN4wQt1W1D72_pQVb",
    category: "Travel",
  },
  {
    title: "Man Matters Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354583/man_matters_2_gcublz.mp4",
    category: "Branding",
  },
];

const WorkSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display mb-4">
            MY <span className="text-gradient">WORK</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selected works crafted with motion, story and emotion
          </p>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ${
            activeVideo ? "pointer-events-none opacity-40" : ""
          }`}
        >
          {demoVideos.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition cursor-pointer"
              onClick={() => !activeVideo && setActiveVideo(item.video)}
            >
              <div className="aspect-video relative overflow-hidden">
                <video
                  src={item.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-7 h-7 text-primary-foreground" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background">
                <span className="text-xs text-primary">{item.category}</span>
                <h3 className="text-lg font-display mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-black rounded-xl w-[90%] max-w-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 rounded-full bg-black/80 p-2 text-white hover:text-primary"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={22} />
            </button>

            <video
              src={activeVideo}
              autoPlay
              controls
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
