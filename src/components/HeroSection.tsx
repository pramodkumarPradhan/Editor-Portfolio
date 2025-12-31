import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient film-grain overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 opacity-0 animate-fade-up">
            <Play className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-sm text-muted-foreground">Professional Video Editor</span>
          </div>

          {/* Profile Photo */}
          <div className="mb-8 opacity-0 animate-fade-up delay-100">
            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-primary/30 glow">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Satyabrata Mohanty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up delay-200 font-light">
            Transforming raw footage into <span className="text-foreground">cinematic stories</span> that captivate and engage your audience.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-12 opacity-0 animate-fade-up delay-250">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display text-gradient">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display text-gradient">85+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-300">
            <a 
              href="#work" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 glow"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
