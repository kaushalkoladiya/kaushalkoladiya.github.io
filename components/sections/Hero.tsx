'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
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
            className='text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Full Stack Developer
          </motion.h1>
          <motion.p
            className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            Crafting scalable solutions and exceptional user experiences with
            modern technologies
          </motion.p>
          <motion.div
            className='flex gap-4 justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}>
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
