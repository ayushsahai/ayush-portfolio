import Container from "../ui/Container";
import CompanyCard from "./CompanyCard";
import { companies } from "@/data/companies";

export default function Companies() {
  return (
    <section className="py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-600">
            EXPERIENCE
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Experience Across
            <br />
            Global Healthcare Brands
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Over the last 7+ years I've designed enterprise platforms,
            healthcare products and patient experiences used across
            global pharmaceutical organizations.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center">

          {companies.map((company) => (
            <CompanyCard
              key={company.name}
              company={company}
            />
          ))}

        </div>

        <p className="mt-16 text-center text-sm leading-7 text-gray-500">
          Company names are referenced solely to describe professional project experience.
          No confidential, proprietary, or non-public information is disclosed.
        </p>

      </Container>
    </section>
  );
}