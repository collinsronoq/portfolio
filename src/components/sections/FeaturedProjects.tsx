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
            <h2 className=" font-mono text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
              Featured projects
            </h2>
            <p className=" font-mono mt-2  text-base text-justify leading-relaxed text-gray-600 dark:text-gray-400">
              A selection of projects that demonstrate end-to-end delivery,
              practical problem-solving, and clean implementation.
            </p>
          </div>
          {/* <Link
            href="/projects"
            className=" rounded-xl invisible  bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            View all
          </Link> */}
        </div>

        <div className=" font-mono mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-right text-sm font-medium text-white hover:bg-indigo-700"
          >
            View all projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
