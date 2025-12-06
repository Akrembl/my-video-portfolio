// src/components/ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  slug: string;
  title: string;
  imageUrl: string;
};

const ProjectCard: React.FC<Props> = ({ slug, title, imageUrl }) => {
  return (
    <Link to={`/projects/${slug}`} className="group block overflow-hidden rounded-xl relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
