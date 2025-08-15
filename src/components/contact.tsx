"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        gsap.fromTo(
          '.contact-anim',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="contact-anim">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.
          </p>
        </div>
        <div className="contact-anim mt-8">
          <Button asChild size="lg">
            <a href="mailto:kapoorashish714@gmail.com.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>
        <div className="contact-anim mt-12 flex justify-center gap-6">
          <Link href="https://github.com/Ashishkapoor1469" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/ashishkapoor4169" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
