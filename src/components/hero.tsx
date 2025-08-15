import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left-12 duration-500">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-primary">Ashish Kapoor</span>
            <span className="block text-foreground">Full-Stack Developer</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">
            Crafting elegant and efficient web solutions. I specialize in building modern, responsive applications with a focus on user experience and performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Link href="https://github.com/ashishk-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/ashishk-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com/ashishk_dev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block animate-in fade-in slide-in-from-right-12 duration-500">
          <Image 
            src="https://placehold.co/600x600.png"
            alt="Ashish Kapoor"
            width={600}
            height={600}
            className="rounded-full shadow-2xl object-cover"
            data-ai-hint="developer portrait"
            priority
          />
        </div>
      </div>
    </section>
  );
}
