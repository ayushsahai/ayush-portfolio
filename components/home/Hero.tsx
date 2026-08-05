import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import { highlights } from "@/data/home";

export default function Hero() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[4fr_2fr]">
            <div className="max-w-3xl">
                <p className="mb-4 text-lg font-medium text-grey-600">
                    👋 Hello, I'm
                </p>

                <h1 className="text-6xl font-bold leading-tight tracking-tight text-gray-900">
                    Ayush Sahai
                </h1>

                <p className="mt-4 text-2xl font-semibold text-blue-700">
                    Senior Product Designer
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                    I design enterprise and healthcare experiences that simplify
                    complex workflows through research, interaction design,
                    and scalable design systems.
                </p>

                {/* Credibility Badges */}

                <div className="mt-10 flex flex-wrap gap-3">
                    {highlights.map((item) => (
                        <span
                        key={item}
                        className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
                        >
                        ✓ {item}
                        </span>
                    ))}
                 </div>

                <div className="mt-12 flex gap-4">

                    <Button>
                    View Case Studies
                    </Button>

                    <Button variant="secondary">
                    Download Resume
                    </Button>

                </div>
                
                
            </div>
            <div className="flex justify-center">
           
           
                <div className="inline-block">

                    <Image
                    src="/images/Ayush Sahai Profile.png"
                    alt="Ayush Sahai"
                    width={380}
                    height={480}
                    className="rounded-3xl"
                    />

                </div>
            </div>
          

          
        </div>
      </Container>
    </section>
  );
}