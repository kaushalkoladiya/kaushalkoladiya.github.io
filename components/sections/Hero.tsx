'use client';

import { motion } from 'framer-motion';
import { ArrowDown, GithubIcon, LinkedinIcon } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='h-screen flex items-center justify-center relative overflow-hidden'>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center'>
          <motion.h1
            className='text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Kaushal Koladiya
          </motion.h1>
          <motion.h2
            className='text-4xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            Software Engineer
          </motion.h2>
          <motion.p
            className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}>
            Crafting scalable solutions and exceptional user experiences with
            modern technologies
          </motion.p>
          <motion.div
            className='flex gap-4 justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}>
            <Link
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href={'https://github.com/kaushalkoladiya'}
              target='_blank'>
              <GithubIcon className='mr-2 h-4 w-4' />
              GitHub
            </Link>
            <Link
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href={'https://linkedin.com/in/kaushalkoladiya/'}
              target='_blank'>
              <LinkedinIcon className='mr-2 h-4 w-4' />
              LinkedIn
            </Link>
          </motion.div>

          <motion.div
            className='mt-8 left-0 bottom-8 absolute w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}>
            <Button
              variant='outline'
              size='lg'
              className='group'
              onClick={() =>
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }>
              Explore More
              <ArrowDown className='ml-2 h-4 w-4 transition-transform group-hover:translate-y-1' />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className='absolute inset-0 -z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30' />
        <div className='absolute inset-0 bg-grid-white/10' />
      </motion.div>
    </section>
  );
}
