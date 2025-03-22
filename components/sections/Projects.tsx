"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, FileCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "API Analytics Architecture",
    description: "Event-driven API service leveraging PostgreSQL notifications and materialized views, reducing query response times by 65% for analytical requests with efficient processing of 500K+ records.",
    tags: ["PostgreSQL", "Event-Driven Architecture", "Materialized Views", "Async Processing", "Indexing Strategy"],
    links: {
      github: "https://github.com/kaushalkoladiya/logistics-analytics",
      live: ""
    }
  },
  {
    title: "Multi-Faceted Chat Platform",
    description: "Real-time communication platform supporting audio, video, group-chat, file sharing, and tagging using WebSocket protocols, maintaining 99.9% uptime for 3K+ daily users.",
    tags: ["WebSockets", "Node.js", "React", "AWS", "Real-time", "Video Chat"],
    links: {
      github: "",
      live: ""
    }
  },
  {
    title: "Property Management Platform",
    description: "MERN-based platform with Apollo GraphQL for property management, reducing data overfetching by 60% through efficient query structures with subscription-based features.",
    tags: ["MERN Stack", "GraphQL", "Apollo", "Stripe", "GoCardless", "Signature Module"],
    links: {
      github: "",
      live: ""
    }
  },
  {
    title: "Event-Driven Scheduling System",
    description: "Microservices-based scheduling system using Kafka and AWS Lambda, handling real-time session conflicts at scale with primary and virtual calendars and automated recovery.",
    tags: ["Kafka", "AWS Lambda", "Microservices", "Event-Driven", "SQS", "Step Functions"],
    links: {
      github: "",
      live: ""
    }
  },
  // Original projects - assuming these were your previous projects
  {
    title: "Quizzie (AI Quiz Generator)",
    description: "AI-powered quiz generation platform with content analysis and dynamic question creation",
    tags: ["Next.js", "Anthropic API", "PostgreSQL", "Prisma"],
    links: {
      github: "https://github.com/kaushalkoladiya/quizzie",
      live: ""
    }
  },
  {
    title: "Phoenix (Social Music Platform)",
    description: "Spotify clone with social features including friend connections and song dedications",
    tags: ["PHP Laravel", "MySQL", "Laravel Telescope"],
    links: {
      github: "https://github.com/kaushalkoladiya/phoenix",
      live: ""
    }
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 section-gradient section-divider" id="projects">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center heading-gradient">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm rounded-lg shadow-md border border-border overflow-hidden card-hover"
              >
                <div className="p-6">
                  <div className="mb-2 flex items-center">
                    <FileCode className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/10 hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end gap-3">
                    {project.links.github && (
                      <Link 
                        href={project.links.github} 
                        target="_blank" 
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.links.live && project.links.live !== "#" && (
                      <Link 
                        href={project.links.live} 
                        target="_blank" 
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
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