"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Girls First Finance",
    location: "New York, NY (Remote)",
    duration: "Jan 2024 - Present",
    description: "Leading development of microservices and real-time communication systems with focus on performance and scalability.",
    responsibilities: [
      "Led Agile/Scrum ceremonies, conducted peer code reviews, and mentored team members on TDD best practices",
      "Developed microservices using Node.js, Nest.js, MySQL, and PostgreSQL, orchestrated with Docker",
      "Architected multi-faceted chat platform using WebSocket protocols, maintaining 99.9% uptime for 3K+ daily users",
      "Optimized queries with CQRS, improving performance by 200% for 4K+ daily users",
      "Deployed AWS services (ECS, ECR, EC2, CloudFront, RDS) and Docker containers",
      "Engineered distributed meeting scheduling system using Cal.com and Google Meet integration"
    ],
    tech: ["Node.js", "Nest.js", "React", "MySQL", "PostgreSQL", "Docker", "AWS", "WebSockets", "CQRS"]
  },
  {
    title: "Full Stack Developer",
    company: "Blossom.team",
    location: "San Francisco, CA (Remote)",
    duration: "Sep 2021 - Jan 2024",
    description: "Led development of event-driven scheduling microservices and analytics dashboards for enterprise scheduling system.",
    responsibilities: [
      "Led Agile teams, overseeing sprint grooming, backlog refinement, and technical direction",
      "Refactored legacy codebases, reducing technical debt and improving performance by 35%",
      "Implemented Kafka for asynchronous messaging, Redis for caching, reducing latency by 40%",
      "Designed event-driven scheduling microservices using Kafka and AWS Lambda",
      "Architected a sponsor analytics dashboard with ML-driven insights, contributing to 10% growth in quarterly revenue",
      "Built a video conferencing application featuring background effects, in-call chat, and session recording"
    ],
    tech: ["React", "Java", "Spring Boot", "Node.js", "Kafka", "Redis", "AWS Lambda", "React Native", "TDD"]
  },
  {
    title: "Full Stack Developer (Freelancer)",
    company: "Self Employed",
    location: "Surat, GJ",
    duration: "Apr 2020 - Sep 2021",
    description: "Developed custom solutions for multiple clients across diverse industries using MERN stack and Java Spring Boot.",
    responsibilities: [
      "Developed a MERN-based platform with Apollo GraphQL for property management, reducing data overfetching by 60%",
      "Integrated Stripe and GoCardless for dual payment processing with 99.9% transaction success rate",
      "Built a SaaS-like module for property owners with subscription-based features",
      "Refactored legacy codebases, adopting microservices and modern design patterns",
      "Implemented government ID verification and complex calculation algorithms",
      "Designed interactive analytics dashboard using React and D3.js, reducing manual review time by 60%"
    ],
    tech: ["MERN Stack", "GraphQL", "Apollo", "Java", "Spring Boot", "AWS", "Docker", "TDD", "Stripe"]
  },
  {
    title: "Full Stack Developer",
    company: "Laxmisoft Technologies",
    location: "Surat, GJ",
    duration: "Jan 2020 - Mar 2020",
    description: "Developed SaaS and IaaS solutions for various clients using multiple technology stacks.",
    responsibilities: [
      "Developed SaaS and IaaS solutions using MERN, PHP, Java Spring Boot, and AWS",
      "Implemented a high-volume e-commerce platform supporting large shopping carts",
      "Managed containerized deployments through Docker",
      "Created a drag-and-drop website builder with modular templates"
    ],
    tech: ["MERN Stack", "PHP", "Java", "Spring Boot", "AWS", "Docker", "E-commerce"]
  },
  {
    title: "Full Stack Developer (Part-time)",
    company: "Laxmisoft Technologies",
    location: "Surat, GJ",
    duration: "Jul 2018 - Dec 2019",
    description: "Worked on microservices architecture and billing systems for client projects.",
    responsibilities: [
      "Created a dynamic billing system with tiered subscription plans",
      "Maintained microservice architectures ensuring data integrity",
      "Enhanced TDD adoption, improving test coverage",
      "Customized spin wheel game engine for promotional campaigns"
    ],
    tech: ["MERN Stack", "Microservices", "TDD", "RESTful APIs"]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 section-gradient section-divider" id="experience">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center heading-gradient">Work Experience</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary/50 before:to-primary/10"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />
                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-border card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <span className="text-muted-foreground">{experience.duration}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <p className="text-lg font-medium">{experience.company}</p>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{experience.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/80">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="pl-2"><span className="pl-1">{responsibility}</span></li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/10 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}