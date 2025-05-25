import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  FileText,
  Database,
  Code,
  TestTube,
} from "lucide-react";
import Link from "next/link";

export default function ProfessionalRealizationsSection() {
  const realizations = [
    {
      id: "real1",
      number: "1",
      title: "Application de gestion MyDesyn",
      organization: "MyDesyn",
      period: "Décembre 2024 - Présent",
      location: "Agen, France",
      modality: "En équipe",
      competencesWorked: {
        concevoir: true,
        maintenir: true,
        gererDonnees: true,
      },
      conditions: {
        resourcesFournies: [
          "Cahier des charges client",
          "Base de données existante HFSQL",
          "Environnement de développement Windev",
          "Serveur de développement dédié",
          "Documentation technique Windev",
        ],
        resultatsAttendus: [
          "Application métier fonctionnelle",
          "Interface utilisateur ergonomique",
          "Module de gestion des données",
          "Documentation technique complète",
          "Tests unitaires et d'intégration",
        ],
      },
      resources: {
        documentaires: [
          "Documentation officielle Windev",
          "Standards de développement MyDesyn",
          "Guide d'architecture HFSQL",
          "Bonnes pratiques UX/UI métier",
        ],
        materielles: [
          "PC de développement (Intel i7, 16GB RAM)",
          "Serveur Windows Server 2019",
          "Base de données HFSQL Classic/Client-Serveur",
        ],
        logicielles: [
          "Windev 29",
          "HFSQL Control Center",
          "Git pour le versioning",
          "Figma pour les maquettes",
        ],
      },
      accessModalities: {
        identifiants: "Fournis par le tuteur entreprise",
        url: "http://dev.mydesyn.local/app",
        documentation: "/docs/mydesyn-app-documentation.pdf",
        codeSource: "Repository Git privé MyDesyn",
        presentation: "Démonstration en direct possible",
      },
      productions: [
        {
          type: "Application métier",
          description:
            "Interface de gestion complète avec modules clients, projets et facturation",
          technologies: ["Windev", "HFSQL", "SQL"],
          files: ["executable", "sources", "documentation"],
        },
        {
          type: "Base de données",
          description: "Schéma optimisé avec relations et contraintes métier",
          technologies: ["HFSQL", "SQL"],
          files: ["schema", "donnees-test", "procedures"],
        },
        {
          type: "Documentation",
          description: "Guide utilisateur et documentation technique",
          technologies: ["Word", "Visio"],
          files: ["guide-utilisateur", "doc-technique", "schemas"],
        },
      ],
    },
    {
      id: "real2",
      number: "2",
      title: "Application Web React - D2Comm",
      organization: "D2Comm",
      period: "Septembre - Décembre 2024",
      location: "Le Passage d'Agen, France",
      modality: "Seul(e)",
      competencesWorked: {
        concevoir: true,
        maintenir: false,
        gererDonnees: true,
      },
      conditions: {
        resourcesFournies: [
          "Maquettes graphiques Figma",
          "API REST existante",
          "Environnement de développement configuré",
          "Serveur de test",
          "Charte graphique entreprise",
        ],
        resultatsAttendus: [
          "Interface web responsive",
          "Composants React réutilisables",
          "Intégration API",
          "Tests fonctionnels",
          "Déploiement en production",
        ],
      },
      resources: {
        documentaires: [
          "Documentation React officielle",
          "Guide de style D2Comm",
          "Spécifications API REST",
          "Principes d'accessibilité web",
        ],
        materielles: [
          "PC de développement (AMD Ryzen 5, 16GB RAM)",
          "Serveur Linux Ubuntu 20.04",
          "CDN pour les assets statiques",
        ],
        logicielles: [
          "React 18",
          "Node.js",
          "VS Code",
          "Git/GitHub",
          "Bootstrap 5",
        ],
      },
      accessModalities: {
        identifiants: "Compte GitHub personnel",
        url: "https://demo.d2comm.fr/react-app",
        documentation: "/docs/react-app-documentation.pdf",
        codeSource: "https://github.com/erwannlerouzic/d2comm-react",
        presentation: "Portfolio en ligne accessible",
      },
      productions: [
        {
          type: "Application web",
          description: "SPA React avec routing et état global",
          technologies: ["React", "JavaScript", "CSS"],
          files: ["build", "sources", "tests"],
        },
        {
          type: "Composants UI",
          description: "Bibliothèque de composants réutilisables",
          technologies: ["React", "Storybook"],
          files: ["components", "storybook", "styles"],
        },
        {
          type: "Tests",
          description: "Suite de tests unitaires et d'intégration",
          technologies: ["Jest", "React Testing Library"],
          files: ["tests-unitaires", "tests-integration", "rapports"],
        },
      ],
    },
  ];

  return (
    <section id="professional-realizations" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Réalisations Professionnelles E6
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Fiches descriptives officielles pour l'épreuve E6 - Option SLAM
            </p>
          </div>
        </div>

        {/* Bouton de téléchargement du tableau de synthèse */}
        <div className="flex justify-center mt-6 mb-8">
          <Button asChild className="gap-2">
            <Link href="/docs/tableau-synthese-realisations.pdf" download>
              <Download className="h-4 w-4" />
              Télécharger le tableau de synthèse
            </Link>
          </Button>
        </div>

        <Tabs defaultValue={realizations[0].id} className="mt-8">
          <TabsList className="grid w-full grid-cols-2">
            {realizations.map((real) => (
              <TabsTrigger key={real.id} value={real.id}>
                Réalisation {real.number}
              </TabsTrigger>
            ))}
          </TabsList>

          {realizations.map((realization) => (
            <TabsContent
              key={realization.id}
              value={realization.id}
              className="mt-6"
            >
              {/* En-tête officiel */}
              <Card className="mb-6">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="text-center">
                    BTS SERVICES INFORMATIQUES AUX ORGANISATIONS - SESSION 2025
                  </CardTitle>
                  <CardDescription className="text-center text-primary-foreground/80">
                    ANNEXE 9-1-B : Fiche descriptive de réalisation
                    professionnelle (recto)
                    <br />
                    Épreuve E6 - Conception et développement d'applications
                    (option SLAM)
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">N° réalisation:</span>
                        <span>{realization.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Nom, prénom:</span>
                        <span>Erwann LE ROUZIC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">N° candidat:</span>
                        <span>À définir</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Type d'épreuve:</span>
                        <Badge>Contrôle en cours de formation</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Date:</span>
                        <span>{new Date().toLocaleDateString("fr-FR")}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informations générales */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations générales</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Organisation support</h4>
                      <p className="text-muted-foreground">
                        {realization.organization}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Intitulé de la réalisation
                      </h4>
                      <p className="text-muted-foreground">
                        {realization.title}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Période</h4>
                        <p className="text-sm text-muted-foreground">
                          {realization.period}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Lieu</h4>
                        <p className="text-sm text-muted-foreground">
                          {realization.location}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Modalité</h4>
                      <Badge variant="outline">{realization.modality}</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Compétences travaillées */}
                <Card>
                  <CardHeader>
                    <CardTitle>Compétences travaillées</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 border-2 ${realization.competencesWorked.concevoir ? "bg-primary border-primary" : "border-muted-foreground"}`}
                      >
                        {realization.competencesWorked.concevoir && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                      <span className="text-sm">
                        Concevoir et développer une solution applicative
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 border-2 ${realization.competencesWorked.maintenir ? "bg-primary border-primary" : "border-muted-foreground"}`}
                      >
                        {realization.competencesWorked.maintenir && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                      <span className="text-sm">
                        Assurer la maintenance corrective ou évolutive d'une
                        solution applicative
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 border-2 ${realization.competencesWorked.gererDonnees ? "bg-primary border-primary" : "border-muted-foreground"}`}
                      >
                        {realization.competencesWorked.gererDonnees && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                      <span className="text-sm">Gérer les données</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Conditions de réalisation */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Conditions de réalisation</CardTitle>
                  <CardDescription>
                    Ressources fournies et résultats attendus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Ressources fournies
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {realization.conditions.resourcesFournies.map(
                          (resource, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground"
                            >
                              {resource}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Résultats attendus</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {realization.conditions.resultatsAttendus.map(
                          (resultat, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground"
                            >
                              {resultat}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ressources utilisées */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>
                    Ressources documentaires, matérielles et logicielles
                    utilisées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Documentaires
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {realization.resources.documentaires.map(
                          (doc, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground"
                            >
                              {doc}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Matérielles
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {realization.resources.materielles.map((mat, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            {mat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Logicielles
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {realization.resources.logicielles.map((log, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            {log}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Modalités d'accès */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>
                    Modalités d'accès aux productions et à leur documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Identifiants/Accès:</span>
                        <p className="text-sm text-muted-foreground">
                          {realization.accessModalities.identifiants}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">URL d'accès:</span>
                        <p className="text-sm text-muted-foreground break-all">
                          {realization.accessModalities.url}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Documentation:</span>
                        <p className="text-sm text-muted-foreground">
                          {realization.accessModalities.documentation}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Code source:</span>
                        <p className="text-sm text-muted-foreground break-all">
                          {realization.accessModalities.codeSource}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Productions réalisées */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>
                    Productions réalisées et schémas explicatifs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {realization.productions.map((production, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{production.type}</h4>
                            <p className="text-sm text-muted-foreground">
                              {production.description}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {production.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {production.files.map((file, fileIndex) => (
                            <Button
                              key={fileIndex}
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <ExternalLink className="h-3 w-3" />
                              {file}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
