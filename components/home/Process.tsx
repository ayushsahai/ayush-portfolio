"use client";

import { useState } from "react";
import Container from "../ui/Container";
import ProcessCard from "./ProcessCard";
import { process } from "@/data/process";

export default function Process() {
  const [activeStep, setActiveStep] = useState("01");

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            My Design Process
          </span>

          <h2 className="mt-8 text-5xl font-bold tracking-tight text-gray-900">
            Designing products people
            <br />
            actually enjoy using.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Great experiences don't happen by accident. Every project follows a
            thoughtful process—from understanding people to validating ideas
            and continuously improving after launch.
          </p>
        </div>

        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-5">
          {process.map((step) => (
            <ProcessCard
              key={step.number}
              step={step}
              isOpen={activeStep === step.number}
              onToggle={() =>
                setActiveStep(
                  activeStep === step.number ? "" : step.number
                )
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}