"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Video, Home, Calculator, GraduationCap, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "E-commerce Solutions",
    description: "Custom e-commerce platforms with secure payment integration and inventory management"
  },
  {
    icon: Video,
    title: "Video Calling Platforms",
    description: "Real-time video communication solutions with WebRTC and socket integration"
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Comprehensive property management systems with booking and maintenance features"
  },
  {
    icon: Calculator,
    title: "Loan Calculators",
    description: "Financial tools and calculators with complex computation algorithms"
  },
  {
    icon: GraduationCap,
    title: "University Subsidy Systems",
    description: "Educational platforms with subsidy management and verification"
  },
  {
    icon: ShoppingBag,
    title: "Custom Web Solutions",
    description: "Tailored web applications with modern tech stack and scalable architecture"
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20" id="services">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
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