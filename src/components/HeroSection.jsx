import { MousePointerClick, Code, Briefcase, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfiniteSpiral from "@/components/ui/InfiniteSpiral";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5" ref={ref}>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
        
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        
        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-center gap-12" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }}>
          
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm pointer-events-auto" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Briefcase className="h-4 w-4" /> Currently Accepting new Opportunities
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">I'm Vincent Cruz</span>
              <motion.span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>
                Web Developer
              </motion.span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I build <span className="text-primary font-semibold">high-performance web applications</span> that drive business growth. Specializing in React, Laravel, Inertia, and scalable architecture for startups and enterprises.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pointer-events-auto" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Code className="h-5 w-5" />
                <span>View Case Studies</span>
              </motion.a>

              <motion.a href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Mail className="h-4 w-4" />
                <span>Technical Interview</span>
              </motion.a>
            </motion.div>

            <motion.div className="mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <div className="text-sm text-muted-foreground">
                🚀 <span className="text-primary font-semibold">Available Immediately</span> for Backend and Frontend Roles
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="hidden lg:flex flex-1 justify-center items-center"
            variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } } }}
          >
            <div style={{ height: '600px', position: 'relative', overflow: 'hidden', width: '100%' }}>
              <InfiniteSpiral
                items={[
                  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop', alt: 'Code on screen' },
                  { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop', alt: 'Programming' },
                  { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop', alt: 'Web development' },
                  { src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=400&fit=crop', alt: 'JavaScript code' },
                  { src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=400&fit=crop', alt: 'React development' },
                  { src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&h=400&fit=crop', alt: 'Software engineering' },
                  { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop', alt: 'Cybersecurity' },
                  { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop', alt: 'Data analysis' }
                ]}
                animationMode="all"
                speed={0.55}
                radius={170}
                cardWidth={120}
                cardHeight={120}
                verticalSpacing={60}
                perspective={1000}
                cardRadius={12}
                centerScale={1.2}
                edgeBlur={6}
                cardsPerTurn={7}
                pauseOnHover
              />
            </div>
          </motion.div>

        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg" whileHover={{ scale: 1.05 }}>
          <MousePointerClick className="h-3 w-3" />
          <span>Explore Technical Portfolio</span>
        </motion.div>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};