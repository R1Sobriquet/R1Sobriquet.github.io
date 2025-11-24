"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const projects = [
    {
      id: "project1",
      title: "Application de planning WinDev",
      description: "Application métier de gestion de planning développée en WinDev pour MyDesyn.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      technologies: ["WinDev", "HFSQL", "WLangage"],
      category: "desktop",
      github: null,
      demo: null,
      context:
        "Projet professionnel réalisé dans le cadre de mon alternance chez MyDesyn. Application métier pour la gestion et l'optimisation des plannings.",
      problem:
        "Besoin d'un outil de planification robuste et adapté aux processus métier spécifiques de l'entreprise.",
      solution:
        "Développement d'une application desktop WinDev avec gestion de base de données HFSQL, interface intuitive et fonctionnalités avancées de planification.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Gérer les données",
        "Mettre à disposition des utilisateurs un service informatique",
      ],
      isPrivate: true,
    },
    {
      id: "project2",
      title: "Pipeline d'enrichissement de données IA",
      description: "Projet d'IA axé sur le nettoyage, l'enrichissement et la modélisation de données.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      technologies: ["Python", "Pandas", "Machine Learning", "Data Science"],
      category: "desktop",
      github: "https://github.com/R1Sobriquet/pythonPipelineEnrichissement",
      demo: null,
      context:
        "Projet professionnel d'intelligence artificielle pour automatiser le traitement et l'enrichissement de grandes quantités de données.",
      problem:
        "Nécessité de nettoyer, enrichir et modéliser efficacement des données brutes pour analyse et prise de décision.",
      solution:
        "Développement d'un pipeline Python utilisant des techniques de data science et machine learning pour le traitement automatisé des données.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Gérer les données",
        "Analyser et optimiser les processus",
      ],
    },
    {
      id: "project3",
      title: "EsportApp - Plateforme e-sport",
      description: "Application web de rencontre entre joueurs d'e-sport.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "API REST", "MongoDB"],
      category: "web",
      github: "https://github.com/R1Sobriquet/Esportapp/tree/DirectAPI",
      demo: null,
      context:
        "Projet personnel visant à créer une plateforme pour connecter les joueurs d'e-sport et faciliter la création d'équipes.",
      problem:
        "Les joueurs d'e-sport ont du mal à trouver des coéquipiers de niveau similaire et partageant les mêmes objectifs.",
      solution:
        "Développement d'une application web avec système de matching, profils joueurs, et API REST pour la gestion des données.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Développer la présence en ligne de l'organisation",
        "Travailler en mode projet",
      ],
    },
    {
      id: "project4",
      title: "LeedCar - Application de taxi",
      description: "Application web professionnelle de services de taxi (en production).",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      category: "web",
      github: "https://github.com/R1Sobriquet/LeedCarFinished",
      demo: null,
      context:
        "Projet professionnel encore en phase de production. Application complète de gestion de courses de taxi.",
      problem:
        "Besoin d'une plateforme moderne et fiable pour la gestion des courses, chauffeurs et clients.",
      solution:
        "Application web full-stack avec interface utilisateur intuitive, système de réservation en temps réel et tableau de bord administrateur.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Gérer les données",
        "Mettre à disposition des utilisateurs un service informatique",
      ],
      isProduction: true,
    },
    {
      id: "project5",
      title: "WildZone - Site vitrine chasse",
      description: "Site vitrine ambiance 'Club privé' pour un magasin de chasse.",
      image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Design UX/UI"],
      category: "web",
      github: "https://github.com/R1Sobriquet/WildZone",
      demo: null,
      context:
        "Projet de site vitrine pour un magasin de chasse, avec une ambiance exclusive et haut de gamme.",
      problem:
        "Créer une identité web forte pour un magasin de chasse visant une clientèle premium.",
      solution:
        "Développement d'un site web au design soigné, avec une atmosphère 'club privé' et une présentation élégante des produits.",
      skills: [
        "Développer la présence en ligne de l'organisation",
        "Concevoir une interface utilisateur",
        "Travailler en mode projet",
      ],
    },
    {
      id: "project6",
      title: "Projet de Prévision de Commandes",
      description: "Système professionnel de prévision de demande basé sur l'analyse de données historiques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: ["Python", "Pandas", "Machine Learning", "Data Analysis"],
      category: "desktop",
      github: "https://github.com/R1Sobriquet/PredictionProject",
      demo: null,
      context:
        "Projet professionnel de prévision de demande pour optimiser la gestion des stocks et la planification des ressources.",
      problem:
        "Besoin d'anticiper les commandes futures pour améliorer la gestion des stocks et réduire les coûts.",
      solution:
        "Développement d'un système de prévision basé sur l'analyse de données historiques de commandes 2024 pour prédire les commandes 2025 avec des techniques de machine learning.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Gérer les données",
        "Analyser et optimiser les processus",
      ],
    },
    {
      id: "project7",
      title: "Projet RPG - Gestion des Personnages",
      description: "Système de gestion des personnages pour un jeu de rôle (RPG).",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
      technologies: ["Python", "POO", "Game Design"],
      category: "desktop",
      github: "https://github.com/R1Sobriquet/rpg_project",
      demo: null,
      context:
        "Projet de création d'un système de gestion des personnages pour un nouveau jeu de rôle. Les joueurs doivent pouvoir créer et gérer leurs personnages avec différentes caractéristiques et capacités.",
      problem:
        "Créer un système flexible et extensible pour gérer les personnages d'un RPG avec leurs statistiques, compétences et équipements.",
      solution:
        "Développement d'un système orienté objet en Python permettant la création, la gestion et l'évolution des personnages de jeu.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Programmation orientée objet",
        "Modélisation de données",
      ],
    },
    {
      id: "project8",
      title: "Gestion de Bar - Java UML POO",
      description: "Simulation de gestion de bar en Java avec modélisation UML.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop",
      technologies: ["Java", "UML", "POO", "Design Patterns"],
      category: "desktop",
      github: "https://github.com/R1Sobriquet/Gestion-de-bar-Java_UML_POO-",
      demo: null,
      context:
        "Projet académique de simulation d'un système de gestion de bar avec modélisation UML complète et implémentation en Java.",
      problem:
        "Modéliser et implémenter un système de gestion complet pour un bar incluant la gestion des stocks, des commandes et du personnel.",
      solution:
        "Développement d'une application Java suivant les principes de la POO avec une modélisation UML préalable (diagrammes de classes, séquences, cas d'utilisation).",
      skills: [
        "Concevoir et développer une solution applicative",
        "Modélisation UML",
        "Programmation orientée objet",
      ],
    },
    {
      id: "project9",
      title: "Jeu mobile (En développement)",
      description: "Application mobile d'un jeu simple - Projet à venir.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      technologies: ["React Native", "Mobile", "Game Dev"],
      category: "mobile",
      github: null,
      demo: null,
      context:
        "Projet en cours de conception. Application mobile ludique pour découvrir le développement de jeux mobiles.",
      problem:
        "Apprentissage du développement mobile et des mécaniques de jeu.",
      solution:
        "Développement d'une application mobile simple avec React Native pour se familiariser avec le développement de jeux.",
      skills: [
        "Concevoir et développer une solution applicative",
        "Développement mobile",
        "Créativité et innovation",
      ],
      isComingSoon: true,
    },
  ]

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

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    category: string
    github: string | null
    demo: string | null
    context: string
    problem: string
    solution: string
    skills: string[]
    isPrivate?: boolean
    isProduction?: boolean
    isComingSoon?: boolean
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background via-background to-primary/5">
      <motion.div
        className="relative aspect-video overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </motion.div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
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