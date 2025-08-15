'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { enhanceProjectDetails, EnhanceProjectDetailsOutput } from "@/ai/flows/project-showcase-flow";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const GITHUB_USERNAME = "ashishk-dev";

interface Project extends EnhanceProjectDetailsOutput {
  name: string;
  html_url: string;
  homepage: string | null;
}

export function GithubProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`);
        const data = await res.json();

        if (Array.isArray(data)) {
            const enhancedProjects = await Promise.all(data.map(async (repo: any) => {
                const enhanced = await enhanceProjectDetails({ name: repo.name, description: repo.description || 'No description provided.' });
                return {
                    name: repo.name,
                    description: enhanced.description,
                    tags: enhanced.tags,
                    html_url: repo.html_url,
                    homepage: repo.homepage,
                };
            }));
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

  return (
    <section id="projects" className="bg-muted py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work from GitHub, powered by AI.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="flex flex-col overflow-hidden">
                    <CardHeader className="p-0">
                        <Skeleton className="w-full h-48" />
                    </CardHeader>
                    <CardContent className="p-6 flex-1">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full mb-1" />
                        <Skeleton className="h-4 w-5/6 mb-4" />
                        <div className="flex flex-wrap gap-2">
                           <Skeleton className="h-6 w-16" />
                           <Skeleton className="h-6 w-20" />
                           <Skeleton className="h-6 w-14" />
                        </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 bg-transparent">
                         <Skeleton className="h-6 w-24" />
                    </CardFooter>
                </Card>
            ))
          ) : (
            projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader className="p-0">
                  <Image 
                    src={`https://placehold.co/600x400.png`}
                    alt={project.name} 
                    width={600} 
                    height={400} 
                    className="w-full h-48 object-cover"
                    data-ai-hint="tech project"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-1">
                  <CardTitle className="mb-2">{project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 h-24 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 bg-transparent">
                  <div className="flex w-full justify-between">
                    {project.homepage && (
                        <Button asChild variant="link" className="p-0 h-auto">
                            <Link href={project.homepage} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    )}
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={project.html_url} target="_blank">GitHub <Github className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: '450ms' }}>
            <Button asChild>
                <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank">
                    View All Projects on GitHub
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
