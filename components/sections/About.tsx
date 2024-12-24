"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-muted/50" id="about">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            A passionate Full Stack Developer with 5 years of experience in building scalable web applications
            and distributed systems. Specialized in modern JavaScript frameworks, cloud architecture, and
            delivering high-performance solutions.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">50+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">20+</h3>
              <p className="text-muted-foreground">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}