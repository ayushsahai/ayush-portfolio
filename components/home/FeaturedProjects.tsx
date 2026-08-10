import Container from "../ui/Container";
import FeaturedProject from "./FeaturedProject";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-36">
      <Container>

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            FEATURED WORK
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            From Problem to Product
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            A selection of work where I have taken complex problems,
            understood what was getting in the way, and turned them into
            clearer, more accessible digital experiences.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-24 grid items-start gap-8 lg:grid-cols-2">
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