'use client';

import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeProvider } from 'next-themes';
import { ThemeTogglerButton } from './animate-ui/components/buttons/theme-toggler';

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
  { name: "Blog", href: "https://blogni.vercel.app", icon: BookOpen },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section) as HTMLElement;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <>
        {/* Bottom Navbar */}
        <motion.div
          className={cn(
            "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto",
            "transition-transform duration-300 ease-in-out",
            showNavbar ? "translate-y-0" : "translate-y-full"
          )}
          style={{ willChange: "transform" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg p-2 border border-gray-200 dark:border-gray-700">
            <div className="flex space-x-1 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "p-2 rounded-full transition-colors flex flex-col items-center",
                    activeSection === item.href
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  )}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs mt-1 hidden md:block">{item.name}</span>
                </a>
              ))}
              <div className="flex items-center px-2">
                <ThemeTogglerButton 
                  variant="ghost" 
                  size="sm"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
};
