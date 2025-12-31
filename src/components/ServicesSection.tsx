import { Film, Sparkles, Megaphone, Wand2 } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Documentary Editing",
    description: "Crafting compelling narratives from real-life footage. I bring stories to life with pacing, emotion, and professional polish.",
  },
  {
    icon: Sparkles,
    title: "Raw to Engaging",
    description: "Transform your unpolished footage into captivating content. Color grading, transitions, and effects that make viewers stay.",
  },
  {
    icon: Megaphone,
    title: "Brand Advertisements",
    description: "Eye-catching promotional videos that communicate your brand message effectively and drive conversions.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Dynamic animations and visual effects that add energy and professionalism to any video project.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display mb-4">
            WHAT I <span className="text-gradient">DO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Professional video editing services tailored to your needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
