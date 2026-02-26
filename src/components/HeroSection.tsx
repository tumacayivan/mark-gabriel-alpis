import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Video Editor / Graphic Designer / Web Designer / Virtual Assistant
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide leading-none mb-6"
        >
          Mark Gabriel
          <br />
          <span className="text-gradient">Alpis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Creative and detail-oriented professional delivering visually compelling
          and engaging digital content. Experienced in producing high-quality videos,
          impactful graphics, and user-friendly websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-primary/90 transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-foreground/30 text-foreground font-body font-semibold text-sm tracking-wider uppercase rounded hover:border-primary hover:text-primary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
