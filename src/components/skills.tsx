import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, PenTool } from "lucide-react";

const skillsData = {
  frontend: {
    title: "Frontend",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "ShadCN UI"],
  },
  backend: {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express.js", "Convex", "REST APIs", "GraphQL"],
  },
  database: {
    title: "Databases",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  tools: {
    title: "Tools & Others",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "Docker", "Webpack", "Vite", "Jest"],
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">My proficiency across the full stack of web development.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(skillsData).map((category, index) => (
            <Card key={category.title} className="text-center animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {category.icon}
                </div>
                <CardTitle className="mt-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
