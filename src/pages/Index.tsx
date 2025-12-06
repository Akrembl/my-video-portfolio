// src/pages/Index.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';


const Index: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white text-black min-h-screen relative"
      >
        {/* Centered glass-style navbar header */}
        <header className="fixed inset-x-0 top-0 flex justify-center z-50">
          <div className="max-w-3xl w-full mx-auto px-4 py-3
                          bg-gray-100/90 backdrop-blur-md
                          border border-gray-200/50
                          rounded-2xl">
            <div className="flex items-center justify-between">
              <a href="/" className="text-lg font-semibold">
                Akrem Ben Lagha
              </a>
              <nav className="hidden md:flex space-x-6">
                <a href="#projects" className="hover:underline">Work</a>
                <a
                  href="#contact"
                  className="px-4 py-1 border border-black rounded
                             hover:bg-black hover:text-white transition"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Ensure main content starts below navbar */}
        <main className="pt-24 relative z-10">
          <HeroSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <footer className="py-12 px-4 border-t border-gray-200 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-gray-600">
            <p>© {new Date().getFullYear()} Akrem Ben Lagha. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
