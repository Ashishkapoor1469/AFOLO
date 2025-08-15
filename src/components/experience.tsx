"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    type: "Internship",
    icon: <Briefcase className="h-6 w-6" />,
    title: "Frontend Developer Intern",
    company: "IBM x CSRBOX Inc.",
    date: "Jun 2025 - Aug 2025",
    description:
      "Developed and maintained web applications using HTML, CSS, JS, React, and Node.js. Collaborated with a team to implement new features and improve performance.",
  },
  {
    type: "Certification",
    icon: <Award className="h-6 w-6" />,
    title: "Certified Full-stack Developer",
    company: "Null Class",
    date: "Aug 2025",
    description:
      "Completed an intensive course covering MongoDB, Express.js, React, and Node.js, culminating in a full-stack project.",
  },
  {
    type: "Hackathon",
    icon: <Trophy className="h-6 w-6" />,
    title: "Winner, Hackathon 2024",
    company: "Dronacharya College of Computer Science",
    date: "Oct 2022",
    description:
      "Led a team to victory by developing a prize-winning application for social good within 48 hours.",
  },
];

export function Experience() {
  const sectionRef = useRef(null);
  const experiencesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".experience-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Batch card animations
      ScrollTrigger.batch(experiencesRef.current, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -100 : 100),
            duration: 0.5,
          }),
      });

      // Timeline line animation
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-secondary py-20 sm:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center experience-title">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & Achievements
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My journey in tech, from internships to accolades.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 relative timeline">
          <div
            className="timeline-line absolute left-1/2 sm:left-4 top-0 h-full w-px bg-gradient-to-b from-primary/80 to-primary hidden sm:block"
            aria-hidden="true"
          ></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                ref={(el:any) => (experiencesRef.current[index] = el)}
                className="relative opacity-0"
              >
                <div className="sm:flex sm:items-start sm:gap-8">
                  {/* Card */}
                  <div
                    className={`flex justify-center sm:w-1/2 ${
                      index % 2 === 0
                        ? "sm:justify-end sm:pr-8"
                        : "sm:justify-start sm:pl-8 sm:order-2"
                    }`}
                  >
                    <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                            {item.icon}
                          </span>
                          <div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>
                              {item.company} • {item.date}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className="hidden sm:block absolute top-1/2 left-1/2 sm:left-4 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2 shadow-md"
                    aria-label={`Timeline point for ${item.title}`}
                  ></div>

                  <div
                    className={`sm:w-1/2 ${index % 2 === 0 ? "" : "sm:order-1"}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
