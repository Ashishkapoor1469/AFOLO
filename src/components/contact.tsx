import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.
          </p>
        </div>
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: `150ms`}}>
          <Button asChild size="lg">
            <a href="mailto:ashish.kapoor.dev@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: `300ms`}}>
          <Link href="https://github.com/ashishk-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/ashishk-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com/ashishk_dev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
