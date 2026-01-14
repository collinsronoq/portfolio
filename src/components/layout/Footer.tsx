import { Container } from "./Container";

const EMAIL = "ronocollins254@gmail.com"; 

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <Container>
        <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Collins Rono. All rights reserved.
          </p>

          <a
            href={EMAIL}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Email me
          </a>
        </div>
      </Container>
    </footer>
  );
}
