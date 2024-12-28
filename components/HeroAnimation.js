import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = Array.from({ length: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent" />
        
        {/* Floating particles */}
        {particles.map((_, i) => {
          const radius = Math.random() * 600 + 200;
          const angle = (i * (360 / particles.length)) * (Math.PI / 180);
          const baseX = Math.cos(angle) * radius;
          const baseY = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              initial={{
                x: baseX,
                y: baseY,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: [
                  baseX + mousePosition.x,
                  baseX - mousePosition.x * 2,
                  baseX + mousePosition.x
                ],
                y: [
                  baseY + mousePosition.y,
                  baseY - mousePosition.y * 2,
                  baseY + mousePosition.y
                ],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "linear"
              }}
            >
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  i % 3 === 0 
                    ? 'bg-primary-400/30'
                    : i % 3 === 1
                    ? 'bg-secondary-400/30'
                    : 'bg-accent-400/30'
                }`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            </motion.div>
          );
        })}

        {/* Central glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-radial from-primary-200/20 via-secondary-200/10 to-transparent" />
        </motion.div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            stroke="url(#gradient)"
            strokeWidth="1"
            fill="none"
            animate={{
              d: [
                "M 0,500 Q 400,400 800,500",
                "M 0,500 Q 400,600 800,500",
                "M 0,500 Q 400,400 800,500",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
} 