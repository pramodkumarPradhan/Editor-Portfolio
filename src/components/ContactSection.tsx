import { Mail, Instagram, Phone, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "satyamohanty176@gmail.com",
    href: "mailto:satyamohanty176@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@satya_motion",
    href: "https://instagram.com/satya_motion",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 7846932958",
    href: "https://wa.me/917846932958",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display mb-4">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{method.label}</div>
                <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {method.value}
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-2xl card-gradient border border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-lg mb-2">Prefer a quick call?</p>
              <a 
                href="tel:+917846932958" 
                className="text-2xl font-display text-gradient hover:opacity-80 transition-opacity"
              >
                +91 7846 932 958
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
