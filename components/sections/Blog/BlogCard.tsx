'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  link: string;
  index: number;
}

export function BlogCard({ title, excerpt, date, link, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}>
      <Card className='h-full bg-background/50 backdrop-blur-sm card-hover border border-border transition-shadow'>
        <CardHeader>
          <CardTitle className='line-clamp-2 text-primary'>{title}</CardTitle>
          <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2'>
            <span className='flex items-center gap-1'>
              <Calendar className='h-4 w-4' />
              {date}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground mb-4 line-clamp-3'>{excerpt}</p>
          <Link
            href={link}
            target='_blank'
            className={buttonVariants({
              variant: 'ghost',
              className: 'group card-hover',
            })}>
            Read More
            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
