import { Container } from "@/components/layout/Container";

const CV_URL = "/cv/Collins-Rono-CV.pdf";

export default function ResumePage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
            Resume
          </h1>
          <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Download my resume or view it directly below.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CV_URL}
              download
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Download PDF
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
            >
              Open in new tab
            </a>
          </div>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-5 py-3 dark:border-gray-800">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Resume Preview
            </p>
          </div>

          {/* PDF preview */}
          <div className="h-[75vh]">
            <iframe
              src={CV_URL}
              className="h-full w-full"
              title="Collins Rono Resume"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          If the preview does not load in your browser, use the download button
          above.
        </p>
      </Container>
    </section>
  );
}
