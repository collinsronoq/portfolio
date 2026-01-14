export function KeyPoints({ points }: { points: string[] }) {
  return (
    <div className="my-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Key points
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-400">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
