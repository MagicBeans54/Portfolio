import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Component } from "@/components/ui/honeycomb-loader";
import WireframeForms from "@/components/ui/wireframe-forms";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [phase, setPhase] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const welcomeMessages = [
    "Crafting digital experiences",
    "Web Development",
    "Innovating for the future"
  ];

  useEffect(() => {
    const phase1 = setTimeout(() => setPhase(1), 800);
    const phase2 = setTimeout(() => setPhase(2), 1600);
    const complete = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 4000);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(complete);
    };
  }, [onWelcomeComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Welcome Screen */}
      <motion.div
        className="h-full w-full flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate={exitAnimation ? "exit" : "visible"}
      >
        {/* Animated background elements - scaled down for mobile */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <WireframeForms
            variant="cube"
            mode="dark"
            speed={1}
            size={2}
            length={1.5}
            density={1}
            opacity={0.6}
            hue={45}
            saturation={1}
            brightness={1}
            className="w-full h-full"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>

        <div className="w-full max-w-2xl mx-auto text-center px-4">
          <motion.div className="space-y-4 md:space-y-8">
            {phase >= 0 && (
              <motion.div variants={contentVariants}>
                <motion.div 
                  className="text-sm md:text-lg lg:text-xl font-mono mb-2 md:mb-4 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border bg-yellow-400/10 border-yellow-400/20 text-yellow-400"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  {welcomeMessages[phase % welcomeMessages.length]}
                </motion.div>
              </motion.div>
            )}

            {phase >= 1 && (
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-white"
                variants={contentVariants}
              >
                <span className="inline-block">Hello</span>
                <motion.span 
                  className="inline-block ml-2 sm:ml-3 relative bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                  variants={contentVariants}
                >
                  There !
                  <motion.span 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                    variants={underlineVariants}
                  />
                </motion.span>
              </motion.h1>
            )}

            {phase >= 2 && (
              <motion.div 
                className="pt-4 sm:pt-6 md:pt-8"
                variants={contentVariants}
              >
                <Component />
                <motion.p 
                  className="mt-4 sm:mt-6 text-xs sm:text-sm opacity-70 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Loading my best work for you...
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;