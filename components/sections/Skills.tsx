"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "Go", "PHP"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "Next.js", "Redux", "React Query", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Spring Boot", "FastAPI", "J2EE", "JSP", "Hibernate", "Kafka", "GraphQL", "Apollo", "Redis"]
  },
  {
    title: "Databases & ORMs",
    skills: ["MySQL", "PostgreSQL", "Aurora", "MongoDB", "DynamoDB", "Redshift", "Prisma"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Infrastructure-as-Code (IaC)", "Cloudformation"]
  },
  {
    title: "Testing & QA",
    skills: ["Cypress", "JUnit", "Jest", "React Testing Library", "Mocha", "Selenium", "TDD practices", "End-to-End Testing"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 section-gradient section-divider" id="skills">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center heading-gradient">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-border card-hover"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
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