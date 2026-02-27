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

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/collinsronoq";

const CONSTRUCTHUB_LIVE_URL =
  process.env.NEXT_PUBLIC_CONSTRUCTHUB_LIVE_URL || "https://github.com/collinsronoq";

const COURT_MANAGEMENT_SYSTEM_LIVE_URL =
  process.env.NEXT_PUBLIC_COURT_MANAGEMENT_SYSTEM_LIVE_URL || "https://github.com/collinsronoq";

const MUSIC_GENRE_CLASSIFICATION_LIVE_URL =
  process.env.NEXT_PUBLIC_MUSIC_GENRE_CLASSIFICATION_LIVE_URL || "https://github.com/collinsronoq";

export const projects: Project[] = [
  {
    slug: "constructhub",
    title: "ConstructHub",
    tagline: "Construction planning and cost estimation platform",
    description:
      "A web-based platform designed to streamline construction planning in Kenya through cost estimation, technician discovery, and material sourcing support.",
    stack: ["FastAPI", "SQLAlchemy", "React", "TypeScript", "PostgreSQL"],
    featured: true,
    githubUrl: GITHUB_URL,
    liveUrl: CONSTRUCTHUB_LIVE_URL,
  },
  {
    slug: "shirika",
    title: "Shirika Court Management System",
    tagline: "Contributions and expenditure tracking system",
    description:
      "A system for tracking estate contributions, balances, and expenditures with structured records and reporting workflows.",
    stack: ["TypeScript", "FastAPI", "SQLAlchemy", "Tailwind", "PostgreSQL", "Daraja API"],
    featured: true,
    githubUrl: GITHUB_URL,
    liveUrl: COURT_MANAGEMENT_SYSTEM_LIVE_URL,
  },
  {
    slug: "music-genre-classifier",
    title: "Music Genre Classifier",
    tagline: "CNN-based audio genre classification",
    description:
      "A machine learning project that classifies music genres using spectrograms and a CNN pipeline, with experimentation around augmentation and model depth.",
    stack: ["Python", "TensorFlow", "Librosa", "Streamlit"],
    featured: true,
    githubUrl: GITHUB_URL,
    liveUrl: MUSIC_GENRE_CLASSIFICATION_LIVE_URL,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
