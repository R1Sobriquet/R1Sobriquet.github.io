"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { AnimatedProgress } from "@/components/animated-progress"
import { SkillRadarChart } from "@/components/skill-radar-chart"

export default function SkillsSection() {
  const programmingSkills = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 85 },
    { name: "PHP", level: 65 },
  ]

  const frameworkSkills = [
    { name: "React", level: 75 },
    { name: "Bootstrap", level: 80 },
    { name: "Symfony", level: 65 },
  ]

  const toolSkills = [
    { name: "WinDev", level: 70 },
    { name: "WebDev", level: 70 },
    { name: "Git", level: 90 },
    { name: "SQL", level: 85 },
  ]

  const softSkills = [
    { name: "Adaptabilité", level: 90 },
    { name: "Capacité d'analyse", level: 85 },
    { name: "Rigueur et sens du détail", level: 80 },
    { name: "Sens relationnel", level: 85 },
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

  // Combine all skills for radar chart
  const allSkills = [
    ...programmingSkills.slice(0, 4),
    ...frameworkSkills.slice(0, 3),
    ...toolSkills.slice(0, 3),
  ]

  return (
    <section id="skills" className="py-12">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes compétences</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Les technologies et outils que je maîtrise
              </p>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-8">
          <StaggerItem>
            <Card>
              <CardHeader>
                <CardTitle>Langages de programmation</CardTitle>
                <CardDescription>Mes compétences en langages de programmation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {programmingSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <AnimatedProgress value={skill.level} />
                    </div>
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
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <AnimatedProgress value={skill.level} />
                    </div>
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
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <AnimatedProgress value={skill.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardHeader>
                <CardTitle>Compétences transversales</CardTitle>
                <CardDescription>Mes compétences non techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {softSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <AnimatedProgress value={skill.level} />
                    </div>
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