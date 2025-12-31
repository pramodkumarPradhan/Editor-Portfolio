import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "YouTuber",
    content: "SatyaMotion transformed my raw footage into something incredible. The attention to detail and creative vision is outstanding!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Business Owner",
    content: "Our brand video exceeded all expectations. Professional, timely delivery and great communication throughout the project.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Content Creator",
    content: "Best video editor I've worked with. The motion graphics added so much value to my content. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display mb-4">
            CLIENT <span className="text-gradient">TESTIMONIALS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
                ))}
              </div>
              <div>
                <div className="font-display text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
