import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Graphic Designing",
    skills: ["Adobe Illustrator", "Adobe Lightroom", "Adobe Photoshop", "Canva", "Figma"],
  },
  {
    title: "Video Editing",
    skills: ["Adobe After Effects", "Adobe Premiere Pro", "CapCut Pro", "Final Cut Pro", "Power Director"],
  },
  {
    title: "Web Designing",
    skills: ["WordPress", "Wix", "HTML/CSS", "UI/UX Design", "SEO Basics"],
  },
];

const skills = [
  "Motion Graphics", "HTML/CSS", "Communication Skill", "Time Management",
  "Creativity and Problem-Solving", "Adaptability", "Attention to Detail", "Color Grading",
];

const competencies = [
  "Creativity", "Attention to Detail", "Communication Skills",
  "Understanding of Cinematography", "Time Management", "Collaboration",
  "Organization", "Adaptability",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-5xl md:text-6xl mb-2">Skills & Softwares</h2>
        <div className="w-16 h-1 bg-primary mb-12" />
      </motion.div>

      {/* Software categories */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-xl text-primary mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-muted-foreground text-sm font-body flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Skills & Competencies */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-xl text-primary mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1.5 text-xs font-body bg-secondary text-secondary-foreground rounded-full">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-xl text-primary mb-4">Key Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {competencies.map((c) => (
              <span key={c} className="px-3 py-1.5 text-xs font-body bg-secondary text-secondary-foreground rounded-full">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
