import { motion } from "framer-motion";

// Tool images from public/tools folder (in order)
const toolImages = [
  "Screenshot 2026-02-28 152603.png",
  "Screenshot 2026-02-28 152607.png",
  "Screenshot 2026-02-28 152609.png",
  "Screenshot 2026-02-28 152612.png",
  "Screenshot 2026-02-28 152614.png",
  "Screenshot 2026-02-28 152616.png",
  "Screenshot 2026-02-28 152618.png",
  "Screenshot 2026-02-28 152621.png",
  "Screenshot 2026-02-28 152623.png",
  "Screenshot 2026-02-28 152627.png",
  "Screenshot 2026-02-28 152630.png",
  "Screenshot 2026-02-28 152632.png",
  "Screenshot 2026-02-28 152636.png",
  "Screenshot 2026-02-28 152638.png",
  "Screenshot 2026-02-28 152641.png",
  "Screenshot 2026-02-28 152655.png",
  "Screenshot 2026-02-28 152659.png",
  "Screenshot 2026-02-28 152701.png",
  "Screenshot 2026-02-28 152704.png",
  "Screenshot 2026-02-28 152708.png",
];

const tools = [
  { name: "Adobe Premiere Pro", image: toolImages[0] },
  { name: "Adobe After Effects", image: toolImages[1] },
  { name: "Adobe Audition", image: toolImages[2] },
  { name: "CapCut", image: toolImages[3] },
  { name: "Filmora", image: toolImages[4] },
  { name: "Audacity", image: toolImages[5] },
  { name: "Adobe Photoshop", image: toolImages[6] },
  { name: "Adobe Illustrator", image: toolImages[7] },
  { name: "Adobe InDesign", image: toolImages[8] },
  { name: "Google Docs", image: toolImages[9] },
  { name: "Google Sheets", image: toolImages[10] },
  { name: "HighLevel", image: toolImages[11] },
  { name: "Asana", image: toolImages[12] },
  { name: "Mailchimp", image: toolImages[13] },
  { name: "Slack", image: toolImages[14] },
  { name: "VistaSocial", image: toolImages[15] },
  { name: "Canva", image: toolImages[16] },
  { name: "ClickUp", image: toolImages[17] },
  { name: "Monday.com", image: toolImages[18] },
  { name: "Discord", image: toolImages[19] },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-2">
            <span className="text-primary">Tools</span>
          </h2>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-2xl font-body">
            Professional software and platforms I use to deliver high-quality creative
            work and manage projects efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-square rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-sm flex items-center justify-center p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={`/tools/${tool.image}`}
                    alt={tool.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground text-center mt-3 font-body group-hover:text-foreground transition-colors">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
