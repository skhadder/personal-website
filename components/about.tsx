"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Kanban } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Building at the Intersection of Technology, Product, and Impact
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm a Computer Science student at San José State University with a growing interest in product
                management, AI, and building technology that solves real-world problems. Through the Cornell Tech Break
                Through Tech AI/ML Fellowship, consulting engagements, and software projects, I've developed a strong
                interest in translating user needs into practical, impactful solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                I've had the opportunity to build products in environments where the stakes are real—from developing a
                preoperative assessment tool for NorthBay Health to shipping AI-powered applications during hackathons and
                contributing to client-facing technical projects. These experiences have shown me that I enjoy
                understanding user problems just as much as building the technology behind the solution.
              </p>
              <p className="text-muted-foreground">
                I'm particularly interested in opportunities at the intersection of technology, strategy, and
                collaboration, where I can work closely with engineers, users, and stakeholders to shape products that
                create meaningful impact.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Building with AI</h4>
                      <p className="text-muted-foreground">
                        Applying machine learning and modern AI tools to develop practical, user-centered solutions
                        through the Cornell Tech Break Through Tech Fellowship and hands-on projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Product Thinking</h4>
                      <p className="text-muted-foreground">
                        Breaking down ambiguous problems, gathering feedback, and translating user needs into thoughtful
                        product decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Kanban className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Technical Execution</h4>
                      <p className="text-muted-foreground">
                        Building full-stack applications while collaborating across technical and non-technical teams to
                        bring ideas from concept to deployment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
