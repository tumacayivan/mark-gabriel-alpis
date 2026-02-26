import { motion } from "framer-motion";

const education = [
  {
    school: "Cavite State University",
    degree: "Bachelor of Science in Computer Science",
    period: "2024–Present",
  },
  {
    school: "Congressional Integrated High School",
    degree: "Science, Technology, Engineering, Mathematics",
    period: "2022–2024",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-5xl md:text-6xl mb-2">Education</h2>
        <div className="w-16 h-1 bg-primary mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <p className="text-primary text-xs uppercase tracking-widest mb-2 font-body">
              {edu.period}
            </p>
            <h3 className="font-display text-2xl mb-1">{edu.school}</h3>
            <p className="text-muted-foreground text-sm font-body">{edu.degree}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
