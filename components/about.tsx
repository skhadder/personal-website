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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
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
              <h3 className="font-serif text-2xl font-bold mb-4">
                Building at the Intersection of Technology, Product, and Impact
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm a Computer Science student at San José State University with a growing interest in product
                management, AI, and building technology that actually solves problems. As a Cornell Tech Break Through
                Tech AI/ML Fellow (selected from over 4,300 applicants), I've spent the past year translating user
                needs into working software, from a preoperative assessment tool built for NorthBay Health to full-stack
                scheduling systems used by real communities.
              </p>
              <p className="text-muted-foreground">
                What keeps me interested is the space between the two, understanding why a feature matters as much as how
                to build it. I like sitting close to the user problem, gathering feedback, and making the tradeoffs that
                turn an ambiguous ask into something people actually use.
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
                        through Cornell Tech's AI/ML Fellowship and hands-on projects.
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
