import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'pratik kadam';

  // Typewriter effect for name
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Progress animation
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2; // Increment by 2% every 80ms for smooth animation
      });
    }, 80);

    return () => clearInterval(progressTimer);
  }, []);

  // Complete loading after progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000); // Wait 1 second after reaching 100%
      return () => clearTimeout(completeTimer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
          />
        ))}

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute h-px bg-white"
              style={{
                top: `${12.5 * (i + 1)}%`,
                left: 0,
                right: 0,
                transformOrigin: 'left'
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="absolute w-px bg-white"
              style={{
                left: `${16.66 * (i + 1)}%`,
                top: 0,
                bottom: 0,
                transformOrigin: 'top'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md mx-auto px-6">
        
        {/* Flying Rocket Animation */}
        <div className="relative w-full h-32 mb-8">
          <motion.div
            initial={{ x: '-120px', y: 20 }}
            animate={{ 
              x: `${(progress / 100) * (window.innerWidth - 100)}px`,
              y: [20, 0, 10, -5, 5, 0],
              rotate: [0, -5, 5, -3, 2, 0]
            }}
            transition={{
              x: { duration: 0.1, ease: "linear" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 transform -translate-y-1/2"
          >
            {/* Rocket SVG */}
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="100" height="100" viewBox="0 0 120 120" className="drop-shadow-2xl">
                  {/* Rocket Body Gradient */}
                  <defs>
                    <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCD34D" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                  </defs>
                  
                  {/* Rocket Body */}
                  <ellipse cx="60" cy="50" rx="18" ry="30" fill="url(#rocketGradient)" stroke="#1E40AF" strokeWidth="2" />
                  
                  {/* Rocket Nose */}
                  <path d="M42 25 L60 8 L78 25 Z" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1" />
                  
                  {/* Rocket Window */}
                  <circle cx="60" cy="40" r="8" fill="#0EA5E9" stroke="#0284C7" strokeWidth="2" />
                  <circle cx="60" cy="40" r="5" fill="#38BDF8" opacity="0.8" />
                  
                  {/* Rocket Fins */}
                  <path d="M42 70 L35 85 L42 80 Z" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1" />
                  <path d="M78 70 L85 85 L78 80 Z" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1" />
                  
                  {/* Rocket Details */}
                  <rect x="52" y="55" width="16" height="3" rx="1" fill="#1E3A8A" />
                  <rect x="52" y="60" width="16" height="3" rx="1" fill="#1E3A8A" />
                  
                  {/* Animated Flame */}
                  <motion.g
                    animate={{
                      scaleY: [1, 1.4, 1.2, 1.6, 1],
                      opacity: [0.8, 1, 0.9, 1, 0.8]
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path d="M48 80 L60 100 L72 80 Z" fill="url(#flameGradient)" opacity="0.9" />
                    <path d="M52 80 L60 95 L68 80 Z" fill="#FCD34D" opacity="0.8" />
                    <path d="M55 80 L60 88 L65 80 Z" fill="#FBBF24" opacity="0.9" />
                  </motion.g>
                </svg>
              </motion.div>
              
              {/* Rocket Trail Particles */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
                    style={{
                      left: -i * 6,
                      top: (Math.random() - 0.5) * 20
                    }}
                    animate={{
                      opacity: [1, 0.5, 0],
                      scale: [1, 0.8, 0.3],
                      x: [-10, -20, -30]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>

              {/* Speed Lines */}
              {progress > 20 && (
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-0.5 bg-white/60 rounded-full"
                      style={{
                        width: `${20 + i * 5}px`,
                        top: (i - 2) * 8,
                        left: -i * 8
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0, 1, 0]
                      }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Stars that appear as rocket passes */}
          {progress > 30 && (
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute text-yellow-300 text-xl"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 3) * 20}%`
                  }}
                >
                  ⭐
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="text-center mb-12">
          {/* Name with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-mono tracking-wider">
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-yellow-300 ml-1"
              >
                |
              </motion.span>
            </h1>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
              loading your expertise
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="ml-1"
              >
                ...
              </motion.span>
            </p>
          </motion.div>
        </div>

        {/* Enhanced Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="w-full max-w-sm"
        >
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="h-4 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/30 shadow-lg">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: 0.1,
                  ease: "linear"
                }}
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full relative shadow-inner"
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
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 via-orange-400/50 to-red-400/50 blur-sm" />
              </motion.div>
            </div>
            
            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Progress Milestones */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-white/70 font-medium">
              <span className={progress >= 0 ? 'text-yellow-300' : ''}>Start</span>
              <span className={progress >= 25 ? 'text-yellow-300' : ''}>25%</span>
              <span className={progress >= 50 ? 'text-yellow-300' : ''}>50%</span>
              <span className={progress >= 75 ? 'text-yellow-300' : ''}>75%</span>
              <span className={progress >= 100 ? 'text-yellow-300' : ''}>Ready!</span>
            </div>
          </div>
        </motion.div>

        {/* Fun Loading Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.p
            key={Math.floor(progress / 25)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-white/80 text-sm font-medium"
          >
            {progress < 25 && "🚀 Initializing systems..."}
            {progress >= 25 && progress < 50 && "⚡ Loading expertise..."}
            {progress >= 50 && progress < 75 && "🎯 Preparing portfolio..."}
            {progress >= 75 && progress < 100 && "✨ Almost ready..."}
            {progress >= 100 && "🎉 Welcome aboard!"}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white/10">
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            animate={{
              d: [
                "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,40 900,100 1200,40 L1200,120 L0,120 Z",
                "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}