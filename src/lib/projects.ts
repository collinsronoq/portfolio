export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  featured: boolean;
  githubUrl: string;   // placeholder
  liveUrl?: string;    // placeholder
};

export const projects: Project[] = [
  {
    slug: "constructhub",
    title: "ConstructHub",
    tagline: "Construction planning and cost estimation platform",
    description:
      "A web-based platform designed to streamline construction planning in Kenya through cost estimation, technician discovery, and material sourcing support.",
    stack: ["FastAPI", "SQLAlchemy", "React", "TypeScript", "PostgreSQL"],
    featured: true,
    githubUrl: "https://github.com/PLACEHOLDER/constructhub",
    liveUrl: "https://PLACEHOLDER.com",
  },
  {
    slug: "shirika",
    title: "Shirika Court Management System",
    tagline: "Contributions and expenditure tracking system",
    description:
      "A system for tracking estate contributions, balances, and expenditures with structured records and reporting workflows.",
    stack: ["FastAPI", "SQLAlchemy", "Tailwind", "PostgreSQL"],
    featured: true,
    githubUrl: "https://github.com/PLACEHOLDER/shirika",
    liveUrl: "https://PLACEHOLDER.com",
  },
  {
    slug: "music-genre-classifier",
    title: "Music Genre Classifier",
    tagline: "CNN-based audio genre classification",
    description:
      "A machine learning project that classifies music genres using spectrograms and a CNN pipeline, with experimentation around augmentation and model depth.",
    stack: ["Python", "TensorFlow", "Librosa", "Streamlit"],
    featured: true,
    githubUrl: "https://github.com/PLACEHOLDER/music-genre-classifier",
    liveUrl: "https://PLACEHOLDER.com",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
