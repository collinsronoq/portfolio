import Link from "next/link";
import { Container } from "./Container";

const GITHUB_URL = "https://github.com/PLACEHOLDER";
const LINKEDIN_URL = "https://www.linkedin.com/in/PLACEHOLDER";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Collins Rono
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/projects"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Resume
            </Link>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
