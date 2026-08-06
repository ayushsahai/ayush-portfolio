import Container from "../ui/Container";
import { BadgeCheck, ArrowUpRight } from "lucide-react";

export default function Certification() {
  return (
    <section className="py-32 bg-gray-50" id="certification">
      <Container>

        <div className="relative overflow-hidden rounded-[40px] border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-12 lg:p-20">

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-50" />

          <div className="relative flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-3">

                <BadgeCheck className="h-5 w-5 text-blue-600" />

                <span className="font-medium">
                  Google UX Design Professional Certificate
                </span>

              </div>

              <h2 className="text-5xl font-bold leading-tight">
                Continuously learning to
                design better products.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Alongside 7+ years of enterprise product design experience,
                I've completed Google's UX Design Professional Certificate to
                strengthen my user-centered design process, research methods,
                accessibility, and interaction design skills.
              </p>

            </div>

            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/Q8VAQN6TS4M1"
              target="_blank"
              className="group rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                View Certificate

                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}