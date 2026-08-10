
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowDown,
  LockKeyhole,
  Layers3,
  Palette,
  Component,
  Accessibility,
  Code2,
  Users,
  Check,
} from "lucide-react";

export default function DesignSystemCaseStudy() {
  return (
    <main className="bg-white text-gray-900">

    {/* =========================================================
        HERO
    ========================================================== */}

    <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to portfolio
        </Link>

        <div className="grid gap-16 pb-24 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

          <div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                Design Systems
              </span>

              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                Enterprise UX
              </span>

              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                Accessibility
              </span>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
              Building a design system that makes consistency scalable.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Creating a reusable design foundation that helps teams solve
              interface problems faster, maintain consistency across
              experiences, and build products that are easier to use and
              easier to maintain.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              My Role
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              UI/UX Designer
            </h2>

            <div className="mt-8 space-y-5 border-t border-gray-100 pt-6">

              <div className="flex justify-between gap-6">
                <span className="text-sm text-gray-500">
                  Focus
                </span>

                <span className="text-right text-sm font-semibold">
                  Design System
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span className="text-sm text-gray-500">
                  Responsibility
                </span>

                <span className="text-right text-sm font-semibold">
                  UX + UI
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span className="text-sm text-gray-500">
                  Collaboration
                </span>

                <span className="text-right text-sm font-semibold">
                  Design + Development
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span className="text-sm text-gray-500">
                  Outcome
                </span>

                <span className="text-right text-sm font-semibold">
                  Scalable Design Foundation
                </span>
              </div>

            </div>

          </div>

        </div>

        <div className="flex justify-center pb-8">
          <ArrowDown
            className="animate-bounce text-gray-400"
            size={22}
          />
        </div>

      </div>
    </section>


    {/* =========================================================
        CONTEXT
    ========================================================== */}

    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Context
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              The problem wasn't a component.
              It was the system around it.
            </h2>

          </div>

          <div className="space-y-7 text-lg leading-8 text-gray-600">

            <p>
              As digital experiences grow, design decisions tend to spread
              across teams, products, and individual project files. Without a
              shared foundation, the same interaction can gradually start
              looking and behaving differently from one place to another.
            </p>

            <p>
              Designers may recreate components that already exist.
              Developers may receive slightly different specifications.
              Stakeholders may see different versions of the same pattern.
              Over time, these small inconsistencies become a larger product
              experience problem.
            </p>

            <p>
              The design system was created to solve that problem at its
              source: establish a common visual and interaction language that
              could support multiple experiences instead of designing every
              interface from scratch.
            </p>

          </div>

        </div>

      </div>

    </section>


    {/* =========================================================
        AUDIT
    ========================================================== */}

    <section className="border-y border-gray-200 bg-gray-50 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Discovery
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            Before creating components, I looked for patterns.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The first step was understanding what already existed. Instead of
            immediately creating a new library, I looked across existing
            interfaces to identify repeated patterns, inconsistencies,
            usability problems, and opportunities for standardization.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Visual Audit",
              text: "Reviewed typography, color, spacing, icons, and visual hierarchy.",
            },
            {
              title: "Pattern Audit",
              text: "Identified repeated interface patterns and common interaction models.",
            },
            {
              title: "Usability",
              text: "Looked for places where inconsistent patterns created unnecessary friction.",
            },
            {
              title: "Scalability",
              text: "Considered which patterns could become reusable foundations rather than one-off solutions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7"
            >
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>


    {/* =========================================================
        PRINCIPLES
    ========================================================== */}

    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Design Principles
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              The system needed rules, not just reusable UI.
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {[
              "Clarity over decoration",
              "Consistency without rigidity",
              "Accessibility by default",
              "Reusable before reinvented",
              "Responsive from the beginning",
              "Simple enough to maintain",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <span className="text-sm font-semibold text-blue-600">
                  0{index + 1}
                </span>

                <p className="mt-4 font-semibold">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>


    {/* =========================================================
        FOUNDATIONS
    ========================================================== */}

    <section className="border-y border-gray-200 bg-gray-50 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Foundations
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            Everything starts with the foundation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Components become much easier to maintain when the decisions
            underneath them are consistent. I treated color, typography,
            spacing, icons, and interaction states as building blocks for
            everything that came later.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: Palette,
              title: "Color",
              text: "A controlled color language with clear hierarchy and intentional states.",
            },
            {
              icon: Layers3,
              title: "Typography",
              text: "Defined hierarchy, scale, weights, readability, and consistent spacing.",
            },
            {
              icon: Component,
              title: "Components",
              text: "Reusable patterns designed around actual product requirements.",
            },
            {
              icon: Accessibility,
              title: "Accessibility",
              text: "Readability, contrast, focus states, sizing, and interaction considered from the start.",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>


    {/* =========================================================
        COMPONENT ARCHITECTURE
    ========================================================== */}

    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Component Architecture
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              Components were designed as systems within the system.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A button isn't just a rectangle with text. A form isn't just a
              collection of inputs. Each component needs to account for
              states, content, behavior, responsiveness, accessibility, and
              the different contexts in which it will be used.
            </p>

            <div className="mt-10 space-y-4">

              {[
                "Default, hover, focus, disabled, and error states",
                "Responsive behavior",
                "Content flexibility",
                "Reusable variants",
                "Accessibility considerations",
                "Developer implementation requirements",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check size={13} />
                  </div>

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>


          <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50">

            <div className="grid grid-cols-2 gap-px bg-gray-200">

              {[
                "Buttons",
                "Inputs",
                "Forms",
                "Navigation",
                "Cards",
                "Tables",
                "Alerts",
                "Modals",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white p-8"
                >

                  <div className="h-10 w-24 rounded-lg bg-gray-900" />

                  <div className="mt-3 h-2 w-16 rounded bg-gray-200" />

                  <p className="mt-5 text-sm font-medium text-gray-500">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>


    {/* =========================================================
        STATES
    ========================================================== */}

    <section className="border-y border-gray-200 bg-gray-50 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            States & Variants
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            The happy path is only one state.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A component isn't finished when it looks good in its default
            state. Real products need components to communicate what is
            happening when users interact, make mistakes, encounter
            restrictions, or need additional guidance.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Default",
            "Hover",
            "Focus",
            "Disabled",
            "Error",
            "Success",
            "Loading",
            "Empty",
          ].map((state) => (
            <div
              key={state}
              className="rounded-3xl border border-gray-200 bg-white p-7"
            >
              <div className="h-11 rounded-xl border border-gray-200 bg-gray-50" />

              <p className="mt-5 font-semibold">
                {state}
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Defined behavior and visual feedback for this state.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>


    {/* =========================================================
        ACCESSIBILITY
    ========================================================== */}

    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8 md:p-12">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <Accessibility size={25} />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Accessibility
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight">
                Accessibility shouldn't be an afterthought.
              </h2>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                "Readable typography",
                "Clear contrast",
                "Visible interaction states",
                "Understandable controls",
                "Consistent interaction patterns",
                "Responsive layouts",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <Check
                    size={18}
                    className="text-blue-600"
                  />

                  <p className="mt-4 font-semibold">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>


    {/* =========================================================
        DESIGN + DEVELOPMENT
    ========================================================== */}

    <section className="border-y border-gray-200 bg-gray-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Collaboration
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            The system had to work for developers as much as it worked for designers.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A beautiful component library is not enough if implementation
            requires constant interpretation. I worked with developers and
            project stakeholders to make the design decisions clear enough to
            translate into real product interfaces.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {[
            {
              icon: Layers3,
              title: "Design",
              text: "Define structure, behavior, variants, and visual rules.",
            },
            {
              icon: Code2,
              title: "Development",
              text: "Translate the patterns into reusable implementation.",
            },
            {
              icon: Users,
              title: "Review",
              text: "Validate the result together and iterate where necessary.",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >

                <Icon
                  size={24}
                  className="text-blue-400"
                />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>


    {/* =========================================================
        IMAGE
    ========================================================== */}

    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            The System in Practice
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            From individual components to complete experiences.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The value of a design system becomes visible when its foundations
            and components work together to create complete experiences.
          </p>

        </div>

        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100">

          <Image
            src="/images/design-system.png"
            alt="Design system components and patterns"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>


    {/* =========================================================
        SCALABILITY
    ========================================================== */}

    <section className="border-y border-gray-200 bg-gray-50 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Scalability
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              A design system should reduce future design debt.
            </h2>

          </div>

          <div className="space-y-7 text-lg leading-8 text-gray-600">

            <p>
              The long-term value of a design system isn't only what it solves
              today. It is the foundation it provides for future work.
            </p>

            <p>
              When new features or experiences are introduced, teams can start
              with established patterns instead of repeatedly creating new
              solutions for common problems.
            </p>

            <p>
              This makes consistency easier to maintain while allowing the
              system to evolve as new requirements emerge.
            </p>

          </div>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {[
            {
              number: "01",
              title: "Reuse",
              text: "Start from established patterns instead of recreating common UI.",
            },
            {
              number: "02",
              title: "Adapt",
              text: "Extend patterns when genuine product requirements demand it.",
            },
            {
              number: "03",
              title: "Evolve",
              text: "Continuously improve the system as products and users change.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-8"
            >

              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>


    {/* =========================================================
        OUTCOME
    ========================================================== */}

    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Outcome
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            The real outcome was less friction.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The design system created a shared foundation for design and
            development. Instead of repeatedly solving the same interface
            problems, teams had reusable patterns they could build from and
            improve over time.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {[
            {
              number: "01",
              title: "Consistency",
              text: "A stronger and more predictable visual and interaction language.",
            },
            {
              number: "02",
              title: "Scalability",
              text: "Reusable foundations that can support new experiences.",
            },
            {
              number: "03",
              title: "Collaboration",
              text: "A shared language between design, product, and development.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-8"
            >

              <p className="text-4xl font-bold">
                {item.number}
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>


    {/* =========================================================
        REFLECTION
    ========================================================== */}

    <section className="border-t border-gray-200 bg-gray-50 py-28">

      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Reflection
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight">
          A design system changes how you think about design.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">

          <p>
            Designing individual screens is about solving a specific problem.
            Designing a system requires thinking about the problems that will
            appear tomorrow, next month, and across completely different
            product experiences.
          </p>

          <p>
            The biggest shift is moving from asking, "How should this screen
            look?" to asking, "What is the most useful pattern we can create
            so this problem doesn't need to be solved from scratch again?"
          </p>

          <p>
            That mindset is what makes a design system valuable. It becomes
            part of the product infrastructure rather than simply another
            Figma file.
          </p>

        </div>

      </div>

    </section>


    {/* =========================================================
        CONFIDENTIALITY
    ========================================================== */}

    <section className="py-20">

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

        <LockKeyhole
          className="mx-auto text-gray-400"
          size={24}
        />

        <p className="mt-5 text-sm leading-7 text-gray-500">
          This case study contains anonymized project information.
          Confidential client assets, proprietary product information,
          and non-public materials have been excluded.
        </p>

      </div>

    </section>

    </main>
  );
}