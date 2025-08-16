"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Img2 from "@/photos/image-from-rawpixel-id-18436122-png.png"
export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    tl.fromTo('.hero-p', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    tl.fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    tl.fromTo('.hero-socials', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    tl.fromTo('.hero-image', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.8");
  }, []);

  return (
    <section id="home" ref={heroRef} className="mx-auto max-w-full  px-4 sm:px-6 lg:px-8 py-20 sm:py-25">
      <div className=" flex md:flex-row flex-col-reverse items-center justify-evenly gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="hero-title block text-primary">Ashish Kapoor</span>
            <span className="hero-title block text-foreground">Full-Stack Developer</span>
          </h1>
          <p className="hero-p mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">
            Crafting elegant and efficient web solutions. I specialize in building modern, responsive applications with a focus on user experience and performance.
          </p>
          <div className="hero-buttons mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="hero-socials mt-8 flex items-center gap-4">
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
        <div className="hero-image block">
          <Image 
            src={Img2}
            alt="Ashish Kapoor"
            width={600}
            height={600}
            loading="lazy"
            className="rounded-full shadow-2xl object-cover"
            data-ai-hint="developer portrait"
          />
        </div>
      </div>
    </section>
  );
}
