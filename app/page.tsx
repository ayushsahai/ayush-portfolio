import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Experience from "@/components/home/Experience";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Certification from "@/components/home/Certification";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* SELECTED WORK */}
        <section id="projects">
          <FeaturedProjects />
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <Experience />
        </section>

        {/* PROCESS */}
        <section id="process">
          <Process />
        </section>

        {/* TESTIMONIALS 
        <section id="testimonials">
          <Testimonials />
        </section>*/}

        {/* CERTIFICATIONS */}
        <Certification />
      </main>

      {/* FOOTER */}
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}