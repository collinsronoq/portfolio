import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const PROJECTS_DIR = path.join(process.cwd(), "src", "content", "projects");

export type MdxFrontmatter = {
  title?: string;
  tagline?: string;
  summary?: string;
  role?: string;
  period?: string;
};

export async function getProjectMdxBySlug(slug: string) {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

  const mdx = await compileMDX<MdxFrontmatter>({
    source: content,
    options: { parseFrontmatter: false },
    // We'll add custom components later (callouts, code blocks, etc.)
    components: {},
  });

  return {
    frontmatter: data as MdxFrontmatter,
    content: mdx.content,
  };
}
