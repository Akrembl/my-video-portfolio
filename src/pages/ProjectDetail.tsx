// src/pages/ProjectDetail.tsx
import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Project metadata
const projectMediaMap: Record<string, { title: string; description: string; media: string[] }> = {
  amazir: {
    title: "Amazir – Visual Content Series",
    description:
      "Produced a series of dynamic videos and photos showcasing Amazir’s vibrant atmosphere, modern decor, and the pizza chef’s skills. The content was crafted to connect with young adults by highlighting the restaurant’s energy, style, and unique vibe across multiple engaging visuals.",
    media: [
      "/media/portfolio/amazir/amazir-boomerang.mov",
      "/media/portfolio/amazir/amazir-bullet-zooms.mov",
      "/media/portfolio/amazir/amazir-make-enjoy.mp4",
      "/media/portfolio/amazir/amazir-op-full.mp4",
      "/media/portfolio/amazir/amazir-op-nou-r-2.mp4",
      "/media/portfolio/amazir/mur1.jpg",
      "/media/portfolio/amazir/mur2.jpg",
      "/media/portfolio/amazir/mur3.jpg",
      "/media/portfolio/amazir/ld-export-9bd137ca-07282025.jpg",
      "/media/portfolio/amazir/ld-export-b665cdd1-07282025.jpg",
      "/media/portfolio/amazir/ld-export-bd40fef6-07282025.jpg",
      "/media/portfolio/amazir/ld-export-bdc53526-07282025.jpg",
    ],
  },
  ayla: {
    title: "Ayla Brand – Clothing Campaign",
    description:
      "Produced a visual campaign showcasing Ayla Brand’s new collection and in-store experience. The project features three videos highlighting the clothing details, styling, and overall aesthetic of the brand, capturing a clean and modern fashion vibe to engage their audience.",
    media: [
      "/media/portfolio/ayla/ayla-outfit-3.mov",
      "/media/portfolio/ayla/ayla-outfit-9-black.mov",
      "/media/portfolio/ayla/ayla-store-final.mov",
      "/media/portfolio/ayla/dhaw-hal-final.mp4",
    ],
  },
  "another-vision": {
    title: "Another Vision Production – Selected Work",
    description:
      "A showcase of the recent projects I created while working with Another Vision Production. This section highlights a mix of commercial and creative pieces, reflecting my role in shooting, editing, and bringing each production to life as part of the team.",
    media: [
      "/media/portfolio/sounine/sounine-park-1.mov",
      "/media/portfolio/sounine/sounine-park-3.mov",
      "/media/portfolio/sounine/sounine-park-4.mov",
      "/media/portfolio/sounine/sounine-park-5.mov",
      "https://www.youtube.com/watch?v=retuQbW2f6Y",
      "/media/portfolio/sounine/pic1.jpg",
      "/media/portfolio/sounine/pic2.jpg",
      "/media/portfolio/sounine/pic3.jpg",
      "/media/portfolio/sounine/pic4.jpg",
    ],
  },
  "color-gradiant": {
    title: "Color Grading Showcase – DaVinci Resolve",
    description:
      "A multi-frame presentation demonstrating my color grading process across four different shots. Each frame includes the original S-Log image, a basic Rec.709 conversion, and the final graded version, along with a screenshot of the full node tree. This project highlights my workflow, technical approach, and ability to craft polished, cinematic looks.",
    media: [
      "/media/portfolio/color-gradiant/v-raptor-before.jpg",
      "/media/portfolio/color-gradiant/v-raptor-r709_1.1.1.t.jpg",
      "/media/portfolio/color-gradiant/v-raptor-after.jpg",
      "/media/portfolio/color-gradiant/v-raptor-node-tree.png",
      "/media/portfolio/color-gradiant/c-slog-before_1.1.3.jpg",
      "/media/portfolio/color-gradiant/c-slog-rec709_1.1.2.jpg",
      "/media/portfolio/color-gradiant/c-slog-after_1.1.1.jpg",
      "/media/portfolio/color-gradiant/c-slog-node-tree.png",
      "/media/portfolio/color-gradiant/b-slog-before.jpg",
      "/media/portfolio/color-gradiant/b-slog-rec709.jpg",
      "/media/portfolio/color-gradiant/b-slog-after_1.1.1.jpg",
      "/media/portfolio/color-gradiant/b-slog-node-tree.png",
      "/media/portfolio/color-gradiant/a-slog-before.jpg",
      "/media/portfolio/color-gradiant/a-slog-rec709.jpg",
      "/media/portfolio/color-gradiant/a-slog-after.jpg",
      "/media/portfolio/color-gradiant/a-slog-node-tree.png",
    ],
  },
  "personal-projects": {
    title: "Personal Projects – Creative Experiments",
    description:
      "A collection of self-initiated videos created for fun and exploration. These projects let me try new techniques, test ideas, and push my creativity without any brief or limitations.",
    media: [
      "/media/portfolio/personal-projects/dhaw-hal-final.mp4",
      "https://www.youtube.com/watch?v=HtTlBbgZNGk",
    ],
  },
};

// Extract stage labels
const getStageLabel = (filename: string) => {
  const lower = filename.toLowerCase();
  if (lower.includes("before")) return "Before";
  if (lower.includes("rec709") || lower.includes("r709")) return "Rec709";
  if (lower.includes("after")) return "After";
  if (lower.includes("node")) return "Node Tree";
  return "";
};

// Extract YouTube thumbnail
const getYouTubeThumbnail = (url: string) => {
  const match = url.match(/v=([^&]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : undefined;
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const proj = slug ? projectMediaMap[slug] : undefined;
  if (!proj) return <div className="p-8 text-center text-gray-500">Project not found</div>;

  const isColorGradiant = slug === "color-gradiant";

  const handleVideoClick = (i: number) => {
    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== i) v.pause();
    });
    const video = videoRefs.current[i];
    if (video) {
      video.paused ? video.play() : video.pause();
      video.muted = false;
    }
  };

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto relative font-sans text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-5 py-2 mb-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
      >
        ← Back
      </button>

      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        {proj.title}
      </h1>

      {/* Project Description */}
      <p className="text-white-700 mb-12 leading-relaxed text-lg md:text-xl">{proj.description}</p>

      {/* Media Grid */}
      <div
        className={`grid gap-6 ${
          isColorGradiant ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {proj.media.map((src, i) => {
          const isVideo = /\.(mp4|webm|mov)$/i.test(src);
          const isExternal = src.startsWith("http");
          const label = isColorGradiant ? getStageLabel(src) : "";

          // External Link (YouTube)
          if (isExternal) {
            const youtubeThumb = getYouTubeThumbnail(src);
            return (
              <a
                key={i}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src={youtubeThumb || "/fallback-thumbnail.jpg"}
                  alt="External Link"
                  className={`w-full rounded-xl ${isColorGradiant ? "h-56 object-cover" : "h-auto object-contain"}`}
                />
                {youtubeThumb && (
                  <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded shadow">
                    YouTube
                  </div>
                )}
              </a>
            );
          }

          // Image or Video
          return (
            <div
              key={i}
              className="relative w-full rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300"
              onClick={() =>
                isColorGradiant ? setExpandedIndex(i) : isVideo ? handleVideoClick(i) : null
              }
            >
              {isVideo ? (
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={src}
                  className={`rounded-xl ${isColorGradiant ? "w-full h-56 object-cover" : "w-full h-auto"}`}
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={src}
                  alt={`${proj.title}-${i}`}
                  className={`rounded-xl ${isColorGradiant ? "w-full h-56 object-cover" : "w-full h-auto object-contain"}`}
                />
              )}
              {label && (
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Popup Viewer for Color Gradiant */}
      {isColorGradiant && expandedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="absolute inset-0" onClick={() => setExpandedIndex(null)} />
          <div className="relative z-50 w-[85vw] h-[85vh] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl bg-black">
            {/\.(mp4|webm|mov)$/i.test(proj.media[expandedIndex]) ? (
              <video
                src={proj.media[expandedIndex]}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={proj.media[expandedIndex]}
                alt={`${proj.title}-${expandedIndex}`}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
