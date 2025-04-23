import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: "project1",
      title: "Application métier Windev",
      description: "Application de gestion développée avec Windev pour un client de MyDesyn.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Windev", "HFSQL", "SQL"],
      category: "desktop",
      github: "https://github.com/erwannlerouzic/windev-app",
      demo: null,
      context:
        "Projet réalisé dans le cadre de mon alternance chez MyDesyn. L'objectif était de développer une application métier pour la gestion interne d'une entreprise.",
      problem:
        "Le client avait besoin d'une application sur mesure pour gérer ses processus internes, avec une interface adaptée à ses besoins spécifiques.",
      solution:
        "Développement d'une application Windev avec une interface intuitive et des fonctionnalités personnalisées pour répondre aux besoins du client.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Gérer les données",
        "Mettre à disposition des utilisateurs un service informatique",
      ],
    },
    {
      id: "project2",
      title: "Interface utilisateur React",
      description: "Développement de composants React pour un site web d'entreprise.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "JavaScript", "HTML/CSS", "Bootstrap"],
      category: "web",
      github: "https://github.com/erwannlerouzic/react-components",
      demo: "https://react-components-demo.vercel.app",
      context:
        "Projet réalisé lors de mon stage chez D2Comm. L'objectif était de créer des composants React réutilisables pour un site web d'entreprise.",
      problem: "Le client souhaitait moderniser son site web avec une interface plus interactive et responsive.",
      solution:
        "Création de composants React modulaires et réutilisables, avec une attention particulière à l'expérience utilisateur et à la compatibilité mobile.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Développer la présence en ligne de l'organisation",
        "Travailler en mode projet",
      ],
    },
    {
      id: "project3",
      title: "Application de gestion de bibliothèque",
      description: "Application web permettant la gestion des emprunts et des retours de livres pour une médiathèque.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      category: "web",
      github: "https://github.com/erwannlerouzic/library-management",
      demo: null,
      context:
        "Projet réalisé dans le cadre de mon stage à la médiathèque du Tampon. L'objectif était de simplifier la gestion des emprunts et des retours de livres.",
      problem:
        "La médiathèque avait besoin d'un système informatisé pour gérer les emprunts et les retours de livres, ainsi que pour suivre l'état du stock.",
      solution:
        "Développement d'une application web avec PHP et MySQL, permettant aux bibliothécaires de gérer facilement les emprunts et les retours, ainsi que de consulter l'état du stock.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Gérer les données",
        "Mettre à disposition des utilisateurs un service informatique",
      ],
    },
    {
      id: "project4",
      title: "Portfolio personnel",
      description: "Site web personnel présentant mon parcours, mes compétences et mes réalisations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      category: "web",
      github: "https://github.com/erwannlerouzic/portfolio",
      demo: "https://erwann-lerouzic.vercel.app",
      context:
        "Projet personnel réalisé dans le cadre de ma formation BTS SIO. L'objectif était de créer un portfolio professionnel pour présenter mon parcours et mes compétences.",
      problem:
        "Besoin de mettre en valeur mon parcours, mes compétences et mes réalisations de manière professionnelle et accessible.",
      solution:
        "Développement d'un site web responsive avec Next.js et Tailwind CSS, présentant de manière claire et structurée mon parcours, mes compétences et mes réalisations.",
      skills: ["Développer la présence en ligne de l'organisation", "Organiser son développement professionnel"],
    },
  ]

  return (
    <section id="projects" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes projets</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Découvrez les projets que j&apos;ai réalisés pendant ma formation
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.category === "web")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.category === "mobile")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="desktop" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.category === "desktop")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    category: string
    github: string
    demo: string | null
    context: string
    problem: string
    solution: string
    skills: string[]
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Contexte et problématique</h4>
            <p className="text-sm text-muted-foreground mt-1">{project.context}</p>
            <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold">Solution technique</h4>
            <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold">Compétences mobilisées</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code source
          </Link>
        </Button>
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
