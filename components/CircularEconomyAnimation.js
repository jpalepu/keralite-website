import { motion } from 'framer-motion';

export default function CircularEconomyAnimation() {
  const radius = 150;
  const steps = [
    { label: "Collection", icon: "♻️" },
    { label: "Processing", icon: "⚡" },
    { label: "Innovation", icon: "💡" },
    { label: "Products", icon: "🎯" },
    { label: "Distribution", icon: "🔄" }
  ];

  return (
    <div className="relative w-[500px] h-[500px]">
      {/* Rotating circle */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Circle path */}
        <svg className="w-full h-full" viewBox="0 0 500 500">
          <circle
            cx="250"
            cy="250"
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

        {/* Steps around circle */}
        {steps.map((step, i) => {
          const angle = (i * 360) / steps.length;
          const x = 250 + radius * Math.cos((angle - 90) * (Math.PI / 180));
          const y = 250 + radius * Math.sin((angle - 90) * (Math.PI / 180));

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="absolute mt-3 text-base font-medium text-secondary-700 whitespace-nowrap left-1/2 -translate-x-1/2">
                {step.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
} 