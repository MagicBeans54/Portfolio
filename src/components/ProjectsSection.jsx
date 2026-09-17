import { Sparkles, ArrowRight, Github, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectShowcase } from "@/components/ui/project-showcase";

const projects = [
  {
    name: "Dreamforce Services",
    quote: "Website for an International recruitment agency based in Ontario, Canada that specializes in recruiting filipino workers for various industries.",
    designation: "Website | CMS | WordPress | Elementor",
    src: "/projects/project.png",
    link: "https://dreamforceservices.ca",
  },
  {
    name: "Invoicify",
    quote: "An invoice template generator that allows Techstacks clients to view and download their invoices and allows Techstacks to keep track of their cilents billing information ",
    designation: "Finance- React | InertiaJS | Laravel",
    src: "/projects/project1.png",
    link: "https://invoicify-production-36e5.up.railway.app",
  },
  {
    name: "LogiPay",
    quote: "A comprehensive HR/Admin Management System that keeps track of Techstacks employee's time, attendance, payroll and work requests.",
    designation: "HR/Admin Management System - React | InertiaJS | Laravel",
    src: "/projects/project2.png",
    link: "https://e-commerce-website-4w6a.vercel.app",
  },
  {
    name: "Frascio",
    quote: "Webpage showcasing modern technology used in luxury toilets. Built using React and Tailwind CSS.",
    designation: "E-commerce | React | Tailwind CSS",
    src: "/projects/project3.png",
    link: "https://frascio.vercel.app/",
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
            <motion.span 
              className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Project
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mt-2"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Portfolio
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of projects I've built to showcase my skills in web development and modern web technologies.
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