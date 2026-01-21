import Link from "next/link";
import { Container } from "@/components/layout/Container";
import Image from "next/image";


const EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ronocollins254@gmail.com";
const CV_URL = process.env.NEXT_PUBLIC_CV_URL || "/cv/Collins-rono-cv.pdf";

export function Hero() {
  return (
    <section className="py-8 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="relative h-36 w-36 touch-auto overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                <Image
                  src="/images/IMG_20230302_173912.jpg"
                  alt="Collins Rono"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <p className="mt-4 text-sm font-mono font-medium  text-gray-900 dark:text-gray-100">
                Collins Rono
              </p>

              <p className="text-sm text-gray-600 mt-2 font-mono dark:text-gray-400">
                Full-Stack Developer
              </p>

              <div className="mt-4 w-full border-t border-gray-200 pt-4 text-sm font-mono font-black dark:border-gray-800">
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Next.js • React • TypeScript</li>
                  <li>FastAPI • Flask • SQLAlchemy</li>
                  <li>PostgreSQL • SQLite • MongoDb</li>
                  <li>APIs • Integrations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-medium font-mono text-sm md:text-base text-gray-500 dark:text-gray-500">
              Full-Stack Developer
            </p>

            <h1 className="mt-3 text-3xl font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              I build scalable systems and user-friendly apps for real-world
              workflows.
            </h1>

            <p className="mt-5 max-w-2xl text-base text-justify font-mono leading-relaxed text-gray-600 dark:text-gray-400">
              I design and build reliable web applications with modern backend
              APIs and clean, responsive frontends.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-xs md:text-sm font-medium font-mono text-white hover:bg-indigo-700"
              >
                View Projects
              </Link>

              <a
                href={CV_URL}
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-xs md:text-sm font-medium font-mono text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
              >
                Download CV
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="text-sm underline underline-offset-2 font-medium font-mono text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          

        </div>
      </Container>
    </section>
  );
}
