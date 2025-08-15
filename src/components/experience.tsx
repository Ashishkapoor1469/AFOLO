import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, Trophy } from "lucide-react";

const experienceData = [
  {
    type: "Internship",
    icon: <Briefcase className="h-6 w-6" />,
    title: "Full-Stack Developer Intern",
    company: "Tech Solutions Inc.",
    date: "Jun 2023 - Aug 2023",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to implement new features and improve application performance.",
  },
  {
    type: "Certification",
    icon: <Award className="h-6 w-6" />,
    title: "Certified MERN Stack Developer",
    company: "Coursera",
    date: "Mar 2023",
    description: "Completed an intensive course covering MongoDB, Express.js, React, and Node.js, culminating in a full-stack project.",
  },
  {
    type: "Hackathon",
    icon: <Trophy className="h-6 w-6" />,
    title: "Winner, Hackathon 2022",
    company: "Innovate Fest",
    date: "Oct 2022",
    description: "Led a team to victory by developing a prize-winning application for social good within a 48-hour timeframe.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-muted py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Achievements</h2>
          <p className="mt-4 text-lg text-muted-foreground">My journey in tech, from internships to accolades.</p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: `${index * 150}ms`}}>
                <div className="md:flex md:items-start md:gap-8">
                  <div className={`flex justify-center md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8 md:order-2'}`}>
                    <Card className="w-full max-w-md">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {item.icon}
                          </span>
                          <div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.company} • {item.date}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`hidden md:block absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2`}></div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-1'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
