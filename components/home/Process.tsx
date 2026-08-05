import Container from "../ui/Container";
import ProcessStep from "./ProcessStep";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="bg-gray-50 py-32">

      <Container>

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            MY APPROACH
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            How I Solve
            <br />
            Design Problems
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Every successful product starts by understanding people—not pixels.
            My process balances business goals, user needs, and technical
            feasibility to create products that are intuitive, scalable, and
            enjoyable to use.
          </p>

        </div>

        <div className="space-y-12">

          {process.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              isLast={index === process.length - 1}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}