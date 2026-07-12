"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-4 text-balance">
              Hi, I&apos;m <span className="text-primary">Sarah Khadder</span>
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Computer Science Student @ San José State University
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
              Interested in Product Management, AI, and Human-Centered Technology.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I bridge product vision and technical execution — scoping roadmaps, coordinating cross-functional teams,
              and shipping solutions that drive measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("experience")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://docs.google.com/document/d/18bAf_pm8XwqEDD-2IFo0SrGpMLRSUnl1hba9pU7iCUU/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/skhadder" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                  href="https://www.linkedin.com/in/sarah-khadder-ba1590325/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://x.com/ssarahhk_" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto aspect-square"
          >
            {/* soft mint glow */}
            <div className="absolute -inset-6 bg-primary/15 rounded-full blur-3xl"></div>
            {/* subtle gold ring */}
            <div className="absolute inset-0 rounded-full ring-1 ring-gold/50 p-2">
              <div className="w-full h-full rounded-full ring-1 ring-primary/20"></div>
            </div>
            <div className="absolute inset-3 bg-muted rounded-full overflow-hidden shadow-xl">
              <img
                src="/sarah-headshot.png"
                alt="Portrait of Sarah Khadder"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 40%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}
