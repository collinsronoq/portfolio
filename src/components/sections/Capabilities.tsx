import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const capabilities = [
  {
    title: "Full-stack web applications",
    description:
      "Design and delivery of complete web products with clean UI, reliable backend services, and well-structured codebases.",
  },
  {
    title: "Backend APIs & databases",
    description:
      "FastAPI-based services with SQLAlchemy models, validation, auth patterns, and database-first thinking for reporting and consistency Simpler backend implemented with Flask framework",    
  },
  {
    title: "Integrations & automation",
    description:
      "Third-party API integration work including payment flows and callback handling, with logging and operational reliability in mind.",
  },
  {
    title: "AI/ML features & experimentation",
    description:
      "Applied ML projects and AI-assisted features such as embeddings, classification pipelines, and practical evaluation/iteration.",
  },
];

export function Capabilities() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            What I do
          </h2>
          <p className="mt-3 text-base font-mono leading-relaxed text-gray-600 dark:text-gray-400">
            I build systems that are practical, maintainable, and aligned to
            real workflows focusing on clarity, reliability, and clean delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-mono text-gray-600 dark:text-gray-400">
                {c.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
