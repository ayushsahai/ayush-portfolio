"use client";

import Container from "../ui/Container";
import SocialCard from "../ui/SocialCard";

import { ArrowUp, ArrowUpRight } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <Container>
        <div className="relative py-36">

          {/* Heading */}

          <div className="max-w-5xl">
            <p className="mb-6 uppercase tracking-[0.3em] text-blue-400">
              Let's Connect
            </p>

            <h2 className="text-6xl font-black leading-tight lg:text-8xl">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              GREAT<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-9 text-gray-300">
              Whether you're hiring, building an ambitious product,
              or simply want to talk about design,
              I'd love to hear from you.
            </p>
          </div>

          {/* CTA */}

          <div className="mt-16">
            <a
              href="mailto:ayushsahai2@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]"
            >
              Say Hello

              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Social Cards */}

          <div className="mt-28 grid gap-8 md:grid-cols-3">

            <SocialCard
              href="mailto:ayushsahai2@gmail.com"
              title="Email"
              subtitle="Let's start a conversation"
              icon={<HiOutlineMail size={28} />}
            />

            <SocialCard
              href="https://linkedin.com/in/ayushsahai2"
              title="LinkedIn"
              subtitle="Professional Profile"
              icon={<FaLinkedin size={28} />}
            />

            <SocialCard
  href="tel:+919598756351"
  title="Phone"
  subtitle="+91 95987 56351"
  icon={<span className="text-2xl">☎</span>}
/>

          </div>

          {/* Bottom */}

          <div className="mt-32 flex flex-col items-center justify-between gap-10 border-t border-white/10 pt-10 lg:flex-row">

            <div>
              <h3 className="text-4xl font-bold">
                Ayush<span className="text-blue-500">.</span>
              </h3>

              <p className="mt-3 text-gray-400">
                Designing thoughtful digital experiences for people and businesses.
              </p>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Back to top

              <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </button>

          </div>

        </div>
      </Container>
    </footer>
  );
}