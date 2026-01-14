import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Capabilities />
      <Skills /> 
      
      <Contact />
    </>
  );
}
