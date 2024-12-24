'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || '';

export default function Contact() {
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);

          toast({
            title: 'Thank You!',
            description:
              'Thank you for reaching out! I’ve received your request and will get back to you within 24 hours.',
          });
        },
        (error) => {
          toast({
            title: 'An error!',
            description: 'An error occurred, please try again later!',
          });
          console.error('\n\nError!', error);
        }
      )
      .catch(() => {
        alert('An error occurred, please try again later');
      })
      .finally(() => {
        clearForm();
      });
  };

  return (
    <section
      className='py-20 bg-muted/50 mb-10'
      id='contact'>
      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className='max-w-xl mx-auto'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Get In Touch</h2>
          <Card>
            <CardContent className='pt-6'>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'>
                <div className='space-y-2'>
                  <Input
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Input
                    type='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Textarea
                    placeholder='Your Message'
                    className='min-h-[120px]'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full'>
                  Send Message
                </Button>
              </form>

              <div className='mt-8 flex justify-center space-x-4'>
                <Link
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                  })}
                  href={'https://github.com/kaushalkoladiya'}
                  target='_blank'>
                  <GithubIcon className='h-5 w-5' />
                </Link>
                <Link
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                  })}
                  href={'https://linkedin.com/in/kaushalkoladiya/'}
                  target='_blank'>
                  <LinkedinIcon className='h-5 w-5' />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
