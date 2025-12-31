const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 glow">
                      <span className="text-5xl font-display text-gradient">SM</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Video Editor & Motion Designer</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-display mb-6">
                ABOUT <span className="text-gradient">ME</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm <span className="text-foreground font-medium">Satyabrat Mohanty</span>, a passionate video editor dedicated to transforming ordinary footage into extraordinary visual experiences.
                </p>
                <p className="leading-relaxed">
                  With expertise in documentary editing, brand advertisements, and motion graphics, I bring creativity and technical precision to every project. My goal is to tell your story in the most compelling way possible.
                </p>
                <p className="leading-relaxed">
                  Whether you need a polished corporate video or an engaging social media clip, I'm here to make your vision a reality.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-display text-gradient">4+</div>
                  <div className="text-sm text-muted-foreground">Services</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-gradient">100%</div>
                  <div className="text-sm text-muted-foreground">Dedication</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-gradient">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
