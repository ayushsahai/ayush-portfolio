import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
              Ayush
              <span className="text-blue-600">.</span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/">About</Link>
            </li>

            <li>
              <Link href="/">Projects</Link>
            </li>

            <li>
              <Link href="/">Experience</Link>
            </li>

            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <Button>
            Hire Me
          </Button>
        </nav>
      </Container>
    </header>
  );
}