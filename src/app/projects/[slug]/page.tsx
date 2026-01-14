import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { projects } from "@/lib/projects";
import { getProjectMdxBySlug } from "@/lib/mdx";


type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found | Collins Rono",
    };
  }

  return {
    title: `${project.title} | Collins Rono`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const mdx = await getProjectMdxBySlug(slug);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ← Back to Projects
          </Link>
        </div>

        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
            >
              GitHub Repository
            </a>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-12">
          {/* Main content */}
          <div className="md:col-span-8">
						<div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
							{mdx ? (
								<article className="prose prose-gray max-w-none dark:prose-invert">
									{mdx.content}
								</article>
                
							) : (
								<div>
									<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
										Case study not added yet
									</h2>
									<p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
										Create <code className="font-mono">src/content/projects/{slug}.mdx</code>{" "}
										to add the case study content.
									</p>
								</div>
							)}
						</div>
					</div>


          {/* Sidebar */}
          <aside className="md:col-span-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
                Tech Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
                  Role
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  (Placeholder) End-to-end development: planning, backend, frontend,
                  database, integration, deployment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
