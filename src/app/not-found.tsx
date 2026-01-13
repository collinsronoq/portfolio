import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Page not found
        </h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link
            href="/projects"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Back to Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
