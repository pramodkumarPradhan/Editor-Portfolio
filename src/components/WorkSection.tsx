"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const demoVideos = [
  {
    title: "Wellness Insights",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767591654/dpctor_kugbwy.mov",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767591654/dpctor_kugbwy.jpg",
    category: "Client",
  },
  {
    title: "Motivational shorts",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767594410/document_lzbxyb.mov",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767594410/document_lzbxyb.jpg",
    category: "Motivation",
  },
  {
    title: "Documentary Edit",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354443/documentary_edit_1_jwzigt.mp4",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354443/documentary_edit_1_jwzigt.jpg",
    category: "Documentary",
  },
  {
    title: "Led Light Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354507/led_light_ads_3_wf9t2c.mp4",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354507/led_light_ads_3_wf9t2c.jpg",
    category: "Advertisement",
  },
  {
    title: "Motion Product Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767350812/motion_product_ads_4_rvnbsu.mp4",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767350812/motion_product_ads_4_rvnbsu.jpg",
    category: "Motion",
  },
  {
    title: "Cinematic Video",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767352174/cinematic_end_of_the_year_8_af3g0q.mov",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767352174/cinematic_end_of_the_year_8_af3g0q.jpg",
    category: "Social Media",
  },
  {
    title: "Gym Cinematic Ad",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354422/gym_ads_6_rnvyf2.mp4",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767354422/gym_ads_6_rnvyf2.jpg",
    category: "Advertisement",
  },
  {
    title: "Cinematic Restaurant Promotion",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767351781/cinematic_store_promotion_video_5_sudc8h.mp4",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767351781/cinematic_store_promotion_video_5_sudc8h.jpg",
    category: "Event",
  },
  {
    title: "Kerala Cinematic",
    video: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767358227/kerala_kwzfzd.mov",
    poster: "https://res.cloudinary.com/dlcjyh6fb/video/upload/v1767358227/kerala_kwzfzd.jpg",
    category: "Travel",
  }
];

const WorkSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="work" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            MY <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="text-gray-400 text-lg">
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
              className="group rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition cursor-pointer"
              onClick={() => !activeVideo && setActiveVideo(item.video)}
            >
              <div className="aspect-video relative overflow-hidden bg-gray-900">
                <video
                  src={item.video}
                  poster={item.poster}
                  muted
                  playsInline
                  preload="metadata"
                  webkit-playsinline="true"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Video failed to load:', item.video);
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                    <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black border-t border-gray-800">
                <span className="text-xs text-orange-500 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-lg font-bold mt-1 text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL - iPhone Mobile Optimized */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full h-full max-w-sm sm:max-w-md md:max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 rounded-full bg-black/80 backdrop-blur-sm p-2 sm:p-3 text-white hover:text-orange-500 transition-colors shadow-lg"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Video - iPhone frame style */}
            <div className="relative w-full max-w-[340px] sm:max-w-sm md:max-w-2xl bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
                src={activeVideo}
                autoPlay
                controls
                playsInline
                webkit-playsinline="true"
                className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] object-contain"
                controlsList="nodownload"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;