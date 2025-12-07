// src/components/ProjectsSection.tsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

// Encode URLs safely for deployment
const safeSrc = (src: string) => encodeURI(src);

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      slug: "amazir",
      title: "Amazir – Visual Content Series",
      description: "branding and promotional content for Amazir restaurant",
      thumbnailUrl: "/media/Portfolio/amazir/AMAZIR boomerang.mov",
    },
    {
      slug: "ayla",
      title: "Ayla Brand – Clothing Campaign",
      description: "Clothing compaign for Ayla",
      thumbnailUrl: "/media/Portfolio/ayla/ayla store final.mov",
    },
    {
      slug: "another-vision",
      title: "Another Vision Production – Selected Work",
      description: "production work done at Another Vision Production",
      thumbnailUrl: "/media/Portfolio/sounine/sounine park 1.mov",
    },
    {
      slug: "color-gradiant",
      title: "Color Grading Showcase – DaVinci Resolve",
      description: "several color grading examples",
      thumbnailUrl: "/media/Portfolio/color-gradiant/A slog after.jpg",
    },
    {
      slug: "personal-projects",
      title: "Personal Projects – Creative Experiments",
      description: "A collection of self-initiated videos and edits",
      thumbnailUrl: "/media/Portfolio/personal-projects/dhaw hal final.mp4",
    },
    // add more projects ...
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Latest Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVideo = /\.(mp4|mov|webm)$/i.test(project.thumbnailUrl);
            const videoRef = useRef<HTMLVideoElement>(null);

            return (
              <motion.div
                key={project.slug}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-xl relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {isVideo ? (
                    <video
                      ref={videoRef}
                      src={safeSrc(project.thumbnailUrl)}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      onMouseEnter={() => videoRef.current?.play()}
                      onMouseLeave={() => videoRef.current?.pause()}
                    />
                  ) : (
                    <img
                      src={safeSrc(project.thumbnailUrl)}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-white hover:underline">
                      View Project
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
