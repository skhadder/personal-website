"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

type ExperienceItem = {
  title: string
  organization: string
  location: string
  period: string
  bullets: [string, string]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "AI/ML Fellow",
    organization: "Cornell Tech | Break Through Tech Program",
    location: "Remote",
    period: "Mar 2026 – Present",
    bullets: [
      "Selected from 4,300+ applicants for a year-long AI/ML fellowship focused on real-world, data-driven projects.",
      "Building machine learning solutions through industry projects, technical coursework, and mentorship.",
    ],
    skills: ["Python", "Machine Learning", "Pandas", "NumPy", "Model Evaluation"],
  },
  {
    title: "Engineering Consultant Ambassador",
    organization: "Responsible Computing Club (RCC) | San José State University",
    location: "San Jose, CA",
    period: "May 2026 – Present",
    bullets: [
      "Selected to scope and deliver client-facing technical solutions from requirements through deployment.",
      "Collaborating across teams to translate stakeholder needs into clear roadmaps, technical plans, and launch-ready solutions.",
    ],
    skills: ["Product Strategy", "Roadmap Planning", "Stakeholder Communication", "Technical Consulting", "Agile"],
  },
  {
    title: "Teaching Assistant — CS 122: Advanced Python",
    organization: "San José State University",
    location: "San Jose, CA",
    period: "Jun 2026 – Present",
    bullets: [
      "Evaluating advanced Python assignments and providing structured feedback to improve code quality and problem-solving.",
      "Helping students understand debugging approaches, programming concepts, and technical best practices.",
    ],
    skills: ["Python", "Technical Communication", "Code Review", "Debugging", "Mentorship"],
  },
  {
    title: "Financial Director | Operations & Process",
    organization: "Alpha Phi Fraternity",
    location: "San Jose, CA",
    period: "Dec 2025 – Present",
    bullets: [
      "Improved on-time payments by 40% by redesigning billing, tracking, and follow-up workflows.",
      "Standardized operational processes for 100+ members to improve consistency, accountability, and execution.",
    ],
    skills: ["Process Improvement", "Operations", "Workflow Design", "Data Tracking", "Leadership"],
  },
]

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Where I've Led & Delivered</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="transition-shadow duration-300 hover:shadow-md">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-1">
                    <h3 className="text-lg font-semibold leading-tight">{exp.title}</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs font-medium">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-foreground/90 mb-0.5">{exp.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>

                  <ul className="space-y-1.5 mb-4 pl-4 list-disc marker:text-muted-foreground/60 text-sm text-muted-foreground leading-relaxed">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs font-normal px-2 py-0.5 text-muted-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
