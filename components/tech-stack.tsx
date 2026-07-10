"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Wrench, Kanban } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Languages",
      description: "Programming languages for building and shipping products",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      ],
    },
    frameworks: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frameworks",
      description: "Frameworks and libraries for full-stack development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 75 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Developer Tools",
      description: "Platforms and tools for development and deployment",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Linux", level: 85 },
        { name: "Firebase", level: 90 },
        { name: "Supabase", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "Vercel", level: 90 },
        { name: "VS Code", level: 90 },
        { name: "Cursor", level: 85 },
        { name: "Claude Code", level: 85 },
      ],
    },
    pm: {
      icon: <Kanban className="h-6 w-6" />,
      title: "PM & Process",
      description: "Product management, delivery, and collaboration skills",
      skills: [
        { name: "Agile/Scrum", level: 90 },
        { name: "JIRA", level: 85 },
        { name: "SDLC", level: 90 },
        { name: "Roadmap Planning", level: 90 },
        { name: "Stakeholder Communication", level: 95 },
        { name: "System Design (UML)", level: 80 },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical & Process Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-stone-300 rounded-full h-2 border border-stone-400">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-stone-600 h-2 rounded-full shadow-sm"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 4 && (
                        <Badge variant="secondary">+{category.skills.length - 4} more</Badge>
                      )}
                    </div>
                  )}
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
