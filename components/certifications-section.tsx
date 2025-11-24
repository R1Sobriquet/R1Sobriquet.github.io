"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "MOOC de l'ANSSI",
      issuer: "Agence Nationale de la Sécurité des Systèmes d'Information",
      date: "2024",
      score: "Obtenu",
      description: "Formation en ligne sur les fondamentaux de la cybersécurité.",
      logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200&h=200&fit=crop",
      officialLink: "https://www.ssi.gouv.fr/",
    },
    {
      title: "Certification RGPD",
      issuer: "CNIL",
      date: "2024",
      score: "Obtenu",
      description: "Formation sur la protection des données personnelles et la conformité au RGPD.",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop",
      officialLink: "https://www.cnil.fr/",
    },
    {
      title: "Certification Stormshield",
      issuer: "Stormshield",
      date: "2024",
      score: "En cours",
      description: "Certification sur les solutions de cybersécurité et pare-feu Stormshield.",
      logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&h=200&fit=crop",
      officialLink: "https://www.stormshield.com/",
    },
    {
      title: "Cisco Python Certification",
      issuer: "Cisco Networking Academy",
      date: "2024",
      score: "En cours",
      description: "Certification en programmation Python pour le réseau et l'automatisation.",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=200&fit=crop",
      officialLink: "https://www.netacad.com/",
    },
    {
      title: "EBIOS Risk Manager",
      issuer: "ANSSI",
      date: "2024",
      score: "En cours",
      description: "Certification sur la méthode EBIOS Risk Manager pour l'analyse des risques cyber.",
      logo: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=200&h=200&fit=crop",
      officialLink: "https://www.ssi.gouv.fr/ebios",
    },
  ]

  const attestations = [
    {
      title: "REMPART 2025",
      event: "Exercice de cybersécurité",
      date: "2025",
      description: "Participation à l'exercice national de cybersécurité REMPART organisé par l'ANSSI.",
      logo: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=200&h=200&fit=crop",
      officialLink: "https://www.ssi.gouv.fr/",
    },
    {
      title: "Garonn'Hack 2024",
      event: "Capture The Flag",
      date: "2024",
      description: "Participation au challenge CTF régional de cybersécurité à Agen.",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=200&fit=crop",
      officialLink: "https://garonnhack.fr/",
    },
    {
      title: "Garonn'Hack 2025",
      event: "Capture The Flag",
      date: "2025",
      description: "Participation au challenge CTF régional de cybersécurité à Agen.",
      logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&h=200&fit=crop",
      officialLink: "https://garonnhack.fr/",
    },
  ]

  const agileMethodology = {
    title: "Méthode Agile - Scrum",
    provider: "Campus Numérique 47",
    date: "2024",
    duration: "20 heures",
    description: "Formation approfondie sur la gestion de projet Agile avec focus sur le framework Scrum.",
    logo: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&h=200&fit=crop",
    schemaImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop",
    officialLink: "https://www.agilealliance.org/",
    benefits: [
      {
        title: "Flexibilité et adaptabilité",
        description: "Capacité à ajuster rapidement les priorités et à réagir aux changements du projet en cours de développement.",
      },
      {
        title: "Livraisons itératives",
        description: "Production de versions fonctionnelles régulières permettant d'obtenir des retours clients fréquents et d'améliorer continuellement le produit.",
      },
      {
        title: "Collaboration renforcée",
        description: "Travail en équipe optimisé avec des cérémonies Scrum (daily stand-ups, sprint planning, retrospectives) favorisant la communication.",
      },
      {
        title: "Gestion des risques",
        description: "Identification et résolution précoce des problèmes grâce aux sprints courts et aux revues régulières.",
      },
      {
        title: "Amélioration continue",
        description: "Culture de l'apprentissage et de l'amélioration à travers les rétrospectives de sprint et l'adaptation des processus.",
      },
    ],
  }

  const additionalTrainings = [
    {
      title: "Cybermoi(s)",
      provider: "Médiathèque du Tampon",
      date: "Octobre 2023",
      duration: "1 semaine",
      description: "Participation à un exercice de sensibilisation sur la cybersécurité.",
      logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop",
      officialLink: "https://www.cybermois.fr/",
    },
    {
      title: "Cybermois - Professionnel",
      provider: "Campagne nationale",
      date: "Octobre 2024",
      duration: "1 mois",
      description: "Participation en tant que professionnel à la campagne de sensibilisation à la cybersécurité.",
      logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200&h=200&fit=crop",
      officialLink: "https://www.cybermois.fr/",
    },
    {
      title: "Cybermois - Professionnel",
      provider: "Campagne nationale",
      date: "Octobre 2025",
      duration: "1 mois",
      description: "Participation en tant que professionnel à la campagne de sensibilisation à la cybersécurité.",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop",
      officialLink: "https://www.cybermois.fr/",
    },
    {
      title: "Initiation à React",
      provider: "D2Comm",
      date: "Septembre 2024",
      duration: "2 semaines",
      description: "Formation interne sur le développement d'applications avec React.",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop",
      officialLink: "https://react.dev/",
    },
  ]

  return (
    <section id="certifications" className="py-12">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Certifications et formations
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Mes certifications et formations complémentaires
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {certifications.map((certification, index) => (
              <StaggerItem key={index}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-md">
                      <Image
                        src={certification.logo || "/placeholder.svg"}
                        alt={certification.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{certification.title}</CardTitle>
                      <CardDescription>{certification.issuer}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Badge variant="outline">{certification.date}</Badge>
                        {certification.score && <Badge>{certification.score}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{certification.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={certification.officialLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Site officiel
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Attestations supplémentaires</h3>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {attestations.map((attestation, index) => (
              <StaggerItem key={index}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {attestation.logo && (
                      <div className="relative h-12 w-12 overflow-hidden rounded-md flex-shrink-0">
                        <Image
                          src={attestation.logo}
                          alt={attestation.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-lg">{attestation.title}</CardTitle>
                      <CardDescription>{attestation.event}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <Badge variant="outline">{attestation.date}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">{attestation.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={attestation.officialLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Site officiel
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Méthode Agile</h3>
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-background via-background to-primary/5">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                  <Image
                    src={agileMethodology.logo}
                    alt={agileMethodology.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-2xl">{agileMethodology.title}</CardTitle>
                  <CardDescription className="text-base">{agileMethodology.provider}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{agileMethodology.date}</Badge>
                  <Badge variant="outline">{agileMethodology.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{agileMethodology.description}</p>

                {agileMethodology.schemaImage && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={agileMethodology.schemaImage}
                      alt={`Schéma ${agileMethodology.title}`}
                      width={800}
                      height={400}
                      className="object-cover w-full"
                      unoptimized
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Ce que la méthode Agile m&apos;apporte</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {agileMethodology.benefits.map((benefit, index) => (
                      <div key={index} className="p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          {benefit.title}
                        </h5>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href={agileMethodology.officialLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    En savoir plus sur Agile
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Formations complémentaires</h3>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {additionalTrainings.map((training, index) => (
              <StaggerItem key={index}>
                <Card className="h-full flex flex-col">
                  <CardHeader className={training.logo ? "flex flex-row items-center gap-4" : ""}>
                    {training.logo && (
                      <div className="relative h-12 w-12 overflow-hidden rounded-md flex-shrink-0">
                        <Image
                          src={training.logo}
                          alt={training.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-lg">{training.title}</CardTitle>
                      <CardDescription>{training.provider}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Badge variant="outline">{training.date}</Badge>
                        <Badge variant="outline">{training.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{training.description}</p>
                      {training.schemaImage && (
                        <div className="mt-4 rounded-lg overflow-hidden">
                          <Image
                            src={training.schemaImage}
                            alt={`Schéma ${training.title}`}
                            width={400}
                            height={200}
                            className="object-cover w-full"
                            unoptimized
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={training.officialLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Site officiel
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}