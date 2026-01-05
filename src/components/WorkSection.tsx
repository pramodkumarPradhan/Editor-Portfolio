"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const demoVideos = [
  {
    title: "Wellness Insights",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767591654/dpctor_kugbwy.mov",
    category: "Client",
  },
   {
    title: "Motivational shorts",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767594410/document_lzbxyb.mov",
    category: "Motivation",
  },
  {
    title: "Documentary Edit",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354443/documentary_edit_1_jwzigt.mp4",
    category: "Documentary",
  },
  {
    title: "Led Light Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354507/led_light_ads_3_wf9t2c.mp4",
    category: "Advertisement",
  },
  {
    title: "Motion Product Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767350812/motion_product_ads_4_rvnbsu.mp4",
    category: "Motion",
  },
  {
    title: "Cinematic Video",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767352174/cinematic_end_of_the_year_8_af3g0q.mov",
    category: "Social Media",
  },
  {
    title: "Gym Cinematic Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354422/gym_ads_6_rnvyf2.mp4",
    category: "Advertisement",
  },
  {
    title: "Cinematic Restaurant Promotion",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767351781/cinematic_store_promotion_video_5_sudc8h.mp4",
    category: "Event",
  },
  {
    title: "Kerala Cinematic",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767358227/kerala_kwzfzd.mov",
    category: "Travel",
  }
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

      {/* POPUP MODAL - iPhone Mobile Optimized */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full h-full max-w-sm sm:max-w-md md:max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 rounded-full bg-black/80 backdrop-blur-sm p-2 sm:p-3 text-white hover:text-primary transition-colors shadow-lg"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Video - iPhone frame style */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-2xl bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
                src={activeVideo}
                autoPlay
                controls
                playsInline
                className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] object-contain"
                style={{
                  aspectRatio: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;