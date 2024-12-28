import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HairStrandAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controlPoints = Array.from({ length: 12 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-50/40 via-secondary-50/30 to-transparent" />
        
        {/* Main hair strand */}
        <svg 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-[min(2000px,140vw)] h-[min(1200px,120vh)]"
          viewBox="0 0 2000 2000"
          style={{ opacity: 0.9 }}
        >
          <defs>
            <linearGradient id="strandGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="2000" y2="2000">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.7)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.7)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.7)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="15" result="coloredBlur" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.133   
                        0 0 0 0 0.772  
                        0 0 0 0 0.369  
                        0 0 0 1 0"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated hair strands */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              stroke="url(#strandGradient)"
              strokeWidth={30 - (i * 1.5)}
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                d: [
                  `M 400,${800 + i * 40} Q ${1000 + mousePosition.x * 2},${1000 + mousePosition.y * 2} 1600,${1200 + i * 40}`,
                  `M 400,${800 + i * 40} Q ${1000 - mousePosition.x * 2},${1000 - mousePosition.y * 2} 1600,${1200 + i * 40}`,
                ],
                pathLength: 1,
                opacity: 1 - (i * 0.02),
              }}
              transition={{
                d: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                pathLength: {
                  duration: 2,
                  delay: i * 0.1,
                },
                opacity: {
                  duration: 1,
                  delay: i * 0.1,
                }
              }}
            />
          ))}

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={`particle-${i}`}
              r={4}
              fill="#fff"
              filter="url(#glow)"
              initial={{
                opacity: 0,
                x: 400,
                y: 800,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [400, 1600],
                y: [800 + (Math.random() * 400), 1200 + (Math.random() * 400)],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Additional glow effects */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[min(1800px,130vw)] h-[min(1000px,110vh)]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-primary-200/30 via-secondary-200/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
} 