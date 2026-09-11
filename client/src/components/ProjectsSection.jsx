import { Sparkles, ArrowRight, Github, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectShowcase } from "@/components/ui/project-showcase";

const projects = [
  {
    name: "Dreamforce Services",
    quote: "Website for an International recruitment agency based in Ontario, Canada that specializes in recruiting filipino workers for various industries.",
    designation: "Web Development | WordPress",
    src: "/projects/project.png",
    link: "https://dreamforceservices.ca",
  },
  {
    name: "NauraCare",
    quote: "Hospital management platform with multi-role access, patient tracking, and billing systems. A comprehensive healthcare SaaS solution.",
    designation: "Healthcare SaaS - React/Node.js",
    src: "/projects/project1.png",
    link: "https://invoicify-production-36e5.up.railway.app",
  },
  {
    name: "Vante & Co.",
    quote: "Fashion marketplace with product recommendations and seamless checkout experience. Built with React, Node.js, and Stripe integration.",
    designation: "E-commerce - React/Stripe",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    link: "https://e-commerce-website-4w6a.vercel.app",
  },
  {
    name: "Converse Pro",
    quote: "Chat platform with real-time messaging, media sharing, and user authentication. Built with Socket.IO, MongoDB, React, and WebRTC.",
    designation: "Real-time Communication - Socket.IO",
    src: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    link: "https://converse-pro-frontend.vercel.app",
  },
  {
    name: "Blogni AI",
    quote: "AI-powered content generation platform with multi-language support. Uses Next.js, Gemini AI, Clerk Auth, and Redis for caching.",
    designation: "Artificial Intelligence - Next.js",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    link: "https://blogni.vercel.app",
  },
  {
    name: "Spendlix",
    quote: "Financial tracking platform with expense management and budgeting features. Built with React, Chart.js, Node.js, and Firebase.",
    designation: "FinTech - React/Chart.js",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    link: "https://spendlix.vercel.app/login",
  },
  {
    name: "Eattoo",
    quote: "Food delivery platform with restaurant listings and order management. Built with React, Redux, Mapbox, and Stripe.",
    designation: "Food Tech - React/Redux",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    link: "https://eattoo-food-delivery-website-frontend.onrender.com/",
  },
  {
    name: "JobQue",
    quote: "Job matching platform with candidate tracking and application management. Built with Next.js, PostgreSQL, Redis, and AI Integration.",
    designation: "HR Tech - Next.js",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    link: "#",
  },
];

function openInNewTab(link) {
  if (link && link !== "#") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}

export const ProjectsSection = () => {
  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            My Projects
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Project
            <span className="block text-primary">Portfolio</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of projects I've built to showcase my skills in full-stack development and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Project Showcase Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ProjectShowcase
            testimonials={projects}
            colors={{
              name: "hsl(var(--foreground))",
              position: "hsl(var(--muted-foreground))",
              testimony: "hsl(var(--muted-foreground))",
            }}
            fontSizes={{
              name: "2rem",
              position: "0.875rem",
              testimony: "1.125rem",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "0.5em",
              positionTop: "0",
              positionBottom: "0.25em",
              testimonyTop: "1em",
              testimonyBottom: "1em",
              lineHeight: "1.6",
              top: "8",
              bottom: "8",
            }}
            halomotButtonGradient="linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.8))"
            halomotButtonBackground="hsl(var(--background))"
            halomotButtonTextColor="hsl(var(--primary-foreground))"
            halomotButtonOuterBorderRadius="8px"
            halomotButtonInnerBorderRadius="6px"
            halomotButtonHoverTextColor="hsl(var(--background))"
            onItemClick={openInNewTab}
            outlineColor="hsl(var(--border))"
            hoverOutlineColor="hsl(var(--primary) / 0.3)"
            buttonInscriptions={{
              previousButton: "Previous",
              nextButton: "Next",
              openWebAppButton: "View Project",
            }}
          />
        </motion.div>

        {/* Simple CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-background border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Zap className="h-4 w-4" />
              Get In Touch
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">Like what you see?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Contact Me
                <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                href="https://github.com/sahilmd01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Github size={18} />
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};