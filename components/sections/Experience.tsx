"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "Girls First Finance",
    position: "Full Stack Developer",
    period: "Jan 2024 – Oct 2024",
    achievements: [
      "Spearheaded identity verification system using Yoti SDK",
      "Architected real-time chat infrastructure with WebSocket",
      "Executed content delivery optimization through AWS CloudFront",
      "Engineered distributed meeting scheduling system"
    ],
    tech: "Next.js, React.js, AWS, Node.js, SQL, Metabase, Braze, Yoti, Twilio"
  },
  {
    company: "Blossom.team",
    position: "Full Stack Developer",
    period: "Sep 2021 – Jan 2024",
    achievements: [
      "Led development team in architecting enterprise scheduling system",
      "Designed comprehensive sponsor analytics dashboard",
      "Architected fault-tolerant booking management pipeline",
      "Engineered cross-platform mobile app using React Native"
    ],
    tech: "Next.js, React Native, Python, React.js, AWS, Node.js, SQL, Customer.io, Segment, Twilio"
  },
  
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20" id="experience">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-4">{exp.position}</h4>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">{achievement}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Technologies:</span> {exp.tech}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}