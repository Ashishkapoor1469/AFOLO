import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    title: "Eduvibe - E-Learning Platform",
    description: "A comprehensive e-learning platform built with the MERN stack. Features include course creation, student enrollment, progress tracking, and secure payment integration. Designed to be scalable and user-friendly.",
    image: "https://placehold.co/600x400.png",
    imageHint: "education technology",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Spotify Clone",
    description: "A feature-rich Spotify clone demonstrating proficiency in modern frontend technologies. Implemented user authentication, playlist creation, music playback, and a responsive UI using Convex for the backend and Tailwind CSS for styling.",
    image: "https://placehold.co/600x400.png",
    imageHint: "music app",
    tags: ["Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website (the one you're on right now!) built with Next.js and ShadCN UI. Designed to be a clean, modern, and fully responsive showcase of my skills and projects.",
    image: "https://placehold.co/600x400.png",
    imageHint: "developer portfolio",
    tags: ["Next.js", "ShadCN UI", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-muted py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work. See the code, or check out the live demos.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="p-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 h-20">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-transparent">
                <div className="flex w-full justify-between">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={project.liveUrl} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={project.githubUrl} target="_blank">GitHub <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
