type Props = {
  github?: string;
  live?: string;
  docs?: string;
};

export function ProjectLinks({ github, live, docs }: Props) {
  return (
    <div className="my-6 flex flex-wrap gap-3">
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
        >
          GitHub
        </a>
      ) : null}
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Live Demo
        </a>
      ) : null}
      {docs ? (
        <a
          href={docs}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
        >
          Documentation
        </a>
      ) : null}
    </div>
  );
}
