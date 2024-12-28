import { motion } from 'framer-motion';

export default function TransformAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Main SVG Animation */}
        <svg
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-[min(1800px,130vw)] h-[min(1200px,110vh)]"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient id="morphGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.6)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feFlood floodColor="#22c55e" floodOpacity="0.5" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Morphing Shape */}
          <motion.path
            fill="url(#morphGradient)"
            filter="url(#glow)"
            initial={{
              d: "M 500,300 C 600,300 700,400 700,500 C 700,600 600,700 500,700 C 400,700 300,600 300,500 C 300,400 400,300 500,300"
            }}
            animate={{
              d: [
                "M 500,300 C 600,300 700,400 700,500 C 700,600 600,700 500,700 C 400,700 300,600 300,500 C 300,400 400,300 500,300",
                "M 500,200 C 700,200 800,400 800,500 C 800,600 700,800 500,800 C 300,800 200,600 200,500 C 200,400 300,200 500,200",
                "M 500,300 C 600,300 700,400 700,500 C 700,600 600,700 500,700 C 400,700 300,600 300,500 C 300,400 400,300 500,300"
              ],
              rotate: 360
            }}
            transition={{
              d: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              },
              rotate: {
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              transformOrigin: "center center"
            }}
          />
        </svg>
      </div>
    </div>
  );
} 