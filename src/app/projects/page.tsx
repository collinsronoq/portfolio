import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/lib/projects";

const ProjectsPage = () => {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
            Projects
          </h1>
          <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            A collection of projects demonstrating full-stack delivery, backend
            design, and practical problem-solving. Each project includes a short
            case study and implementation notes.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsPage;
