import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const skillGroups: Array<{
  title: string;
  items: string[];
}> = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "SQLAlchemy", "Flask", "REST APIs", "Authentication", "Validation"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQLite", "MongoDB (PyMongo)", "Schema design"],
  },
  {
    title: "Integrations",
    items: ["Daraja API"]
  },
  {
    title: "Dev & Tooling",
    items: ["Git/GitHub", "Logging & debugging", "Deployment basics", "Docker"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Librosa", "CNN pipelines", "Embeddings (Ollama/OpenAI)"],
  },
];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium font-mono text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200">
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Skills
          </h2>
          <p className="mt-3 text-base leading-relaxed font-mono text-gray-600 dark:text-gray-400">
            A practical toolkit built through hands-on projects and iterative delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-sm font-semibold font-mono uppercase tracking-wide text-gray-900 dark:text-gray-100">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
