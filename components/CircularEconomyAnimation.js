import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CircularEconomyAnimation() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fixed container size and center point
  const containerSize = 500;
  const center = containerSize / 2;
  
  // Calculate radius based on screen size
  const getRadius = () => {
    if (screenWidth < 380) return 110;
    if (screenWidth < 500) return 130;
    return 150;
  };

  const radius = getRadius();
  
  // Adjust icon size based on screen size
  const getIconSize = () => {
    if (screenWidth < 380) return 'w-8 h-8 text-base';
    if (screenWidth < 500) return 'w-10 h-10 text-lg';
    return 'w-16 h-16 text-2xl';
  };

  const steps = [
    { label: "Collection", icon: "♻️" },
    { label: "Processing", icon: "⚡" },
    { label: "Innovation", icon: "💡" },
    { label: "Products", icon: "🎯" },
    { label: "Distribution", icon: "🔄" }
  ];

  return (
    <div className="relative w-full aspect-square">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* SVG Circle */}
        <svg 
          className="w-full h-full" 
          viewBox={`0 0 ${containerSize} ${containerSize}`} 
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icons */}
        <div className="absolute inset-0">
          {steps.map((step, i) => {
            const angle = (i * 360) / steps.length;
            const radian = (angle - 90) * (Math.PI / 180);
            
            // Calculate position relative to the circle
            const x = center + radius * Math.cos(radian);
            const y = center + radius * Math.sin(radian);

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(x / containerSize) * 100}%`,
                  top: `${(y / containerSize) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                  width: screenWidth < 380 ? '32px' : screenWidth < 500 ? '40px' : '64px',
                  height: screenWidth < 380 ? '32px' : screenWidth < 500 ? '40px' : '64px',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`${getIconSize()} rounded-full bg-white shadow-lg flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div className={`
                  absolute 
                  mt-1 md:mt-2
                  text-xs md:text-sm
                  font-medium 
                  text-secondary-700 
                  whitespace-nowrap 
                  left-1/2 
                  -translate-x-1/2
                  ${screenWidth < 380 ? 'text-[10px] max-w-[50px]' : ''}
                  ${screenWidth < 500 ? 'text-xs max-w-[70px]' : ''}
                `}>
                  {step.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
} 