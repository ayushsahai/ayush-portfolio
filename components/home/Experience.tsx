"use client";

import { useState } from "react";
import Container from "../ui/Container";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function Experience() {
  const [active, setActive] = useState("indegene");

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <Container>
        {/* Heading */}

        <div className="relative mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Experience
          </span>

          <h2 className="mt-8 text-5xl font-bold tracking-tight text-gray-900">
            Building products that
            <br />
            improve people's lives.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            My journey has taken me from designing digital experiences for
            startups to creating enterprise healthcare products used by
            patients, healthcare professionals, and global pharmaceutical
            organizations. Every project strengthened my ability to simplify
            complexity and design with empathy.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-24 max-w-6xl">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-gray-200 to-transparent lg:block" />

          <div className="space-y-10">

            {experience.map((item) => (

              <div
                key={item.id}
                className="relative lg:pl-24"
              >
                {/* Timeline Dot */}

                <div
                  className={`
                  absolute
                  left-5
                  top-12
                  hidden
                  h-6
                  w-6
                  rounded-full
                  border-4
                  transition-all
                  duration-500
                  lg:block
                  ${
                    active === item.id
                      ? "border-white bg-blue-600 shadow-lg shadow-blue-200"
                      : "border-white bg-gray-300"
                  }
                  `}
                />

                <ExperienceCard
                  item={item}
                  isOpen={active === item.id}
                  onToggle={() =>
                    setActive(active === item.id ? "" : item.id)
                  }
                />

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}