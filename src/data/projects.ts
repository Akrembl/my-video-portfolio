// src/data/projects.ts
export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;   // optional, for videos
  alt?: string;
}

export type ProjectData = {
  slug: string;
  title: string;
  description: string;
  media: MediaItem[];
}

// Example projects
export const projects: Record<string, ProjectData> = {
  amazir: {
    slug: "amazir",
    title: "Amazir Project",
    description: "Description for Amazir project …",
    media: [
      { type: "image", src:"/media/amazir/DSCF0362.jpg", alt: "Amazir screenshot 1" },
      { type: "image", src: "/media/amazir/DSCF0363.jpg", alt: "Amazir screenshot 2" },
      { type: "image", src: "/media/amazir/DSCF0525.jpg", alt: "Amazir screenshot 3" },
      { type: "image", src: "/media/amazir2.jpg", alt: "Amazir screenshot 2" },
      { type: "video", src: "/media/amazir/AMAZIRboomerang.mov", poster: "/media/amazir-poster.jpg" },
    ]
  },

};
