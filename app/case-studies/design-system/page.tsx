import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import {
  ArrowLeft,
  ArrowUpRight,
  Figma,
  Layers3,
  LayoutGrid,
  Search,
  Palette,
  Smartphone,
  Monitor,
} from "lucide-react";

import CaseStudyGate from "@/components/case-studies/CaseStudyGate";

type Screenshot = {
  src: string;
  alt: string;
  size?: "full" | "half" | "third";
};

export default async function DesignSystemPage() {
  const cookieStore = await cookies();

  const accessGranted =
    cookieStore.get("design-system-access")?.value === "granted";

  if (!accessGranted) {
    return (
      <CaseStudyGate
        cookieName="design-system-access"
        title="Private Design System Case Study"
        description="This case study contains confidential project information. Enter the password to continue."
      />
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <div className="mt-20 max-w-5xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <Pill>Design System</Pill>
              <Pill>Enterprise UX</Pill>
              <Pill>Healthcare</Pill>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building a scalable
              <br />
              design system
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Creating a reusable design foundation that brings consistency,
              accessibility, and scalability to complex digital experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <Meta label="Role" value="Senior Product Designer" />
            <Meta label="Industry" value="Healthcare / Pharma" />
            <Meta label="Tools" value="Figma" />
            <Meta label="Project type" value="New Design System" />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.5fr]">
            <div>
              <Eyebrow>01 — The challenge</Eyebrow>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Designing the foundation, not just the screens.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                The goal was to create a structured design system that could
                support multiple digital experiences without forcing teams to
                repeatedly solve the same interface problems.
              </p>

              <p>
                Instead of treating every interface as a separate design
                exercise, the system established reusable foundations,
                components, patterns, and templates.
              </p>

              <p>
                The result was a shared visual and interaction language that
                designers and developers could build on as the product
                ecosystem evolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM OVERVIEW
      ===================================================== */}

      <CaseStudySection
        number="02"
        eyebrow="System architecture"
        title="One system. Many experiences."
        description="The system was organized as a hierarchy of foundations, components, patterns, and templates. This allowed individual pieces to remain reusable while supporting complete digital experiences."
        icon={<Layers3 size={22} />}
      >
        <ScreenshotGallery
          images={[
            {
              src: "/images/design-system/figma-01.png",
              alt: "Design system Figma structure",
              size: "full",
            },
            {
              src: "/images/design-system/figma-02.png",
              alt: "Design system Figma workspace",
              size: "full",
            },
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          FOUNDATIONS
      ===================================================== */}

      <CaseStudySection
        number="03"
        eyebrow="Foundations"
        title="The visual language"
        description="Before building components, the core visual rules needed to be established. These foundations became the underlying language used throughout the system."
        icon={<Palette size={22} />}
      >
        <div className="mb-12 grid gap-5 sm:grid-cols-3">
          <Foundation
            title="Theme"
            description="Defining the visual direction and reusable design tokens."
          />

          <Foundation
            title="Grid & Layout"
            description="Creating predictable alignment and responsive layout rules."
          />

          <Foundation
            title="Icons"
            description="Establishing consistent sizing, style, and usage."
          />
        </div>

        <ScreenshotGallery
          images={[
            {
              src: "/images/design-system/theme-01.png",
              alt: "Design system theme",
              size: "full",
            },
            {
              src: "/images/design-system/grid-layout-01.png",
              alt: "Design system grid and layout",
              size: "half",
            },
            {
              src: "/images/design-system/icons-01.png",
              alt: "Design system icon library",
              size: "half",
            },
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          CORE COMPONENTS
      ===================================================== */}

      <CaseStudySection
        number="04"
        eyebrow="Components"
        title="Turning patterns into reusable building blocks"
        description="The component library captured the recurring interface patterns used throughout the experience. Each component was designed to remain flexible while maintaining consistent behavior and visual language."
        icon={<LayoutGrid size={22} />}
      >
        <ComponentGrid
          items={[
            ["Elements", "elements-01.png"],
            ["Accordion", "accordion-01.png"],
            ["Button", "button-01.png"],
            ["Cards", "cards-01.png"],
            ["Modal", "modal-01.png"],
            ["Media", "media-01.png"],
            ["Slider", "slider-01.png"],
            ["Tab", "tab-01.png"],
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          CONTENT PATTERNS
      ===================================================== */}

      <CaseStudySection
        number="05"
        eyebrow="Content patterns"
        title="Designing for information-heavy experiences"
        description="Healthcare and pharmaceutical experiences often contain dense information. These patterns were designed to help users scan, understand, and interact with that information without overwhelming the interface."
        icon={<Search size={22} />}
      >
        <ComponentGrid
          items={[
            ["Footnotes / References", "footnotes-01.png"],
            ["ISI Tray", "isi-tray-01.png"],
            ["Keyfacts", "keyfacts-01.png"],
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <CaseStudySection
        number="06"
        eyebrow="Navigation"
        title="Helping users understand where they are"
        description="Navigation patterns created a consistent way for users to move through different experiences while maintaining a clear information hierarchy."
        icon={<Monitor size={22} />}
      >
        <ScreenshotGallery
          images={[
            {
              src: "/images/design-system/navigation-01.png",
              alt: "Design system navigation",
              size: "full",
            },
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          TEMPLATES
      ===================================================== */}

      <CaseStudySection
        number="07"
        eyebrow="Templates"
        title="From components to complete experiences"
        description="Templates demonstrated how the individual components could work together to create complete, production-ready page structures."
        icon={<Smartphone size={22} />}
      >
        <ScreenshotGallery
          images={[
            {
              src: "/images/design-system/templates-01.png",
              alt: "Design system templates",
              size: "full",
            },
            {
              src: "/images/design-system/templates-02.png",
              alt: "Design system template examples",
              size: "half",
            },
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          RESEARCH / WORKSHOPS
      ===================================================== */}

      <CaseStudySection
        number="08"
        eyebrow="Research & workshops"
        title="The system was shaped through collaboration"
        description="The system was not created in isolation. Research, workshops, stakeholder discussions, and design reviews helped identify recurring patterns and align the system with real product needs."
        icon={<Search size={22} />}
      >
        <ScreenshotGallery
          images={[
            {
              src: "/images/design-system/research-01.png",
              alt: "Design system research",
              size: "half",
            },
            {
              src: "/images/design-system/workshop-01.png",
              alt: "Design system workshop",
              size: "half",
            },
          ]}
        />
      </CaseStudySection>

      {/* =====================================================
          SYSTEM IN ACTION
      ===================================================== */}

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>09 — System in action</Eyebrow>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Designed to scale beyond a single screen.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The real value of a design system is not the component library
              itself. It is the ability to combine those components into
              consistent experiences across products, devices, and teams.
            </p>
          </div>

          <div className="mt-14">
            <ScreenshotGallery
              images={[
                {
                  src: "/images/design-system/system-01.png",
                  alt: "Design system in action",
                  size: "full",
                },
                {
                  src: "/images/design-system/system-02.png",
                  alt: "Design system responsive experience",
                  size: "half",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT
      ===================================================== */}

      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow dark>10 — Impact</Eyebrow>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              A foundation for better products.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              The design system created a shared foundation that made
              experiences easier to design, easier to build, and easier to
              maintain as the ecosystem continued to grow.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <ImpactCard
              title="Consistency"
              text="A unified visual and interaction language across experiences."
            />

            <ImpactCard
              title="Scalability"
              text="Reusable components and patterns that can evolve with future products."
            />

            <ImpactCard
              title="Efficiency"
              text="A shared foundation reduces repetitive design and development work."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <section className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-20 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Continue exploring
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              View another case study
            </h2>
          </div>

          <Link
            href="/case-studies/mobile-app-design"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-medium text-white transition hover:bg-blue-600"
          >
            Mobile App Design
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
      {children}
    </span>
  );
}

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>

      <p className="mt-2 font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.18em] ${
        dark ? "text-blue-400" : "text-blue-600"
      }`}
    >
      {children}
    </p>
  );
}

function CaseStudySection({
  number,
  eyebrow,
  title,
  description,
  icon,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="flex items-center gap-3 text-blue-600">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                {icon}
              </span>

              <span className="text-sm font-bold">{number}</span>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              {eyebrow}
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              {description}
            </p>

            <div className="mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESPONSIVE IMAGE GALLERY
========================================================= */

function ScreenshotGallery({
  images,
}: {
  images: Screenshot[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {images.map((image) => {
        const widthClass =
          image.size === "full"
            ? "md:col-span-2"
            : image.size === "third"
              ? "md:col-span-1"
              : "md:col-span-1";

        return (
          <figure
            key={image.src}
            className={`${widthClass} overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1800}
              height={1100}
              sizes="
                (max-width: 768px) 100vw,
                50vw
              "
              className="
                h-auto
                w-full
                object-contain
                transition-transform
                duration-500
                hover:scale-[1.01]
              "
            />
          </figure>
        );
      })}
    </div>
  );
}

/* =========================================================
   COMPONENT GRID
========================================================= */

function ComponentGrid({
  items,
}: {
  items: [string, string][];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {items.map(([title, file]) => (
        <div key={title}>
          <h3 className="mb-4 text-xl font-bold">{title}</h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <Image
              src={`/images/design-system/${file}`}
              alt={`${title} design system`}
              width={1600}
              height={1000}
              sizes="
                (max-width: 640px) 100vw,
                50vw
              "
              className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   FOUNDATION
========================================================= */

function Foundation({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   IMPACT
========================================================= */

function ImpactCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-gray-400">{text}</p>
    </div>
  );
}