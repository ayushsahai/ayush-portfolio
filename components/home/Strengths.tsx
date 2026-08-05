import Container from "../ui/Container";
import StrengthCard from "./StrengthCard";
import { strengths } from "@/data/strengths";

export default function Strengths() {
  return (
    <section className="py-32 bg-gray-50">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            HOW I DESIGN
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            What I Bring
            <br />
            to the Table
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Design isn't just about beautiful interfaces.
            It's about solving business problems while creating
            experiences people genuinely enjoy using.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {strengths.map((item) => (
            <StrengthCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}