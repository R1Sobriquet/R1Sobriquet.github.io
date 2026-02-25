"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { Building2, MapPin, Calendar, Clock, TrendingUp } from "lucide-react"

export default function InternshipsSection() {
  const internships = [
    {
      id: "internship1",
      company: "MyDesyn",
      position: "Développeur d'applications en alternance",
      period: "Décembre 2024 - Présent",
      duration: "En cours",
      location: "Agen, France",
      banner: "https://mydesyn.fr/wp-content/uploads/2020/10/FACTURE_M_2022_200_BLANC.png",
      description:
        "Alternance dans une entreprise spécialisée dans le développement d'applications métier avec Windev, Webdev et Windev Mobile.",
      organization: {
        name: "MyDesyn",
        sector: "Services informatiques",
        size: "PME",
        description:
          "Entreprise spécialisée en conception d'applications métier Windev, Webdev et Windev Mobile. MyDesyn intervient à chaque étape du projet : étude de faisabilité, conception, développement, maintenance et formation.",
      },
      services: [
        "Développement d'applications métier avec Windev, Webdev et Windev Mobile",
        "Maintenance et évolution d'applications existantes",
        "Participation aux audits et diagnostics d'applications",
        "Contribution à la refonte UX/UI d'interfaces utilisateur",
      ],
      achievements: [
        { label: "Applications développées", value: "3+", description: "Applications métier complètes" },
        { label: "Modules créés", value: "15+", description: "Fonctionnalités et modules" },
        { label: "Bugs corrigés", value: "50+", description: "Résolution de problèmes" },
        { label: "Projets clients", value: "5", description: "Interventions multi-clients" },
      ],
      analysis:
        "MyDesyn propose différents services comme la création de nouveaux projets, l'intervention sur des projets existants, l'audit et conseil, la maintenance, la refonte UX/UI et la migration. Mon rôle est de participer au développement et à la maintenance d'applications métier.",
      constraints:
        "Les projets doivent respecter les délais clients tout en assurant une qualité optimale. Les applications développées doivent être fiables, performantes et répondre précisément aux besoins métiers des utilisateurs.",
      technologies: ["Windev", "Webdev", "Windev Mobile", "SQL", "HFSQL"],
    },
    {
      id: "internship2",
      company: "D2Comm",
      position: "Développeur Web (Stage)",
      period: "Septembre - Décembre 2024",
      duration: "3 mois",
      location: "Le Passage d'Agen, France",
      banner: "https://d2com.fr/wp-content/uploads/2025/03/D2COM-LOGO-V-1024x217.webp",
      description:
        "Stage de développement web axé sur React pour la création d'interfaces utilisateur modernes et réactives.",
      organization: {
        name: "D2Comm",
        sector: "Communication et développement web",
        size: "PME",
        description:
          "Agence spécialisée dans la communication digitale et le développement de sites web et applications pour les entreprises locales.",
      },
      services: [
        "Développement de composants React pour des sites web",
        "Intégration de maquettes en HTML/CSS",
        "Optimisation de l'expérience utilisateur",
        "Tests et débogage d'applications web",
      ],
      achievements: [
        { label: "Composants React", value: "25+", description: "Composants réutilisables créés" },
        { label: "Pages développées", value: "12", description: "Pages web responsive" },
        { label: "Performance", value: "+30%", description: "Amélioration temps de chargement" },
        { label: "Projets web", value: "3", description: "Sites web complets" },
      ],
      analysis:
        "Le stage chez D2Comm m'a permis de travailler sur des projets React concrets, en participant au développement de sites web modernes et réactifs. J'ai pu mettre en pratique mes connaissances en JavaScript et approfondir ma maîtrise de React.",
      constraints:
        "Les projets devaient respecter les délais clients et s'adapter à différents types d'appareils (responsive design). Une attention particulière était portée à l'expérience utilisateur et aux performances des applications.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Git"],
    },
    {
      id: "internship3",
      company: "Médiathèque - Mairie du Tampon",
      position: "Stagiaire en informatique",
      period: "Octobre - Novembre 2023",
      duration: "2 mois",
      location: "Le Tampon, Réunion",
      banner: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=300&fit=crop",
      description:
        "Stage au secteur informatique d'une médiathèque municipale, axé sur le support utilisateur et la maintenance.",
      organization: {
        name: "Médiathèque - Mairie du Tampon",
        sector: "Service public",
        size: "Administration publique",
        description:
          "Service culturel municipal proposant l'accès à des ressources documentaires et numériques pour le grand public.",
      },
      services: [
        "Assistance aux utilisateurs sur les postes informatiques",
        "Maintenance du parc informatique",
        "Participation à des ateliers de sensibilisation à la cybersécurité",
        "Support technique pour les événements de la médiathèque",
      ],
      achievements: [
        { label: "Utilisateurs aidés", value: "100+", description: "Assistance technique fournie" },
        { label: "Postes maintenus", value: "30+", description: "Ordinateurs du parc informatique" },
        { label: "Atelier Cybermoi(s)", value: "1", description: "Sensibilisation cybersécurité" },
        { label: "Incidents résolus", value: "40+", description: "Problèmes techniques traités" },
      ],
      analysis:
        "Ce stage m'a permis de découvrir les aspects pratiques du support informatique dans un environnement de service public. J'ai pu participer au Cybermoi(s), un exercice de sensibilisation à la cybersécurité.",
      constraints:
        "Le travail devait s'adapter aux horaires d'ouverture de la médiathèque et aux besoins variés des usagers, avec des contraintes budgétaires propres au secteur public.",
      technologies: ["Support utilisateur", "Maintenance informatique", "Cybersécurité"],
    },
  ]

  return (
    <section id="internships" className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes stages professionnels</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez mes expériences professionnelles en entreprise
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Tabs defaultValue={internships[0].id} className="mt-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {internships.map((internship) => (
              <TabsTrigger key={internship.id} value={internship.id}>
                {internship.company}
              </TabsTrigger>
            ))}
          </TabsList>

          {internships.map((internship) => (
            <TabsContent key={internship.id} value={internship.id}>
              <div className="space-y-6">
                {/* Bannière de l'entreprise */}
                <Card className="overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
                  <div className={`relative h-40 w-full overflow-hidden ${
                    internship.company.includes("Médiathèque")
                      ? ""
                      : "bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900"
                  }`}>
                    <img
                      src={internship.banner}
                      alt={`Logo ${internship.company}`}
                      className={`w-full h-full ${
                        internship.company.includes("Médiathèque")
                          ? "object-cover"
                          : "object-contain p-8"
                      }`}
                    />
                    {internship.company.includes("Médiathèque") && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{internship.position}</CardTitle>
                    <CardDescription className="text-lg">{internship.company}</CardDescription>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="gap-1">
                        <Calendar className="h-3 w-3" />
                        {internship.period}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" />
                        {internship.duration}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <MapPin className="h-3 w-3" />
                        {internship.location}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-7">{internship.description}</p>
                  </CardContent>
                </Card>

                {/* Grille d'informations */}
                <StaggerContainer className="grid gap-6 md:grid-cols-2">
                  <StaggerItem>
                    <Card className="h-full bg-gradient-to-br from-background via-background to-primary/5">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          <CardTitle>L&apos;organisation</CardTitle>
                        </div>
                        <CardDescription>Présentation de l&apos;entreprise d&apos;accueil</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                            <span className="font-medium min-w-[80px]">Nom:</span>
                            <span className="text-right flex-1">{internship.organization.name}</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                            <span className="font-medium min-w-[80px]">Secteur:</span>
                            <Badge variant="secondary" className="ml-auto">
                              {internship.organization.sector}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                            <span className="font-medium min-w-[80px]">Taille:</span>
                            <Badge variant="outline" className="ml-auto">
                              {internship.organization.size}
                            </Badge>
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {internship.organization.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full bg-gradient-to-br from-primary/5 via-background to-background border-primary/20">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <CardTitle>Réalisations clés</CardTitle>
                        </div>
                        <CardDescription>Résultats mesurables et accomplissements</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {internship.achievements.map((achievement, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-background border border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
                            >
                              <div className="text-2xl font-bold text-primary mb-1">
                                {achievement.value}
                              </div>
                              <div className="text-xs font-semibold mb-1">{achievement.label}</div>
                              <div className="text-xs text-muted-foreground">{achievement.description}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full bg-gradient-to-br from-background via-background to-primary/5">
                      <CardHeader>
                        <CardTitle>Technologies utilisées</CardTitle>
                        <CardDescription>Stack technique et outils</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full bg-gradient-to-br from-background via-background to-primary/5">
                      <CardHeader>
                        <CardTitle>Missions réalisées</CardTitle>
                        <CardDescription>Services informatiques fournis</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {internship.services.map((service, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  <StaggerItem>
                    <Card className="h-full bg-gradient-to-br from-background via-background to-primary/5">
                      <CardHeader>
                        <CardTitle>Analyse et solutions</CardTitle>
                        <CardDescription>Contexte et problématiques rencontrées</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Contexte</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {internship.analysis}
                          </p>
                        </div>
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-2">Contraintes et adaptations</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {internship.constraints}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
