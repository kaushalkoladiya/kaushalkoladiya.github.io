'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BlogCard } from './BlogCard';
import { blogPosts } from './BlogData';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className='py-20 section-gradient section-divider'
      id='blog'>
      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}>
          <div className='flex justify-between items-center mb-12'>
            <h2 className='text-3xl font-bold heading-gradient'>Latest Articles</h2>
            <Link
              href={
                'https://www.linkedin.com/in/kaushalkoladiya/recent-activity/all/'
              }
              target='_blank'
              className={buttonVariants({
                variant: 'ghost',
                className: 'group card-hover',
              })}>
              View All
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.title}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                link={post.link}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
