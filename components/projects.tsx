"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

type Project = {
  id: number
  title: string
  role: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Verdict",
      role: "Product Lead — HackHayward",
      shortDescription:
        "Scoped and shipped an AI-driven VC memo platform in 24 hours, orchestrating 6 parallel LLM calls for market sizing.",
      description: "AI-driven startup viability platform built at HackHayward hackathon.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js 15", "TypeScript", "Perplexity API", "Vercel"],
      features: [
        "Scoped MVP and sequenced cross-functional workstreams for 24-hour delivery",
        "Orchestrated 6 parallel LLM calls to generate VC-style memos with market sizing in 60 seconds",
        "Engineered 8-dimension viability scoring translating complex startup data into clear investment reports",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "At HackHayward, I led product scoping and delivery for Verdict — an AI-driven platform that generates VC-style investment memos. I defined the MVP scope, sequenced work across the team, and shipped within 24 hours. The platform orchestrates 6 parallel LLM calls to produce market sizing and viability analysis in under 60 seconds, with an 8-dimension scoring system that translates complex startup data into actionable investment reports.",
    },
    {
      id: 2,
      title: "Preoperative Assessment Tool",
      role: "Project Lead — NorthBay Health",
      shortDescription:
        "Automated pre-op orders across 50+ protocols for a hospital processing 800+ monthly procedures.",
      description: "Clinical workflow automation tool for NorthBay Health.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "HTML", "Tailwind CSS"],
      features: [
        "Automated pre-op orders across 50+ clinical protocols",
        "Gathered weekly stakeholder feedback to iteratively refine output logic",
        "Standardized clinical workflows and reduced process variation hospital-wide",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "I led development of a preoperative assessment tool for NorthBay Health, automating pre-op orders across 50+ protocols for a hospital with 800+ monthly procedures. I gathered weekly stakeholder feedback to iteratively refine output logic and meet deployment standards, ultimately standardizing clinical workflows and reducing process variation across hospital-wide operations.",
    },
    {
      id: 3,
      title: "Chore Assignment System",
      role: "Product Owner — Alpha Phi",
      shortDescription:
        "Reduced scheduling overhead by 95% for 51 residents; scaled to 200+ residents across multiple communities.",
      description: "End-to-end chore management system for sorority housing operations.",
      image: "/choremanagementthumbnail.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Firebase", "Vercel"],
      features: [
        "Reduced scheduling overhead by 95% for 51 residents through automated fair rotation",
        "Sequenced critical path dependencies across data, admin, and reporting for on-time delivery",
        "Scaled system to 200+ residents across multiple communities",
      ],
      demoLink: "https://chores-app-indol.vercel.app/director",
      githubLink: "https://github.com/skhadder/chores-app",
      fullDescription:
        "I owned end-to-end delivery of a chore assignment system for Alpha Phi housing operations. By automating weekly chore distribution with a fair rotation algorithm, I reduced scheduling overhead by 95% for 51 residents. I sequenced critical path dependencies across data, admin, and reporting workstreams to ensure on-time delivery, then scaled the system to support 200+ residents across multiple communities.",
    },
    {
      id: 4,
      title: "MindPlay",
      role: "Project Manager",
      shortDescription:
        "Driving sprint-based delivery of a real-time multiplayer game with cross-team coordination.",
      description: "Real-time multiplayer gameplay platform.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "MongoDB", "Express", "React", "Node.js", "WebSockets"],
      features: [
        "Managing task assignment, iteration cycles, and cross-team coordination",
        "Sprint-based delivery with structured iteration and milestone tracking",
        "Real-time multiplayer gameplay using WebSockets with scalable synced updates",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "I'm driving sprint-based delivery for MindPlay, a real-time multiplayer game platform. I manage task assignment, iteration cycles, and cross-team coordination across the project. The team is building real-time multiplayer gameplay using WebSockets, structuring backend logic for scalable synced updates across players.",
    },
  ]

  return (
    <section id="projects" className="py-20">
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
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <p className="text-xs text-primary font-medium mb-1">{project.role}</p>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Outcomes:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            {project.githubLink !== "#" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.githubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            )}
                            {project.demoLink !== "#" && (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.demoLink, "_blank")
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <p className="text-primary font-medium mt-1">{selectedProject.role}</p>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Outcomes:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink !== "#" && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.demoLink !== "#" && (
                  <Button asChild>
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
