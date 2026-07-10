"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin } from "lucide-react"

type ExperienceItem = {
  title: string
  organization: string
  location: string
  period: string
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "AI/ML Fellow",
    organization: "Cornell Tech — Break Through Tech Program",
    location: "Remote",
    period: "Mar 2026 – Present",
    highlights: [
      "Selected from 4,300+ applicants to join a year-long ML fellowship focused on real-world, data-driven projects",
      "Developing skills in Python, data analysis, and machine learning through structured training and coursework",
      "Collaborating with peers and mentors on industry-driven projects by scoping and evaluating models",
    ],
  },
  {
    title: "Engineering Consultant Ambassador",
    organization: "Responsible Computing Club (RCC), SJSU",
    location: "San Jose, CA",
    period: "May 2026 – Present",
    highlights: [
      "Selected to scope and deliver client-facing technical solutions from requirements through deployment",
      "Responsible for roadmap decisions, cross-functional coordination, and launch readiness across projects",
    ],
  },
  {
    title: "Teaching Assistant — CS 122: Advanced Python",
    organization: "San Jose State University",
    location: "San Jose, CA",
    period: "Jun 2026 – Present",
    highlights: [
      "Evaluated advanced Python assignments and delivered structured feedback to support code quality",
      "Strengthened technical communication by explaining complex programming concepts and debugging approaches",
    ],
  },
  {
    title: "Financial Director | Operations & Process",
    organization: "Alpha Phi Fraternity",
    location: "San Jose, CA",
    period: "Dec 2025 – Present",
    highlights: [
      "Improved on-time payments by 40% by designing and implementing structured billing and tracking workflows",
      "Managed financial operations for 100+ members by overseeing billing, collections, and policy enforcement",
      "Standardized financial processes by improving tracking systems and ensuring consistent execution across operations",
    ],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where I've Led & Delivered</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                      </div>
                      <p className="text-muted-foreground font-medium">{exp.organization}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit shrink-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
