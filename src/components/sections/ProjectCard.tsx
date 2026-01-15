import Link from "next/link";
import { Project } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {project.tagline}
          </p>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-indigo-700 no-wrap"
        >
          Case Study
        </Link>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-around gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
        >
          GitHub
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </Card>
  );
}
