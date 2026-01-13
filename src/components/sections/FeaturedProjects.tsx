import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
              Featured projects
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
              A selection of projects that demonstrate end-to-end delivery,
              practical problem-solving, and clean implementation.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 md:inline"
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View all projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
