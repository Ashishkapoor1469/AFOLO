"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, Trophy } from "lucide-react";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    type: "Internship",
    icon: <Briefcase className="h-6 w-6" />,
    title: "Frontend Developer Intern",
    company: "IBM x CSRBOX Inc.",
    date: "Jun 2025 - Aug 2025",
    description: "Developed and maintained web applications using HTML,CSS,Js React and Node.js. Collaborated with a team of developers to implement new features and improve application performance.",
  },
  {
    type: "Certification",
    icon: <Award className="h-6 w-6" />,
    title: "Certified Full-stack Developer Stack Developer",
    company: "Null Class",
    date: "Aug 2025",
    description: "Completed an intensive course covering MongoDB, Express.js, React, and Node.js, culminating in a full-stack project.",
  },
  {
    type: "Hackathon",
    icon: <Trophy className="h-6 w-6" />,
    title: "Winner, Hackathon 2024",
    company: "Dronacharya College of Computer Science",
    date: "Oct 2022",
    description: "Led a team to victory by developing a prize-winning application for social good within a 48-hour timeframe.",
  },
];

export function Experience() {
  const sectionRef = useRef(null);
  const experiencesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      '.experience-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );

    experiencesRef.current.forEach((exp, index) => {
      if (exp) {
        const direction = index % 2 === 0 ? -100 : 100;
        gsap.fromTo(
          exp,
          { opacity: 0, x: direction },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: exp,
              start: 'top 85%',
            },
          }
        );
      }
    });

    gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
            scaleY: 1,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 70%',
                end: 'bottom 70%',
                scrub: true,
            },
        }
    );

  }, []);

  return (
    <section id="experience" ref={sectionRef} className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center experience-title">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Achievements</h2>
          <p className="mt-4 text-lg text-muted-foreground">My journey in tech, from internships to accolades.</p>
        </div>
        <div className="mt-12 relative timeline">
          <div className="timeline-line absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} ref={el => experiencesRef.current[index] = el} className="relative">
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
