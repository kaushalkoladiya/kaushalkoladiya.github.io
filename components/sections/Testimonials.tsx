'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    title: 'React.js Reporting Development',
    feedback:
      'Kaushal helped us reach our goals on time. Great attitude and good work ethic.',
    project: 'React.js Development',
  },
  {
    title: 'MongoDB University Certification Exam',
    feedback:
      'Kaushal was wonderful to work with. His quality of work was excellent and able to meet deadlines. It has been a pleasure to work with him.',
    project: 'MongoDB Development',
  },
  {
    title: 'Expert GraphQL & Node.js Developer',
    feedback:
      'Kaushal is an excellent backend developer and has wealth of technical knowledge. I will continue to keep on with other projects.',
    project: 'Backend Development',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className='py-20 section-gradient section-divider'
      id='testimonials'>
      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}>
          <h2 className='text-3xl font-bold mb-12 text-center heading-gradient'>
            Client Testimonials
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Card className='h-full relative bg-background/50 backdrop-blur-sm card-hover border border-border'>
                  <CardContent className='p-6'>
                    <Quote className='h-8 w-8 text-primary/20 absolute top-4 right-4' />
                    <h3 className='text-xl font-semibold mb-4 text-primary'>
                      {testimonial.title}
                    </h3>
                    <p className='text-muted-foreground mb-4 italic'>
                      &quot;{testimonial.feedback}&quot;
                    </p>
                    <p className='text-sm text-primary'>
                      {testimonial.project}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mt-12 text-center'>
            <Link
              href='https://www.upwork.com/freelancers/~015ce6a7664dfb459d'
              target='_blank'
              className='inline-flex items-center text-primary hover:text-primary/80 transition-colors card-hover p-2 rounded-md'>
              View my Upwork Profile
              <svg
                className='ml-2 h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
