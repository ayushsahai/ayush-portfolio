import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
  Monitor,
  Smartphone,
  Users,
} from "lucide-react";

import CaseStudyGate from "@/components/case-studies/CaseStudyGate";

const COOKIE_NAME = "case-study-access";

const sections = [
  { id: "challenge", label: "The challenge" },
  { id: "sitemap", label: "Information architecture" },
  { id: "redesign", label: "The redesign" },
  { id: "responsive", label: "Responsive design" },
  { id: "accessibility", label: "Accessibility" },
  { id: "outcome", label: "Outcome" },
];

const papScreens = [
  {
    id: "login",
    number: "01",
    title: "A clearer way to start",
    subtitle: "Login experience",
    description:
      "The login experience was redesigned to create a clearer entry point into the portal. The new experience gives users a more focused path into the product while maintaining the information they need to access their account.",
    oldDesktop: "/images/pap/login-old.png",
    desktop: "/images/pap/login-desktop.png",
    mobile: "/images/pap/login-mobile.png",
    decision:
      "Reduce visual noise around the first action and establish a clearer hierarchy between authentication, supporting information, and secondary actions.",
  },
  {
    id: "before-submit",
    number: "02",
    title: "Help users prepare before they begin",
    subtitle: "Before submitting a claim",
    description:
      "Starting an insurance claim can be unfamiliar and stressful. The new home experience introduces the information and documents users should have ready before starting, helping them understand the process before committing to it.",
    oldDesktop: null,
    desktop: "/images/pap/before-submit-desktop.png",
    mobile: "/images/pap/before-submit-mobile.png",
    decision:
      "Move important preparation information to the beginning of the journey instead of asking users to discover requirements halfway through the process.",
  },
  {
    id: "submit-claim",
    number: "03",
    title: "Make submitting a claim feel manageable",
    subtitle: "Submit a claim",
    description:
      "The claim submission experience was restructured into a clearer sequence of actions. Information is organized around what users need to complete the task rather than presenting the process as one dense form.",
    oldDesktop: "/images/pap/submit-claim-old.png",
    desktop: "/images/pap/submit-claim-desktop.png",
    mobile: "/images/pap/submit-claim-mobile.png",
    decision:
      "Break a complex task into understandable steps and make progress, requirements, and next actions easier to recognize.",
  },
  {
    id: "check-claim",
    number: "04",
    title: "Give users visibility after submission",
    subtitle: "Check a claim",
    description:
      "After submitting a claim, users need confidence that their information has been received and that they understand what happens next. The redesigned claim-status experience makes this information easier to scan and understand.",
    oldDesktop: "/images/pap/check-claim-old.png",
    desktop: "/images/pap/check-claim-desktop.png",
    mobile: "/images/pap/check-claim-mobile.png",
    decision:
      "Prioritize status, progress, and next steps so users can quickly understand where their claim stands.",
  },
  {
    id: "profile",
    number: "05",
    title: "Put personal information in one place",
    subtitle: "Profile",
    description:
      "The redesigned profile experience organizes personal and account information into a more predictable structure. The goal was to make common account tasks easier to locate without overwhelming the user.",
    oldDesktop: "/images/pap/profile-old.png",
    desktop: "/images/pap/profile-desktop.png",
    mobile: "/images/pap/profile-mobile.png",
    decision:
      "Create a predictable information hierarchy so users can understand where their personal information lives and how to manage it.",
  },
  {
    id: "insurance",
    number: "06",
    title: "Make insurance information easier to understand",
    subtitle: "Insurance",
    description:
      "Insurance information can be difficult to interpret because of unfamiliar terminology and dense content. The new experience focuses on hierarchy, grouping, and progressive disclosure to make important information easier to scan.",
    oldDesktop: "/images/pap/insurance-old.png",
    desktop: "/images/pap/insurance-desktop.png",
    mobile: "/images/pap/insurance-mobile.png",
    decision:
      "Organize information around user questions and priorities rather than mirroring the complexity of the underlying insurance system.",
  },
  {
    id: "doctor",
    number: "07",
    title: "Make finding care more useful",
    subtitle: "Doctors",
    description:
      "The doctor experience was designed to help users find relevant care without having to understand the underlying information structure. Search, filtering, and result presentation work together to support faster decisions.",
    oldDesktop: "/images/pap/doctor-old.png",
    desktop: "/images/pap/doctor-desktop.png",
    mobile: "/images/pap/doctor-mobile.png",
    decision:
      "Design search and result patterns around the decision users are trying to make, rather than around the data available to the system.",
  },
  {
    id: "pharmacy",
    number: "08",
    title: "Make pharmacy discovery straightforward",
    subtitle: "Pharmacies",
    description:
      "The pharmacy experience follows the same principles as the doctor experience while adapting the information architecture to the needs of finding a pharmacy.",
    oldDesktop: "/images/pap/pharmacy-old.png",
    desktop: "/images/pap/pharmacy-desktop.png",
    mobile: "/images/pap/pharmacy-mobile.png",
    decision:
      "Create a consistent discovery pattern that users can understand across different healthcare search experiences.",
  },
];

export default async function PatientAssistancePortalCaseStudy() {
  const cookieStore = await cookies();
  const accessGranted =
    cookieStore.get(COOKIE_NAME)?.value === "granted";

  if (!accessGranted) {
    return (
      <CaseStudyGate
        cookieName={COOKIE_NAME}
        title="Patient Assistance Portal"
        description="This case study contains confidential project information. Enter the password to continue."
      />
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Healthcare UX
                </span>

                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
                  Confidential
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-gray-950 md:text-6xl lg:text-7xl">
                Patient Assistance
                <br />
                Portal
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Redesigning a complex patient assistance experience to make
                insurance tasks clearer, more accessible, and easier to
                navigate.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <LockKeyhole size={19} className="text-gray-700" />
                <span className="text-sm font-semibold text-gray-900">
                  Confidential project
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Screens shown here have been anonymized and selected to
                communicate the design process without exposing proprietary
                project information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT SNAPSHOT
      ========================================================== */}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ProjectMeta label="Product" value="Patient Assistance Portal" />
            <ProjectMeta label="Industry" value="Healthcare / Pharma" />
            <ProjectMeta label="Users" value="Patients & caregivers" />
            <ProjectMeta label="Role" value="Product Designer" />
            <ProjectMeta label="Scope" value="UX, UI & accessibility" />
            <ProjectMeta label="Platform" value="Responsive web" />
            <ProjectMeta label="Focus" value="Claims & patient support" />
            <ProjectMeta label="Status" value="Launched" />
          </div>
        </div>
      </section>

      {/* =========================================================
          STICKY CONTENT NAV
      ========================================================== */}

      <div className="sticky top-0 z-30 hidden border-b border-gray-200 bg-white/95 backdrop-blur lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-7 overflow-x-auto px-6 py-4 lg:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      {/* =========================================================
          CHALLENGE
      ========================================================== */}

      <section id="challenge" className="scroll-mt-20">
        <SectionWrapper>
          <SectionEyebrow number="01" label="The challenge" />

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                When a healthcare task becomes a navigation problem.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Patient assistance and insurance journeys contain a lot of
                information, requirements, and terminology. For patients and
                caregivers, that complexity can make even straightforward
                tasks feel difficult.
              </p>

              <p>
                The goal was not simply to refresh the interface. We needed to
                rethink how the experience was structured so users could
                understand what they needed, complete important tasks, and
                know what to expect next.
              </p>

              <p>
                I worked across the experience as a product designer,
                collaborating with product, engineering, and other
                stakeholders throughout the redesign.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <PrincipleCard
              icon={<Users size={22} />}
              title="Design for real-world users"
              text="Patients and caregivers may be navigating unfamiliar healthcare and insurance terminology."
            />

            <PrincipleCard
              icon={<CheckCircle2 size={22} />}
              title="Reduce cognitive load"
              text="Important information and actions should be easy to find without requiring users to understand the system."
            />

            <PrincipleCard
              icon={<Monitor size={22} />}
              title="Create a consistent system"
              text="Different journeys should feel like parts of one coherent product rather than disconnected experiences."
            />
          </div>
        </SectionWrapper>
      </section>

      {/* =========================================================
          SITEMAP
      ========================================================== */}

      <section id="sitemap" className="scroll-mt-20 bg-gray-50">
        <SectionWrapper>
          <SectionEyebrow number="02" label="Information architecture" />

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Start with the structure, not the screens.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Before redesigning individual screens, the experience needed a
                clearer information architecture. The new sitemap helped
                establish relationships between the major areas of the
                product and create a foundation for the redesigned journeys.
              </p>
            </div>

            <ImagePanel
              src="/images/pap/sitemap.png"
              alt="Patient Assistance Portal new sitemap"
              priority
              aspect="wide"
            />
          </div>
        </SectionWrapper>
      </section>

      {/* =========================================================
          REDESIGN
      ========================================================== */}

      <section id="redesign" className="scroll-mt-20">
        <SectionWrapper>
          <SectionEyebrow number="03" label="The redesign" />

          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Eight connected experiences. One consistent product language.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Instead of treating every screen as an isolated design problem,
              I approached the portal as one connected experience. The
              following screens show how the same principles were applied
              across authentication, claims, account management, insurance,
              and healthcare discovery.
            </p>
          </div>

          <div className="mt-20 space-y-32">
            {papScreens.map((screen) => (
              <ScreenStory key={screen.id} screen={screen} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* =========================================================
          RESPONSIVE
      ========================================================== */}

      <section id="responsive" className="scroll-mt-20 bg-gray-50">
        <SectionWrapper>
          <SectionEyebrow number="04" label="Responsive design" />

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Designed as one experience across screen sizes.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Responsive behavior was considered as part of the design
                rather than treated as a final adaptation. Content hierarchy,
                navigation, controls, and spacing were reconsidered for
                smaller screens so the core experience remained clear.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-gray-700">
                <Monitor size={18} />
                Desktop
                <span className="mx-1 text-gray-300">→</span>
                <Smartphone size={18} />
                Mobile
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ImagePanel
                src="/images/pap/submit-claim-desktop.png"
                alt="Submit claim desktop experience"
                aspect="portrait"
              />

              <ImagePanel
                src="/images/pap/submit-claim-mobile.png"
                alt="Submit claim mobile experience"
                aspect="portrait"
              />
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* =========================================================
          ACCESSIBILITY
      ========================================================== */}

      <section id="accessibility" className="scroll-mt-20">
        <SectionWrapper>
          <SectionEyebrow number="05" label="Accessibility" />

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Accessibility was part of the design process.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Accessibility was considered throughout the redesign rather
                than added as a final checklist.
              </p>

              <p>
                Hierarchy, readable content, interaction states, touch targets,
                focus behavior, contrast, and predictable navigation were
                considered as part of creating a more usable healthcare
                experience.
              </p>

              <p>
                This was especially important because the product serves
                patients and caregivers who may have different levels of
                digital confidence and accessibility needs.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Clear hierarchy",
              "Readable content",
              "Accessible interactions",
              "Predictable navigation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <CheckCircle2 className="text-blue-600" size={21} />
                <p className="mt-4 font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* =========================================================
          OUTCOME
      ========================================================== */}

      <section id="outcome" className="scroll-mt-20 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionEyebrow
            number="06"
            label="Outcome"
            dark
          />

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                From a collection of tasks to a clearer patient experience.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-300">
              <p>
                The redesign created a more coherent experience across the
                portal, connecting claims, account management, insurance
                information, and healthcare discovery through a consistent
                interaction model.
              </p>

              <p>
                More importantly, the work shifted the focus from exposing
                system complexity to helping patients and caregivers
                accomplish what they actually came to do.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <OutcomeCard
              title="Clearer journeys"
              text="Major tasks are organized around user intent and next actions."
            />

            <OutcomeCard
              title="Consistent experience"
              text="Shared patterns create continuity across different parts of the portal."
            />

            <OutcomeCard
              title="Responsive by design"
              text="The experience adapts to desktop and mobile without losing its core hierarchy."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING
      ========================================================== */}

      <section>
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Reflection
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                The biggest lesson was not about UI.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Complex healthcare products often become difficult because
                the underlying systems are complex. The interface should not
                make users carry that complexity.
              </p>

              <p>
                This project reinforced my approach to product design:
                understand the system deeply, then make the experience feel
                simple from the user's perspective.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* =========================================================
          NEXT PROJECT
      ========================================================== */}

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Next case study
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                Building a Design System for Scalable Digital Experiences
              </h2>
            </div>

            <Link
              href="/case-studies/design-system"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gray-900 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
            >
              View Design System
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function SectionWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionEyebrow({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span
        className={`font-mono text-sm font-semibold ${
          dark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {number}
      </span>

      <span
        className={`h-px w-10 ${
          dark ? "bg-gray-700" : "bg-gray-300"
        }`}
      />

      <span
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function ProjectMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
        {label}
      </p>

      <p className="mt-2 font-medium leading-6 text-gray-900">{value}</p>
    </div>
  );
}

function PrincipleCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </div>
  );
}

function ScreenStory({
  screen,
}: {
  screen: (typeof papScreens)[number];
}) {
  return (
    <article id={screen.id} className="scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="font-mono text-sm font-semibold text-blue-600">
            {screen.number}
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            {screen.subtitle}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
            {screen.title}
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {screen.description}
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              Design decision
            </p>

            <p className="mt-3 leading-7 text-gray-700">
              {screen.decision}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {screen.oldDesktop ? (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Previous experience
              </p>

              <ImagePanel
                src={screen.oldDesktop}
                alt={`${screen.subtitle} previous experience`}
                aspect="wide"
              />
            </div>
          ) : null}

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Redesigned experience
            </p>

            <ImagePanel
              src={screen.desktop}
              alt={`${screen.subtitle} redesigned desktop experience`}
              aspect="wide"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ImagePanel
              src={screen.mobile}
              alt={`${screen.subtitle} redesigned mobile experience`}
              aspect="portrait"
            />

            <div className="flex flex-col justify-center rounded-3xl border border-gray-200 bg-gray-50 p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <Smartphone size={19} />
              </div>

              <h4 className="mt-5 text-xl font-bold text-gray-900">
                Responsive by default
              </h4>

              <p className="mt-3 leading-7 text-gray-600">
                The mobile experience preserves the same core hierarchy while
                adapting navigation, spacing, controls, and content density
                for smaller screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ImagePanel({
  src,
  alt,
  priority = false,
  aspect = "wide",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  aspect?: "wide" | "portrait";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm ${
        aspect === "portrait"
          ? "aspect-[4/5]"
          : "aspect-[16/10]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 70vw"
        className="object-cover object-top"
      />
    </div>
  );
}

function OutcomeCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <ArrowUpRight className="text-blue-400" size={21} />

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-400">{text}</p>
    </div>
  );
}