"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 section-gradient section-divider" id="about">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 heading-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I&apos;m a passionate Full Stack Developer with 7+ years of experience building scalable web applications and distributed systems. 
            I specialize in designing and implementing complex architectures using modern JavaScript frameworks, event-driven systems, and cloud infrastructure.
            My focus is on creating high-performance, maintainable solutions that solve real business problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              className="p-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-md border border-border card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-bold text-2xl mb-2 text-primary">6+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-md border border-border card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="font-bold text-2xl mb-2 text-primary">40+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-md border border-border card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="font-bold text-2xl mb-2 text-primary">20+</h3>
              <p className="text-muted-foreground">Technologies</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
