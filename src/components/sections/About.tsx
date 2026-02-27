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
            {/* <p className="mt-3 text-sm text-justify leading-relaxed font-mono text-gray-600 dark:text-gray-400">
              I am a Full-Stack Developer focused on building practical systems
              for real workflows, clean UI, reliable backend services, and
              maintainable code.
            </p> */}
            <p className="mt-3 text-sm text-justify leading-relaxed font-mono text-gray-600 dark:text-gray-400">
              I am a Full-Stack Developer with a strong inclination toward backend-driven
              systems and structured workflows. My exposure to enterprise-style
              environments and transaction-based applications has shaped how I approach
              software systems should reflect real operational processes, not just user
              interface interactions.
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

          <div className="md:col-span-7 pt-4 md:pt-0">
            <Card>
              <h3 className="text-xl font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100">
                How I work
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                <li className="text-justify font-mono">
                  <span className="font-black text-base text-gray-900 dark:text-gray-100">
                    Systems thinking:
                  </span>{" "}
                  <span className="text-sm">
                    approach features as part of a larger workflow, ensuring data consistency,
                    clear state transitions, and predictable behavior across the application.
                  </span>
                  
                </li>

                <li className="text-justify font-mono">
                  <span className="font-black text-base text-gray-900 dark:text-gray-100">
                    Architectural discipline:
                  </span>{" "}
                  <span className="text-sm">
                    emphasize separation of concerns, structured service layers, and
                    maintainable abstractions that scale as requirements evolve.
                  </span>
                </li>

                <li className="text-justify font-mono">
                  <span className="font-black text-base text-gray-900 dark:text-gray-100">
                    Reliability first:
                  </span>{" "}
                  <span className="text-sm">
                    prioritize validation, error handling, and data integrity over rapid but
                    fragile implementations.
                  </span>
                </li>

                <li className="text-justify font-mono">
                  <span className="font-black text-base text-gray-900 dark:text-gray-100">
                    Continuous refinement:
                  </span>{" "}
                  <span className="text-sm">
                    ship focused solutions, observe real usage, and iteratively improve both
                    performance and developer experience.
                  </span>
                  
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
