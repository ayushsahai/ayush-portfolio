"use client";

import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <Container>
        <nav className="flex h-18 items-center justify-between rounded-full border border-white/30 bg-white/10 px-8 shadow-xl backdrop-blur-xl">

          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center text-2xl font-bold tracking-tight"
          >
            Ayush

            <span
              className="
                ml-1
                text-blue-600
                transition-all
                duration-300
                group-hover:scale-150
                group-hover:rotate-12
              "
            >
              .
            </span>
          </Link>

          {/* Navigation */}

          <ul className="hidden items-center gap-8 lg:flex">

            {[
              {
                name: "Work",
                href: "#projects",
              },
              {
                name: "Process",
                href: "#process",
              },
              {
                name: "Experience",
                href: "#experience",
              },
              {
                name: "Contact",
                href: "#footer",
              },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    group
                    relative
                    text-gray-700
                    transition-colors
                    duration-300
                    hover:text-blue-600
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}

          </ul>

          {/* CTA */}

{/*<a
  href="/resume/Ayush-Sahai-Resume.pdf"
  download
  className="group inline-flex items-center rounded-full bg-blue-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
>
  Download PDF
</a>*/}
<a
  href="/resume/Ayush-Sahai-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center rounded-full bg-blue-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
>
  Resume
</a>

        </nav>
      </Container>
    </header>
  );
}