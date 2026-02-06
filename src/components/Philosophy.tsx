import Logo from "@/assets/3F_Grey.png";

const Philosophy = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <img src={Logo} alt="3FACTOR" className="h-12 md:h-16 mx-auto mb-8 opacity-60" />

          {/* Quote Text */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed mb-8">
            "Our focus is driving{" "}
            <span className="text-muted-foreground font-medium">business value with security enablement</span>{" "}
            , positioning cybersecurity as a competitive differentiator, not just a cost center."
          </blockquote>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
