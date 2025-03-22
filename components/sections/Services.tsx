"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, LayoutGrid, Server, Shield, Globe } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using modern JavaScript frameworks (React, Node.js) with focus on performance and scalability.",
    icon: Code2,
  },
  {
    title: "Microservices Architecture",
    description: "Design and implementation of event-driven microservices architecture using Kafka, AWS Lambda, and containerization technologies.",
    icon: Server,
  },
  {
    title: "Database Optimization",
    description: "Performance tuning and optimization of SQL and NoSQL databases, including complex query optimization, indexing, and data modeling.",
    icon: Database,
  },
  {
    title: "Cloud Infrastructure",
    description: "Design and implementation of scalable AWS cloud infrastructure with CI/CD pipelines, containerization, and infrastructure as code.",
    icon: Globe,
  },
  {
    title: "API Development",
    description: "Creation of RESTful and GraphQL APIs with focus on performance, security, documentation, and scalable architecture.",
    icon: LayoutGrid,
  },
  {
    title: "Security Implementation",
    description: "Implementation of authentication, authorization, and data protection measures to ensure application security and compliance.",
    icon: Shield,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 section-gradient section-divider" id="services">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center heading-gradient">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-border card-hover"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}