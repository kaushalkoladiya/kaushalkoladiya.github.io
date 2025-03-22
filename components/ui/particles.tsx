"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number; 
      y: number; 
      dx: number; 
      dy: number; 
      size: number; 
      color: string;
      alpha: number;
    }> = [];
    
    let animationFrameId: number;
    let mouse = { x: 0, y: 0 };
    const particleCount = 70;

    // Theme-based colors
    const getColors = () => {
      if (theme === 'dark') {
        return [
          'rgba(59, 130, 246, alpha)', // blue
          'rgba(99, 102, 241, alpha)', // indigo
          'rgba(139, 92, 246, alpha)', // purple
          'rgba(191, 219, 254, alpha)', // light blue
          'rgba(199, 210, 254, alpha)', // light indigo
        ];
      } else {
        return [
          'rgba(37, 99, 235, alpha)', // blue
          'rgba(79, 70, 229, alpha)', // indigo
          'rgba(147, 51, 234, alpha)', // purple
          'rgba(6, 182, 212, alpha)',  // cyan
          'rgba(16, 185, 129, alpha)', // emerald
        ];
      }
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const colors = getColors();
      
      particles = Array.from({ length: particleCount }, () => {
        const size = Math.random() * 4 + 2;
        const color = colors[
          Math.floor(Math.random() * colors.length)
        ].replace('alpha', (0.2 + Math.random() * 0.3).toString());
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
          size,
          color,
          alpha: 0.1 + Math.random() * 0.4
        };
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles with each other when close
        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(148, 163, 184, ${0.15 * (1 - distance/100)})` 
              : `rgba(71, 85, 105, ${0.1 * (1 - distance/100)})`;
            ctx.lineWidth = 2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        // Connect particles near mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 160) {
          ctx.beginPath();
          ctx.strokeStyle = theme === 'dark'
            ? `rgba(148, 163, 184, ${0.3 * (1 - distance/160)})` 
            : `rgba(71, 85, 105, ${0.2 * (1 - distance/160)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    const handleThemeChange = () => init();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('theme-change', handleThemeChange);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('theme-change', handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
    />
  );
}