import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = [
  { title: "Video Edits", description: "Reels, podcasts, montages, music videos, vlogs, TikTok content, and sports highlights." },
  { title: "AI-Generated Videos", description: "Cutting-edge AI-powered video content and creative experiments." },
  { title: "Graphic Design", description: "Branding, social media graphics, marketing materials, and visual storytelling." },
  { title: "Scriptwriting", description: "Engaging scripts for video productions and social media content." },
  { title: "Web Design", description: "User-friendly, visually engaging websites customized to client brand identity." },
  { title: "Certifications & Docs", description: "English proficiency, personality assessment, speed tests, and more." },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl mb-2">Portfolio</h2>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-2xl mb-12 font-body">
            Explore my complete body of work — from video edits and graphic design
            to web projects and certifications — all organized in one place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-primary/50 transition-colors"
            >
              <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1-K_ir1dY1wtNaT8qPPF4EMQVQxgMObGZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-primary/90 transition-colors"
          >
            View Full Portfolio on Google Drive
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
