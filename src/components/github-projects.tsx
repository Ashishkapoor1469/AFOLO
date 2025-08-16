"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { enhanceProjectDetails, EnhanceProjectDetailsOutput } from "@/ai/flows/project-showcase-flow";
import { useEffect, useState, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = "Ashishkapoor1469";

interface Project extends EnhanceProjectDetailsOutput {
  name: string;
  html_url: string;
  homepage: string | null;
}

export function GithubProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
        );
        const data = await res.json();

        if (Array.isArray(data)) {
          const enhancedProjects = await Promise.all(
            data.map(async (repo: any) => {
              const enhanced = await enhanceProjectDetails({
                name: repo.name,
                description: repo.description || "No description provided.",
              });
              return {
                name: repo.name,
                description: enhanced.description,
                tags: enhanced.tags,
                html_url: repo.html_url,
                homepage: repo.homepage,
              };
            })
          );
          setProjects(enhancedProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    if (!loading && projects.length > 0) {
      const el = sectionRef.current;
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );

      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: { trigger: el, start: "top 70%" },
        }
      );
    }
  }, [loading, projects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-gradient-to-b from-secondary to-background py-20 sm:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center section-title">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects Showcase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my work from GitHub, powered by AI.
          </p>
        </div>

        {/* Projects */}
         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  className="flex flex-col overflow-hidden rounded-2xl backdrop-blur-lg"
                >
                  <CardHeader className="p-6">
                    <Skeleton className="h-8 w-3/4 mb-2" />
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Skeleton className="h-6 w-24" />
                  </CardFooter>
                </Card>
              ))
            : projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el:any) => (projectsRef.current[index] = el)}
                >
                  <Card className="group flex flex-col overflow-hidden rounded-2xl backdrop-blur-lg border">
                    {/* Header */}
                    <CardHeader className="p-6 flex items-center  border-b">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full  text-primary">
                        <Code2 className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {project.name
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </CardTitle>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/10 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="p-6 pt-0 flex justify-between">
                      {project.homepage && (
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link href={project.homepage} target="_blank">
                            Live Demo{" "}
                            <ArrowUpRight className="ml-1 h-4 w-4 inline" />
                          </Link>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto ml-auto"
                      >
                        <Link href={project.html_url} target="_blank">
                          GitHub <Github className="ml-1 h-4 w-4 inline" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Button asChild>
            <Link
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
            >
              View All Projects on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
