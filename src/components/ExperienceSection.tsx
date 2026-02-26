import { motion } from "framer-motion";

const experiences = [
  {
    title: "Graphic Designer and Video Editor",
    company: "Rovawork Philippines",
    period: "2021–2023",
    description:
      "At Rovawork Philippines, I collaborated with a dynamic creative team to produce engaging video content for corporate clients, marketing initiatives, and digital platforms. My responsibilities centered on transforming raw footage into polished, high-quality visual narratives that reflected client branding and strategic goals.",
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Freelance (Handled Multiple Clients)",
    period: "2021–Present",
    description:
      "As a freelance video editor, I've partnered with a wide range of clients including content creators, small businesses, marketing agencies, and independent filmmakers. My work centers on producing visually captivating and emotionally resonant videos that align with each client's specific objectives.",
  },
  {
    title: "Graphic Designer, Social Media Manager & Video Editor",
    company: "Next Generation Church (Jesus Culture)",
    period: "2017–2018",
    description:
      "Our mission is to inspire believers worldwide by uniting in faith through powerful and engaging worship experiences. Through our content, we provide opportunities for worship, fellowship, and authentic connection, touching the lives of people from diverse backgrounds.",
  },
  {
    title: "Video Editor",
    company: "Dr Anthony Youn",
    period: "2023–Present",
    description:
      "As a member of the Dr. Youn Show team, I transformed raw conversations and recordings into polished podcast episodes, short-form reels, and engaging social content. My role went beyond simple editing, emphasizing storytelling by shaping the pacing, flow, and visuals to ensure each episode resonated with the audience.",
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Cavite State University",
    period: "2024–Present",
    description:
      "During my studies, I pursued my passion for video editing and graphic design by contributing to university projects, student events, and freelance work. These opportunities allowed me to blend creativity with technical expertise, producing visuals and multimedia content that enhanced the impact and engagement of various campaigns, events, and projects.",
  },
  {
    title: "Web Designer",
    company: "Exoskill Creatives",
    period: "2024–Present",
    description:
      "At Exoskill Creatives Company, I created and developed websites that were both visually engaging and user-friendly, customized to meet each client's needs. I focused on blending creativity with functionality, ensuring every site offered a smooth user experience while staying true to the client's brand identity.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mb-12" />
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-border/50 last:border-b-0"
            >
              <p className="text-primary font-body text-sm tracking-wider">
                {exp.period}
              </p>
              <div>
                <h3 className="font-display text-2xl mb-1">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 font-body">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
