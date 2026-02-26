import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl mb-2">Get in Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground mb-12 font-body max-w-xl mx-auto">
            Interested in working together? Feel free to reach out — I'm always open
            to new projects and creative collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {[
            { icon: Mail, label: "alpismark09@gmail.com", href: "mailto:alpismark09@gmail.com" },
            { icon: Phone, label: "+993-099-4087", href: "tel:+9930994087" },
            { icon: MapPin, label: "Cavite, Philippines", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass-card p-5 flex items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
