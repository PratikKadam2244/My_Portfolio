import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Pratik Kadam';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // 4 seconds total loading time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0.1 }}
            animate={{ x: '100vw', opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
            className="absolute h-px bg-white/20"
            style={{
              top: `${10 + i * 4}%`,
              width: '200px'
            }}
          />
        ))}
      </div>

      {/* Flying Rocket */}
      <motion.div
        initial={{ x: -200, y: 50, rotate: -15 }}
        animate={{ 
          x: ['-200px', '50vw', '120vw'],
          y: [50, -20, -100],
          rotate: [-15, 0, 15]
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.6, 1],
          ease: "easeInOut"
        }}
        className="absolute top-1/3 z-20"
      >
        {/* Rocket SVG */}
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-lg">
              {/* Rocket Body */}
              <ellipse cx="50" cy="45" rx="15" ry="25" fill="#7FB3D3" />
              
              {/* Rocket Nose */}
              <path d="M35 25 L50 10 L65 25 Z" fill="#5A9BD4" />
              
              {/* Rocket Window */}
              <circle cx="50" cy="35" r="6" fill="#2C5282" stroke="#1A365D" strokeWidth="1" />
              
              {/* Rocket Fins */}
              <path d="M35 60 L30 75 L35 70 Z" fill="#4A90B8" />
              <path d="M65 60 L70 75 L65 70 Z" fill="#4A90B8" />
              
              {/* Rocket Flame */}
              <motion.path
                d="M42 70 L50 85 L58 70 Z"
                fill="#FF8C00"
                animate={{
                  scaleY: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M45 70 L50 80 L55 70 Z"
                fill="#FFD700"
                animate={{
                  scaleY: [1, 1.2, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
          
          {/* Rocket Trail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-8 top-1/2 transform -translate-y-1/2"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  right: i * 8,
                  top: Math.random() * 10 - 5
                }}
                animate={{
                  opacity: [1, 0],
                  scale: [1, 0.5]
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center mt-20">
        {/* Typewriter Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-mono">
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-yellow-400"
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-blue-200 font-medium">
            Loading your expertise
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ...
            </motion.span>
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mx-auto max-w-md"
        >
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 3.5, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full relative"
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
            
            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="absolute -top-8 right-0 text-white/80 text-sm font-medium"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                100%
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: '⚡', delay: 1, x: '20%', y: '30%' },
            { icon: '🚀', delay: 1.5, x: '80%', y: '40%' },
            { icon: '💻', delay: 2, x: '15%', y: '70%' },
            { icon: '⚙️', delay: 2.5, x: '85%', y: '20%' },
            { icon: '🎯', delay: 3, x: '70%', y: '80%' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 2,
                delay: item.delay,
                ease: "easeInOut"
              }}
              className="absolute text-2xl"
              style={{
                left: item.x,
                top: item.y
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent" />
    </motion.div>
  );
}