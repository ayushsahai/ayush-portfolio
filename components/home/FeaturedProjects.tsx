import Container from "../ui/Container";
import FeaturedProject from "./FeaturedProject";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-36 bg-gray-50">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            FEATURED WORK
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Selected Case Studies
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            A selection of projects demonstrating my approach to solving
            complex product, enterprise, and healthcare design challenges.
          </p>

        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <FeaturedProject
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}