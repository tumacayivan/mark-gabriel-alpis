import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-5xl md:text-6xl mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Creative and detail-oriented Video Editor, Graphic Designer, Web Designer,
            and Virtual Assistant with a versatile skill set and a proven ability to
            deliver visually compelling and engaging digital content. Experienced in
            producing high-quality videos, designing impactful graphics, and developing
            user-friendly websites that align with brand identity and client goals.
          </p>
          <p>
            Proficient in industry-standard tools such as Adobe Creative Suite
            (Premiere Pro, After Effects, Photoshop, Illustrator), Figma, and WordPress,
            with a strong eye for aesthetics, storytelling, and functionality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { label: "Location", value: "Cavite, Philippines" },
            { label: "Email", value: "alpismark09@gmail.com" },
            { label: "Phone", value: "+993-099-4087" },
            { label: "Website", value: "www.reallygreatsite.com" },
            { label: "Languages", value: "English, Tagalog" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-5">
              <p className="text-primary text-xs uppercase tracking-widest mb-1 font-body">
                {item.label}
              </p>
              <p className="text-foreground text-sm font-body">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
