"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { motion } from "framer-motion"
import { projects, type Project } from "@/lib/projects-data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes projets</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez les projets que j&apos;ai réalisés pendant ma formation
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="web" className="mt-6">
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.category === "web")
                .map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.category === "mobile")
                .map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="desktop" className="mt-6">
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.category === "desktop")
                .map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const primaryLink = project.github || project.demo

  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background via-background to-primary/5">
      <Link
        href={primaryLink || "#"}
        target={primaryLink ? "_blank" : undefined}
        rel={primaryLink ? "noopener noreferrer" : undefined}
        className={primaryLink ? "cursor-pointer" : "cursor-default"}
        onClick={(e) => !primaryLink && e.preventDefault()}
      >
        <motion.div
          className="relative aspect-video overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </motion.div>
      </Link>
      <CardHeader>
        <Link
          href={primaryLink || "#"}
          target={primaryLink ? "_blank" : undefined}
          rel={primaryLink ? "noopener noreferrer" : undefined}
          className={primaryLink ? "cursor-pointer hover:underline" : "cursor-default"}
          onClick={(e) => !primaryLink && e.preventDefault()}
        >
          <CardTitle>{project.title}</CardTitle>
        </Link>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.isPrivate && (
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
              Code privé
            </Badge>
          )}
          {project.isProduction && (
            <Badge variant="outline" className="bg-green-500/10 text-green-700 dark:text-green-400">
              En production
            </Badge>
          )}
          {project.isComingSoon && (
            <Badge variant="outline" className="bg-blue-500/10 text-blue-700 dark:text-blue-400">
              À venir
            </Badge>
          )}
          {project.isEnhanced && (
            <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400">
              ✨ Version Animée
            </Badge>
          )}
          {project.isClassic && (
            <Badge variant="outline" className="bg-gray-500/10 text-gray-700 dark:text-gray-400">
              📋 Version Simple
            </Badge>
          )}
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details" className="border-b-0">
            <AccordionTrigger className="text-sm font-bold text-primary underline underline-offset-4 decoration-2 hover:no-underline hover:bg-primary/10 rounded-md px-3 py-2 transition-colors data-[state=open]:bg-primary/10">
              Voir les détails du projet
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="font-semibold text-sm">Contexte</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.context}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Problématique</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Solution technique</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Compétences mobilisées</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                    {project.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {project.github ? (
          <Button variant="outline" asChild>
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code source
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            <Github className="mr-2 h-4 w-4" />
            {project.isPrivate ? "Code privé" : "Pas de lien"}
          </Button>
        )}
        {project.demo && (
          <Button asChild>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Démo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
