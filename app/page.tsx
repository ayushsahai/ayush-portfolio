import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Companies from "@/components/home/Companies";
import Strengths from "@/components/home/Strengths";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      {/* <Strengths /> */}
      <Process />
      <Testimonials />
    </>
  );
}