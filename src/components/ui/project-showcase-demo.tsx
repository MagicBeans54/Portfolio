import { ProjectShowcase } from "@/components/ui/project-showcase";

function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

// Using high-quality Unsplash images for demo
const demoProjects = [
  {
    name: "GenAxis",
    quote: "AI saas webapp build with PERN stack and Integrated Gemini. OPEN SOURCE project featuring image generation, article writing, blog writing, and resume reviewer capabilities.",
    designation: "AI SaaS - PERN Stack",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    link: "https://genaxis.vercel.app",
  },
  {
    name: "NauraCare",
    quote: "Hospital management platform with multi-role access, patient tracking, and billing systems. A comprehensive healthcare SaaS solution.",
    designation: "Healthcare SaaS - React/Node.js",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    link: "https://nauracare.vercel.app",
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
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    link: "https://blogni.vercel.app",
  },
  {
    name: "Spendlix",
    quote: "Financial tracking platform with expense management and budgeting features. Built with React, Chart.js, Node.js, and Firebase.",
    designation: "FinTech - React/Chart.js",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    link: "https://spendlix.vercel.app/login",
  },
];

export function ProjectShowcaseDemo() {
  return (
    <div className="p-8 md:p-16 rounded-lg min-h-[500px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1536px", width: "100%" }}
      >
        <ProjectShowcase
          testimonials={demoProjects}
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
        />
      </div>
    </div>
  );
}

export default ProjectShowcaseDemo;