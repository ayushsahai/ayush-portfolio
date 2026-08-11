import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/data/home";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-gray-50 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[calc(100vh-80px)] items-center gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">

          {/* LEFT */}
          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Senior Product Designer
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Turning complex
              <br />
              problems into
              <br />
              <span className="text-blue-600">clear experiences.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              I'm Ayush Sahai. I design digital products and healthcare
              experiences where complex workflows, information, and business
              requirements need to become simple, accessible, and intuitive.
            </p>

            {/* Credibility */}
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-700
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400
                    hover:shadow-md
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <Link
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gray-900
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:shadow-lg
                "
              >
                View Selected Work
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="#experience"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-gray-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-300
                  hover:shadow-md
                "
              >
                My Experience
              </Link>

            </div>

            {/* Scroll cue */}
            <div className="mt-14 flex items-center gap-3 text-sm text-gray-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
                <ArrowDown size={15} />
              </span>

              <span>Explore my work</span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Decorative frame 
            <div
              className="
                absolute
                -right-4
                top-8
                h-[390px]
                w-[340px]
                rounded-[2rem]
                border
                border-blue-100
                bg-blue-50/50
                lg:h-[500px]
                lg:w-[390px]
              "
            />
            */}
            <div className="relative">
                <Image
                src="/images/Ayush Sahai Profile.png"
                alt="Ayush Sahai"
                width={420}
                height={520}
                priority
                className="
                    relative
                    z-10
                    rounded-[2rem]
                    object-cover
                    shadow-2xl
                "
                />

                        {/* Experience badge */}
                <div
                className="
                    absolute
                    -bottom-6
                    -left-8
                    z-20
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    px-5
                    py-4
                    shadow-xl
                "
                >
                <p className="text-2xl font-bold text-gray-900">
                    8+ years
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Designing digital experiences
                </p>
                </div>
            </div>
            </div>

        </div>
      </Container>
    </section>
  );
}