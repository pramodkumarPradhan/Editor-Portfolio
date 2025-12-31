const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-display">
            SATYABRATA <span className="text-gradient">MOHANTY</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Satyabrat Mohanty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
