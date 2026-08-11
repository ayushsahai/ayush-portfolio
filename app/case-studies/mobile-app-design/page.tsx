import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";
import CaseStudyGate from "@/components/case-studies/CaseStudyGate";

export default async function MobileAppDesignCaseStudy() {
  const cookieStore = await cookies();

  const accessGranted =
    cookieStore.get("mobile-app-case-study-access")?.value === "granted";

  if (!accessGranted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-16 md:px-10">
          <div className="w-full max-w-md">
            <CaseStudyGate
              cookieName="mobile-app-case-study-access"
              title="Private Case Study"
              description="This case study contains confidential project information. Enter the password to continue."
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================================================
          BACK TO PROJECTS
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 pt-8 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </section>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="max-w-4xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            Product Design · Healthcare · Mobile
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-950 md:text-7xl">
            Designing a Multi-Functional Mobile Experience for Stroke Care
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
            Designing a new mobile healthcare experience that brings stroke
            education, assessment tools, clinical resources, and hospital
            location services into one product.
          </p>

        </div>

        {/* Project metadata */}

        <div className="mt-16 grid gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 md:grid-cols-4">

          <div>
            <p className="text-sm text-gray-500">
              Industry
            </p>

            <p className="mt-2 font-medium">
              Pharmaceutical
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Product
            </p>

            <p className="mt-2 font-medium">
              Mobile Application
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>

            <p className="mt-2 font-medium">
              Product Designer
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="mt-2 font-medium">
              Launched Internally
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          HERO VISUAL
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="overflow-hidden rounded-3xl bg-gray-100">
          <Image
            src="/images/mobile-app-hero.png"
            alt="Mobile healthcare application interface"
            width={1800}
            height={1100}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* =========================================================
          THE PRODUCT
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            The Product
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            One product, multiple stroke-care workflows.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The product was created as a new multifunctional mobile experience
            for stroke care. Instead of separating educational resources,
            assessment tools, clinical calculators, and hospital discovery
            into different experiences, the app brought them together through
            a unified mobile interface.
          </p>

        </div>

        {/* Feature cards */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              number: "01",
              title: "Resources",
              description:
                "Stroke education and clinical resources.",
            },
            {
              number: "02",
              title: "Calculator",
              description:
                "Tools supporting clinical calculations.",
            },
            {
              number: "03",
              title: "Locator",
              description:
                "Find nearby stroke-ready hospitals.",
            },
            {
              number: "04",
              title: "Assessment",
              description:
                "Structured stroke assessment workflows.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <span className="text-sm text-gray-400">
                {item.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================
          CHALLENGE
      ========================================================= */}

      <section className="bg-gray-950 text-white">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
              The Challenge
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Designing the experience from the ground up.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              This was a new product rather than a redesign. The challenge
              was to establish a clear mobile experience across several
              different workflows while keeping the interface understandable
              for patients, caregivers, and healthcare users.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          USERS
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            Users
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Designed around people navigating stroke care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The experience was designed for patients and caregivers who need
            accessible information and practical support throughout the stroke
            care journey.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl bg-gray-50 p-8 md:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
              Primary user
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Patients
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Accessing understandable stroke information, educational
              resources, and relevant support.
            </p>

          </div>

          <div className="rounded-3xl bg-gray-50 p-8 md:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
              Primary user
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Caregivers
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Finding useful information and resources while supporting
              someone through the stroke-care journey.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          ROLE
      ========================================================= */}

      <section className="bg-gray-50">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              My Role
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Product design across the entire experience.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I was one of two designers on the project. Both designers
              contributed across the end-to-end design process rather than
              working within isolated design responsibilities.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Information architecture",
              "User flows",
              "UX design",
              "Interaction design",
              "Visual design",
              "UI refinement",
              "Design iterations",
              "Design system decisions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          USER FLOW
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            Information Architecture
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Mapping the experience before designing the screens.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            With several product capabilities and different user needs,
            mapping the major journeys helped establish how the experience
            should connect before moving deeper into interface design.
          </p>

        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-4 md:p-8">

          <Image
            src="/images/mobile-app-user-flow.png"
            alt="Mobile application user flow"
            width={1800}
            height={1000}
            className="h-auto w-full"
          />

        </div>

      </section>

      {/* =========================================================
          DESIGN PROCESS
      ========================================================= */}

      <section className="bg-gray-950 text-white">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
              Design Process
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              From structure to interaction to visual refinement.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              The design process moved from understanding the product
              structure and user journeys into interface exploration,
              interaction refinement, and visual consistency across the
              different product areas.
            </p>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">

            {[
              ["01", "Structure", "Define the information architecture."],
              ["02", "Flows", "Map key user journeys."],
              ["03", "Interface", "Explore and refine interaction patterns."],
              ["04", "System", "Create consistency across the product."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm text-gray-500">
                  {number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          HOME EXPERIENCE
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            Feature 01 · Home
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            A home experience that brings the most important journeys closer.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The home experience provides entry points into educational
            resources and frequently used capabilities, helping users quickly
            understand what the product can offer.
          </p>

        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-gray-100">

          <Image
            src="/images/mobile-app-hero.png"
            alt="Mobile application home experience"
            width={1800}
            height={1100}
            className="h-auto w-full"
          />

        </div>

      </section>

      {/* =========================================================
          RESOURCES
      ========================================================= */}

      <section className="bg-gray-50">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Feature 02 · Resources
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Turning a large clinical content library into a usable mobile
              experience.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Resources area organizes educational and clinical material
              into clear categories, allowing users to move from the broader
              resource library into focused content without losing context.
            </p>

          </div>

          <div className="mt-16 overflow-hidden rounded-3xl bg-white">

            <Image
              src="/images/mobile-app-resources.png"
              alt="Mobile application resources experience"
              width={1800}
              height={1100}
              className="h-auto w-full"
            />

          </div>

        </div>

      </section>

      {/* =========================================================
          CALCULATOR
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Feature 03 · Calculator
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Making clinical calculations easier to complete on mobile.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The calculator experience was designed around a simple
              progression: identify the assessment, enter the required
              information, calculate, and clearly surface the resulting
              values.
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl bg-gray-50">

            <Image
              src="/images/mobile-app-calculator.png"
              alt="Mobile application calculator"
              width={1200}
              height={1000}
              className="h-auto w-full"
            />

          </div>

        </div>

      </section>

      {/* =========================================================
          LOCATOR
      ========================================================= */}

      <section className="bg-gray-50">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Feature 04 · Locator
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Helping users find stroke-ready hospitals nearby.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The locator combines ZIP-code search and location-based
              discovery with both list and map views, giving users multiple
              ways to find relevant hospitals.
            </p>

          </div>

          <div className="mt-16 overflow-hidden rounded-3xl bg-white">

            <Image
              src="/images/mobile-app-locator.png"
              alt="Mobile hospital locator experience"
              width={1800}
              height={1100}
              className="h-auto w-full"
            />

          </div>

        </div>

      </section>

      {/* =========================================================
          ASSESSMENT
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            Feature 05 · Assessment
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Structuring complex assessment workflows for mobile.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Assessment experiences required clear hierarchy, predictable
            navigation, and strong visual feedback so users could move through
            structured clinical workflows without unnecessary cognitive load.
          </p>

        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-gray-100">

          <Image
            src="/images/mobile-app-assessment.png"
            alt="Mobile stroke assessment experience"
            width={1800}
            height={1100}
            className="h-auto w-full"
          />

        </div>

      </section>

      {/* =========================================================
          ALTEPLASE
      ========================================================= */}

      <section className="bg-gray-50">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="max-w-3xl">

              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Feature 06 · Clinical Calculator
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Presenting complex clinical calculations with clear hierarchy.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                The Alteplase calculator was designed to separate inputs,
                calculated values, and supporting clinical information so the
                most important results remain easy to scan.
              </p>

            </div>

            <div className="overflow-hidden rounded-3xl bg-white">

              <Image
                src="/images/mobile-app-alteplase.png"
                alt="Alteplase dose calculator mobile interface"
                width={1400}
                height={1000}
                className="h-auto w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ITERATIONS
      ========================================================= */}

      <section className="bg-gray-950 text-white">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
              Design Iterations
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              The interface evolved through iteration, not decoration.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Early concepts were progressively refined as navigation,
              hierarchy, interaction patterns, and content presentation were
              evaluated across the product.
            </p>

          </div>

          <div className="mt-16 overflow-hidden rounded-3xl bg-white/5">

            <Image
              src="/images/mobile-app-iterations.png"
              alt="Mobile application design iterations"
              width={1800}
              height={1100}
              className="h-auto w-full"
            />

          </div>

        </div>

      </section>

      {/* =========================================================
          OUTCOME
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            Outcome
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From a new product concept to an internally launched experience.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            The team designed the mobile experience from the ground up and
            delivered a unified product covering education, assessment,
            calculation, resource discovery, and hospital-location workflows.
            The product was subsequently launched internally.
          </p>

        </div>

      </section>

      {/* =========================================================
          REFLECTION
      ========================================================= */}

      <section className="bg-gray-50">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Reflection
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Designing for complexity without making the experience feel
              complex.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Working on a new healthcare product reinforced the importance
              of structure, hierarchy, and consistency. With multiple
              workflows living inside one application, the design challenge
              was not simply creating individual screens, but creating a
              coherent experience across the entire product.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          END
      ========================================================= */}

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium transition hover:bg-gray-950 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

      </section>

    </main>
  );
}