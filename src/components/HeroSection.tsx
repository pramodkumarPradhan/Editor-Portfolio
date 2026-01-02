import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient film-grain overflow-hidden">
      {/* Animated light effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-primary/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[50vh] bg-gradient-to-b from-primary/30 to-transparent blur-sm" />
        <div className="absolute top-0 left-1/3 w-px h-[40vh] bg-gradient-to-b from-primary/20 to-transparent blur-sm" style={{ transform: 'rotate(-15deg)' }} />
        <div className="absolute top-0 right-1/3 w-px h-[40vh] bg-gradient-to-b from-primary/20 to-transparent blur-sm" style={{ transform: 'rotate(15deg)' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
      </div>
      
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
                src="../public/ProfilePic.JPG" 
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

       
      </div>
    </section>
  );
};

export default HeroSection;
