import { motion } from 'framer-motion';

export default function DNAAnimation() {
  const strands = Array.from({ length: 20 });
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        <svg
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-[min(2000px,140vw)] h-[min(1800px,160vh)]"
          viewBox="0 0 1200 800"
          style={{ transform: 'translate(-50%, -65%) rotate(-45deg)' }}
        >
          <defs>
            <linearGradient id="strandGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.8)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.8)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feFlood floodColor="#22c55e" floodOpacity="0.5" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Static DNA Structure */}
          <motion.g
            animate={{
              y: [0, 8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {Array.from({ length: 35 }).map((_, i) => (
              <g key={i}>
                {/* Helix curves */}
                <motion.path
                  d={`M ${500 + Math.sin(i * 0.5) * 80} ${100 + i * 20} 
                      Q ${600} ${100 + i * 20 + 8} 
                      ${700 + Math.sin((i * 0.5) + Math.PI) * 80} ${100 + i * 20}`}
                  stroke="url(#strandGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />

                {/* Connection nodes */}
                <motion.circle
                  cx={500 + Math.sin(i * 0.5) * 80}
                  cy={100 + i * 20}
                  r="3"
                  fill="url(#strandGradient)"
                  filter="url(#glow)"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.circle
                  cx={700 + Math.sin((i * 0.5) + Math.PI) * 80}
                  cy={100 + i * 20}
                  r="3"
                  fill="url(#strandGradient)"
                  filter="url(#glow)"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              </g>
            ))}
          </motion.g>
        </svg>
      </div>
    </div>
  );
} 