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

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
              'Thank you for reaching out! I&apos;ve received your request and will get back to you within 24 hours.',
          });
          clearForm();
        },
        (error) => {
          toast({
            title: 'An error occurred!',
            description: 'Unable to send your message. Please try again later.',
          });
          console.error('\n\nError!', error);
        }
      )
      .catch(() => {
        toast({
          title: 'An error occurred!',
          description: 'Unable to send your message. Please try again later.',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      className='py-20 section-gradient mb-10'
      id='contact'>
      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className='max-w-xl mx-auto'>
          <h2 className='text-3xl font-bold mb-12 text-center heading-gradient'>Get In Touch</h2>
          <Card className='bg-background/50 backdrop-blur-sm card-hover border border-border'>
            <CardContent className='pt-6'>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'>
                <div className='space-y-2'>
                  <Input
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({...errors, name: undefined});
                    }}
                    className={`bg-background/80 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                    disabled={isSubmitting}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                  )}
                </div>
                <div className='space-y-2'>
                  <Input
                    type='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({...errors, email: undefined});
                    }}
                    className={`bg-background/80 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                  )}
                </div>
                <div className='space-y-2'>
                  <Textarea
                    placeholder='Your Message'
                    className={`min-h-[120px] bg-background/80 ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({...errors, message: undefined});
                    }}
                    required
                    disabled={isSubmitting}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                  )}
                </div>
                <Button
                  type='submit'
                  className='w-full'
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <div className='mt-8 flex justify-center space-x-4'>
                <Link
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                    className: 'card-hover'
                  })}
                  href={'https://github.com/kaushalkoladiya'}
                  target='_blank'>
                  <GithubIcon className='h-5 w-5' />
                </Link>
                <Link
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                    className: 'card-hover'
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
