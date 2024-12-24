"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn/ui"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Nest.js", "GraphQL"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-muted/50" id="skills">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}