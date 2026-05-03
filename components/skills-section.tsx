"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { CodeBlock } from "@/components/code-block"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { AnimatedProgress } from "@/components/animated-progress"
import { SkillRadarChart } from "@/components/skill-radar-chart"
import { getProjectsBySkill } from "@/lib/projects-data"
import { Github, ArrowRight, Network, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function SkillsSection() {
  const getLevelLabel = (level: number): string => {
    if (level >= 80) return "Avancé"
    if (level >= 60) return "Intermédiaire"
    return "Débutant"
  }

  const programmingSkills = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 73 },
    { name: "Python", level: 85 },
    { name: "PHP", level: 48 },
  ]

  const frameworkSkills = [
    { name: "Next.js", level: 78 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap", level: 58 },
    { name: "Symfony", level: 48 },
  ]

  const toolSkills = [
    { name: "WinDev", level: 75 },
    { name: "WebDev", level: 68 },
    { name: "Git", level: 90 },
    { name: "SQL", level: 85 },
  ]

  const networkSystemSkills = [
    "Mise en place de réseaux virtuels (notions de base)",
    "Configuration de services DHCP/DNS sous Linux",
    "Gestion primaire de l'administration d'un domaine",
  ]

  const cybersecuritySkills = [
    "Sécurisation de bases de données et gestion des accès",
    "Protection des données sensibles (gestion des .env et chiffrement)",
    "Prévention des vulnérabilités Web courantes (OWASP Top 10)",
  ]

  const softSkills = [
    "Adaptabilité",
    "Capacité d'analyse",
    "Rigueur et sens du détail",
    "Sens relationnel",
    "Travail d'équipe",
    "Résolution de problèmes",
  ]

  const codeExamples = [
    {
      language: "javascript",
      title: "Exemple React - Composant Counter",
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Compteur: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
      <button onClick={() => setCount(count - 1)}>
        Décrémenter
      </button>
    </div>
  );
}

export default Counter;`,
    },
    {
      language: "php",
      title: "Exemple PHP - Connexion à une base de données",
      code: `<?php
// Paramètres de connexion à la base de données
$servername = "localhost";
$username = "utilisateur";
$password = "motdepasse";
$dbname = "ma_base";

// Création de la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("La connexion a échoué: " . $conn->connect_error);
}

// Requête SQL
$sql = "SELECT id, nom, prenom FROM utilisateurs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Affichage des données
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Nom: " . $row["nom"]. " - Prénom: " . $row["prenom"]. "<br>";
    }
} else {
    echo "0 résultats";
}

$conn->close();
?>`,
    },
    {
      language: "windev",
      title: "Exemple Windev - Boucle pour remplir un tableau d'objets",
      code: `// Déclaration du tableau d'objets
tabClients est un tableau de stClient

// Déclaration d'une variable client
unClient est un stClient

// Boucle pour remplir le tableau avec 10 clients
POUR i = 1 À 10
	// Initialisation de l'objet client
	unClient.nID = i
	unClient.sNom = "Client " + i
	unClient.sEmail = "client" + i + "@exemple.com"
	unClient.dDateCreation = DateSys()

	// Ajout de l'objet dans le tableau
	Ajoute(tabClients, unClient)
FIN

// Affichage du contenu du tableau
POUR TOUT unClient DE tabClients
	Trace("ID: " + unClient.nID + " - Nom: " + unClient.sNom)
FIN`,
    },
  ]

  const allSkills = [
    ...programmingSkills.slice(0, 5),
    ...frameworkSkills.slice(0, 4),
    ...toolSkills.slice(0, 3),
  ]

  const renderSkillWithHoverCard = (skill: { name: string; level: number }) => {
    const relatedProjects = getProjectsBySkill(skill.name)

    const skillRow = (
      <div className="space-y-2 p-2 rounded-lg transition-all duration-300 hover:bg-accent/50 hover:scale-105 cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="font-medium">{skill.name}</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {getLevelLabel(skill.level)}
            </Badge>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </div>
        <AnimatedProgress value={skill.level} />
      </div>
    )

    if (relatedProjects.length === 0) {
      return skillRow
    }

    return (
      <HoverCard openDelay={150} closeDelay={100}>
        <HoverCardTrigger asChild>{skillRow}</HoverCardTrigger>
        <HoverCardContent className="w-80" align="start">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold">Projets utilisant {skill.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">
                {relatedProjects.length} projet{relatedProjects.length > 1 ? "s" : ""} associé
                {relatedProjects.length > 1 ? "s" : ""}
              </p>
            </div>
            <ul className="space-y-2">
              {relatedProjects.map((project) => (
                <li
                  key={project.id}
                  className="flex items-center justify-between gap-2 p-2 rounded-md hover:bg-accent transition-colors"
                >
                  <Link
                    href="#projects"
                    className="flex-1 text-sm font-medium hover:text-primary hover:underline truncate"
                  >
                    {project.title}
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Code GitHub de ${project.title}`}
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="#projects"
              className="flex items-center gap-1 text-xs font-medium text-primary hover:underline pt-1 border-t"
            >
              Voir tous les projets <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  }

  return (
    <section id="skills" className="py-12">
      <div className="container px-4 sm:px-6 md:px-8">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes compétences</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Les technologies et outils que je maîtrise
              </p>
              <p className="mx-auto max-w-[700px] text-xs text-muted-foreground italic">
                Astuce : survolez une compétence technique pour découvrir les projets associés.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 mt-8">
          <StaggerItem>
            <Card>
              <CardHeader>
                <CardTitle>Langages de programmation</CardTitle>
                <CardDescription>Mes compétences en langages de programmation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {programmingSkills.map((skill) => (
                    <div key={skill.name}>{renderSkillWithHoverCard(skill)}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardHeader>
                <CardTitle>Frameworks et bibliothèques</CardTitle>
                <CardDescription>Mes compétences en frameworks et bibliothèques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {frameworkSkills.map((skill) => (
                    <div key={skill.name}>{renderSkillWithHoverCard(skill)}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardHeader>
                <CardTitle>Outils et environnements</CardTitle>
                <CardDescription>Mes compétences en outils et environnements de développement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {toolSkills.map((skill) => (
                    <div key={skill.name}>{renderSkillWithHoverCard(skill)}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-primary" />
                  <CardTitle>Réseau et Système</CardTitle>
                </div>
                <CardDescription>Notions de base acquises en formation BTS SIO</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {networkSystemSkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span className="text-sm flex-1">{skill}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t">
                  <Badge variant="outline" className="text-xs">Niveau basique</Badge>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle>Cybersécurité</CardTitle>
                </div>
                <CardDescription>Orientation Web et Data</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cybersecuritySkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span className="text-sm flex-1">{skill}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t">
                  <Badge variant="outline" className="text-xs">Niveau intermédiaire</Badge>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardHeader>
                <CardTitle>Compétences transversales</CardTitle>
                <CardDescription>Mes qualités professionnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>

        <AnimatedSection className="mt-12">
          <SkillRadarChart
            skills={allSkills}
            title="Vue d'ensemble des compétences techniques"
            description="Visualisation graphique de mes principales compétences techniques"
          />
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Exemples de code</CardTitle>
              <CardDescription>Quelques exemples de code dans différents langages</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript/React</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                  <TabsTrigger value="windev">Windev</TabsTrigger>
                </TabsList>
                {codeExamples.map((example) => (
                  <TabsContent key={example.language} value={example.language} className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                    <CodeBlock language={example.language} code={example.code} />
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
