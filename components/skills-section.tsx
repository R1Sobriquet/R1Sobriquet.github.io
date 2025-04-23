"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function SkillsSection() {
  const programmingSkills = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "PHP", level: 65 },
  ]

  const frameworkSkills = [
    { name: "React", level: 75 },
    { name: "Bootstrap", level: 80 },
  ]

  const toolSkills = [
    { name: "WinDev", level: 70 },
    { name: "WebDev", level: 70 },
    { name: "Git", level: 65 },
    { name: "SQL", level: 60 },
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
      language: "python",
      title: "Exemple Python - Analyse de données",
      code: `import pandas as pd
import matplotlib.pyplot as plt

# Charger les données
data = pd.read_csv('donnees.csv')

# Afficher les premières lignes
print(data.head())

# Statistiques descriptives
print(data.describe())

# Créer un graphique
plt.figure(figsize=(10, 6))
data['valeur'].plot(kind='hist', bins=20)
plt.title('Distribution des valeurs')
plt.xlabel('Valeur')
plt.ylabel('Fréquence')
plt.savefig('distribution.png')
plt.show()`,
    },
  ]

  return (
    <section id="skills" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes compétences</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Les technologies et outils que je maîtrise
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
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
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Compétences du référentiel BTS SIO SLAM</CardTitle>
              <CardDescription>Compétences acquises selon le référentiel officiel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Bloc 1: Support et mise à disposition de services informatiques
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gérer le patrimoine informatique</li>
                    <li>Répondre aux incidents et aux demandes d&apos;assistance</li>
                    <li>Développer la présence en ligne de l&apos;organisation</li>
                    <li>Travailler en mode projet</li>
                    <li>Mettre à disposition des utilisateurs un service informatique</li>
                    <li>Organiser son développement professionnel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Bloc 2: Conception et développement d&apos;applications
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Concevoir et développer une solution applicative</li>
                    <li>Assurer la maintenance corrective ou évolutive d&apos;une solution applicative</li>
                    <li>Gérer les données</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Exemples de code</CardTitle>
              <CardDescription>Quelques exemples de code dans différents langages</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript/React</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
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
        </div>
      </div>
    </section>
  )
}
