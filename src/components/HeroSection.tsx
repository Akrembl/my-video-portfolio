import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Encode URLs safely for deployment
  const safeSrc = (src: string) => encodeURI(src);

  // Auto play / pause when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <motion.div
          className="z-10 text-left gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold italic leading-tight">
            Hi, I'm Akrem Ben Lagha —
            <br />
            a video editor with innovative vision.
          </h1>

          {/* View Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="cta-button-premium inline-flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* FLOATING CONTACT BUTTON */}
          <motion.a
            href="#contact"
            className="
              inline-flex items-center gap-2 
              px-3 py-2 rounded-full
              shadow-lg border border-black bg-white font-semibold
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1
            "
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.a>

        </motion.div>

        {/* RIGHT SIDE VIDEO */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <video
            ref={videoRef}
            src={safeSrc("/media/Portfolio/motion-final.mov")}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
            loop
            muted
            playsInline
            controls
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
