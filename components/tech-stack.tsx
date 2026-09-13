"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Wrench, Kanban } from "lucide-react"

export default function TechStack() {
  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Languages",
      description: "Programming languages for building and shipping products",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++", "HTML", "CSS"],
    },
    frameworks: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frameworks",
      description: "Frameworks and libraries for full-stack development",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "Pandas", "NumPy"],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Developer Tools",
      description: "Platforms and tools for development and deployment",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "Firebase",
        "Supabase",
        "MongoDB",
        "MySQL",
        "Vercel",
        "VS Code",
        "Cursor",
        "Claude Code",
      ],
    },
    pm: {
      icon: <Kanban className="h-6 w-6" />,
      title: "PM & Process",
      description: "Product management, delivery, and collaboration skills",
      skills: [
        "Agile/Scrum",
        "JIRA",
        "SDLC",
        "Roadmap Planning",
        "Stakeholder Communication",
        "System Design (UML)",
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20">
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
            Skills
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Technical & Process Skills</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                    {category.skills.length > 4 && (
                      <Badge variant="secondary" className="font-normal">
                        +{category.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            I combine technical fluency with product and process skills — able to scope roadmaps, communicate with
            stakeholders, and collaborate with engineering teams to ship solutions end to end.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
