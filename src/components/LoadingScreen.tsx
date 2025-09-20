import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCharacter, setShowCharacter] = useState(false);
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
        return prev + 1.5; // Smooth increment
      });
    }, 60);

    return () => clearInterval(progressTimer);
  }, []);

  // Show character after some progress
  useEffect(() => {
    if (progress > 20) {
      setShowCharacter(true);
    }
  }, [progress]);

  // Complete loading after progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1500); // Wait 1.5 seconds after reaching 100%
      return () => clearTimeout(completeTimer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.95,
        y: -50
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.3, 0],
              rotate: 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className={`absolute w-4 h-4 ${
              i % 3 === 0 ? 'bg-blue-200' : 
              i % 3 === 1 ? 'bg-indigo-200' : 'bg-purple-200'
            } ${
              i % 2 === 0 ? 'rounded-full' : 'rounded-sm'
            }`}
          />
        ))}

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg mx-auto px-6">
        
        {/* 3D Character Animation */}
        <div className="relative w-full h-64 mb-8 flex items-center justify-center">
          {showCharacter && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                rotate: [0, -2, 2, 0]
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8, type: "spring", stiffness: 100 },
                y: { duration: 0.8, type: "spring", stiffness: 100 },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              {/* Character Container */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Character Shadow */}
                <motion.div
                  animate={{
                    scaleX: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-0 w-32 h-8 bg-gray-300 rounded-full blur-sm"
                />

                {/* 3D Character SVG */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <svg width="180" height="180" viewBox="0 0 200 200" className="drop-shadow-2xl">
                    <defs>
                      {/* Gradients for 3D effect */}
                      <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                      <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                      <linearGradient id="pantsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#374151" />
                        <stop offset="100%" stopColor="#1F2937" />
                      </linearGradient>
                      <linearGradient id="briefcaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#92400E" />
                        <stop offset="100%" stopColor="#78350F" />
                      </linearGradient>
                    </defs>

                    {/* Character Body */}
                    {/* Head */}
                    <ellipse cx="100" cy="60" rx="25" ry="28" fill="url(#skinGradient)" stroke="#F59E0B" strokeWidth="1" />
                    
                    {/* Hair */}
                    <path d="M75 45 Q100 35 125 45 Q125 50 100 50 Q75 50 75 45" fill="#92400E" />
                    
                    {/* Eyes */}
                    <circle cx="90" cy="58" r="3" fill="#1F2937" />
                    <circle cx="110" cy="58" r="3" fill="#1F2937" />
                    <circle cx="91" cy="57" r="1" fill="white" />
                    <circle cx="111" cy="57" r="1" fill="white" />
                    
                    {/* Nose */}
                    <ellipse cx="100" cy="65" rx="2" ry="3" fill="#F59E0B" />
                    
                    {/* Mouth */}
                    <path d="M95 72 Q100 75 105 72" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Neck */}
                    <rect x="92" y="85" width="16" height="8" fill="url(#skinGradient)" />
                    
                    {/* Shirt */}
                    <ellipse cx="100" cy="120" rx="35" ry="25" fill="url(#shirtGradient)" stroke="#3B82F6" strokeWidth="1" />
                    
                    {/* Arms */}
                    <ellipse cx="70" cy="115" rx="12" ry="20" fill="url(#shirtGradient)" transform="rotate(-15 70 115)" />
                    <ellipse cx="130" cy="115" rx="12" ry="20" fill="url(#shirtGradient)" transform="rotate(15 130 115)" />
                    
                    {/* Hands */}
                    <circle cx="65" cy="130" r="8" fill="url(#skinGradient)" />
                    <circle cx="135" cy="130" r="8" fill="url(#skinGradient)" />
                    
                    {/* Pants */}
                    <ellipse cx="100" cy="160" rx="30" ry="20" fill="url(#pantsGradient)" />
                    
                    {/* Legs */}
                    <ellipse cx="85" cy="180" rx="10" ry="15" fill="url(#pantsGradient)" />
                    <ellipse cx="115" cy="180" rx="10" ry="15" fill="url(#pantsGradient)" />
                    
                    {/* Shoes */}
                    <ellipse cx="85" cy="195" rx="12" ry="6" fill="#1F2937" />
                    <ellipse cx="115" cy="195" rx="12" ry="6" fill="#1F2937" />
                  </svg>
                </motion.div>

                {/* Briefcase */}
                <motion.div
                  initial={{ x: 50, y: 20 }}
                  animate={{
                    x: [50, 45, 50],
                    y: [20, 15, 20],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute"
                >
                  <svg width="40" height="30" viewBox="0 0 40 30">
                    <rect x="5" y="8" width="30" height="20" rx="2" fill="url(#briefcaseGradient)" stroke="#78350F" strokeWidth="1" />
                    <rect x="7" y="10" width="26" height="2" fill="#92400E" />
                    <rect x="15" y="5" width="10" height="6" fill="#78350F" />
                    <circle cx="32" cy="18" r="2" fill="#FCD34D" />
                  </svg>
                </motion.div>

                {/* Floating Elements Around Character */}
                {progress > 40 && (
                  <>
                    {/* Code Symbols */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 360],
                        x: [-20, -30, -20],
                        y: [-10, -20, -10]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-8 left-8 text-2xl"
                    >
                      💻
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, -360],
                        x: [20, 30, 20],
                        y: [-15, -25, -15]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute top-12 right-8 text-xl"
                    >
                      ⚡
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180],
                        x: [0, -10, 0],
                        y: [30, 40, 30]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute bottom-8 left-12 text-lg"
                    >
                      🚀
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 font-mono tracking-wider">
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-blue-500 ml-1"
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
            <p className="text-xl md:text-2xl text-gray-600 font-medium tracking-wide">
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
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner border border-gray-300">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: 0.1,
                  ease: "linear"
                }}
                className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full relative shadow-sm"
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/30 via-indigo-400/30 to-purple-500/30 blur-sm" />
              </motion.div>
            </div>
            
            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-gray-700 font-bold text-lg bg-white/80 px-3 py-1 rounded-full shadow-md border border-gray-200"
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Progress Milestones */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-500 font-medium">
              <span className={progress >= 0 ? 'text-blue-600 font-semibold' : ''}>Start</span>
              <span className={progress >= 25 ? 'text-blue-600 font-semibold' : ''}>25%</span>
              <span className={progress >= 50 ? 'text-blue-600 font-semibold' : ''}>50%</span>
              <span className={progress >= 75 ? 'text-blue-600 font-semibold' : ''}>75%</span>
              <span className={progress >= 100 ? 'text-blue-600 font-semibold' : ''}>Ready!</span>
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
            className="text-gray-600 text-sm font-medium bg-white/60 px-4 py-2 rounded-full shadow-sm"
          >
            {progress < 25 && "🎯 Initializing portfolio..."}
            {progress >= 25 && progress < 50 && "💼 Loading professional experience..."}
            {progress >= 50 && progress < 75 && "⚡ Preparing skills showcase..."}
            {progress >= 75 && progress < 100 && "✨ Almost ready to impress..."}
            {progress >= 100 && "🎉 Welcome to my world!"}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-blue-100/50">
          <motion.path
            d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
            animate={{
              d: [
                "M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,40 900,80 1200,40 L1200,120 L0,120 Z",
                "M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}