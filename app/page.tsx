import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Companies from "@/components/home/Companies";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Certification from "@/components/home/Certification";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="companies">
      <Companies /></section>
      <section id="process">
      <Process /></section>
      <section id="projects">
      <FeaturedProjects /></section>
      <section id="testimonials">
      <Testimonials />
      </section>
      <Certification /> 
      <section id="footer">
      <Footer /></section>
    </>
  );
}