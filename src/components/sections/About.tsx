import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
              About
            </h2>
            <p className="mt-3 text-base text-justify leading-relaxed font-mono text-gray-600 dark:text-gray-400">
              I am a Full-Stack Developer focused on building practical systems
              for real workflows, clean UI, reliable backend services, and
              maintainable code.
            </p>

            <div className="mt-6 flex flex-wrap justify-around">
              <Link
                href="/projects"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-xs md:text-sm font-medium font-mono text-white hover:bg-indigo-700"
              >
                View case studies
              </Link>

              <Link
                href="/resume"
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-xs md:text-sm font-medium font-mono text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
              >
                Resume
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <Card>
              <h3 className="text-lg font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100">
                How I work
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                <li className="text-justify">
                  <span className="font-medium font-mono text-gray-900 dark:text-gray-100">
                    Product thinking:
                  </span>{" "}
                  define the workflow first, then implement features that reduce friction.
                </li>
                <li className="text-justify">
                  <span className="font-medium font-mono text-gray-900 dark:text-gray-100">
                    Strong foundations:
                  </span>{" "}
                  data models, validation, and modular architecture that scales with the project.
                </li>
                <li className="text-justify">
                  <span className="font-medium font-mono text-gray-900 dark:text-gray-100">
                    Delivery quality:
                  </span>{" "}
                  readable code, predictable behavior, and clean UI details that reflect professionalism.
                </li>
                <li className="text-justify">
                  <span className="font-medium font-mono text-gray-900 dark:text-gray-100">
                    Iteration:
                  </span>{" "}
                  ship an MVP quickly, then improve based on feedback and real usage.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
