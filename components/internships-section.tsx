import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function InternshipsSection() {
  const internships = [
    {
      id: "internship1",
      company: "MyDesyn",
      position: "Développeur d'applications en alternance",
      period: "Décembre 2024 - Présent",
      duration: "En cours",
      location: "Agen, France",
      logo: "/images/mydesyn-logo.png",
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
      logo: "/images/d2comm-logo.png",
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
      logo: "/placeholder.svg?height=100&width=100",
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
      analysis:
        "Ce stage m'a permis de découvrir les aspects pratiques du support informatique dans un environnement de service public. J'ai pu participer au Cybermoi(s), un exercice de sensibilisation à la cybersécurité.",
      constraints:
        "Le travail devait s'adapter aux horaires d'ouverture de la médiathèque et aux besoins variés des usagers, avec des contraintes budgétaires propres au secteur public.",
      technologies: ["Support utilisateur", "Maintenance informatique", "Cybersécurité"],
    },
  ]

  return (
    <section id="internships" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes stages professionnels</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Découvrez mes expériences professionnelles en entreprise
            </p>
          </div>
        </div>

        <Tabs defaultValue={internships[0].id} className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            {internships.map((internship) => (
              <TabsTrigger key={internship.id} value={internship.id}>
                {internship.company}
              </TabsTrigger>
            ))}
          </TabsList>

          {internships.map((internship) => (
            <TabsContent key={internship.id} value={internship.id} className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image
                        src={internship.logo || "/placeholder.svg"}
                        alt={internship.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{internship.position}</CardTitle>
                      <CardDescription>{internship.company}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">{internship.period}</Badge>
                        <Badge variant="outline">{internship.duration}</Badge>
                        <Badge variant="outline">{internship.location}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{internship.description}</p>

                    <div className="mt-6">
                      <h4 className="font-semibold text-lg">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {internship.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>L&apos;organisation</CardTitle>
                      <CardDescription>Présentation de l&apos;entreprise d&apos;accueil</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Nom:</span>
                          <span>{internship.organization.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Secteur:</span>
                          <span>{internship.organization.sector}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Taille:</span>
                          <span>{internship.organization.size}</span>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground">{internship.organization.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Services informatiques fournis</CardTitle>
                      <CardDescription>Missions et tâches réalisées</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {internship.services.map((service, index) => (
                          <li key={index} className="text-sm">
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Analyse et solutions</CardTitle>
                      <CardDescription>Analyse de la demande et solutions proposées</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{internship.analysis}</p>

                      <h4 className="font-semibold mt-4">Contraintes et adaptations</h4>
                      <p className="text-sm text-muted-foreground mt-1">{internship.constraints}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}