import Container from "../ui/Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            COLLABORATION
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Words From
            <br />
            Collaboration
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Great products are built by great teams. These testimonials reflect
            the collaborative mindset I bring to every project.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              quote={item.quote}
              author={item.author}
              company={item.company}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}