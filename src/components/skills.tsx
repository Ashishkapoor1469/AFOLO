"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, PenTool } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  frontend: {
    title: "Frontend",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
    ],
  },
  backend: {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express.js", "Convex", "REST APIs", "GraphQL"],
  },
  database: {
    title: "Databases",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Supabase"],
  },
  tools: {
    title: "Tools & Others",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Webpack",
      "Vite",
      "Figma",
      "Postman",
      "VS Code",
    ],
  },
};

export function Skills() {
  const sectionRef = useRef(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center skills-title">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My expertise across the full stack of web development.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(skillsData).map((category, index) => (
            <div
              key={category.title}
              ref={(el:any) => (skillsRef.current[index] = el)}
            >
              <Card className="relative group h-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
