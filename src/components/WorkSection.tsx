import { Play, ExternalLink } from "lucide-react";

const demoVideos = [
  {
    title: "Brand Commercial",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    category: "Advertisement",
  },
  {
    title: "Documentary Edit",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    category: "Documentary",
  },
  {
    title: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    category: "Motion",
  },
  {
    title: "Social Media Reel",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "Social Media",
  },
  {
    title: "Product Showcase",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    category: "Product",
  },
  {
    title: "Event Highlight",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    category: "Event",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display mb-4">
            MY <span className="text-gradient">WORK</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Check out my creative work and see how I transform ideas into stunning visuals
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {demoVideos.map((video, index) => (
            <div
              key={video.title}
              className="group relative rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium">{video.category}</span>
                <h3 className="text-lg font-display mt-1">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
