"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
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
    },
    {
      title: "Certification RGPD",
      issuer: "CNIL",
      date: "2024",
      score: "Obtenu",
      description: "Formation sur la protection des données personnelles et la conformité au RGPD.",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop",
    },
    {
      title: "Certification Stormshield",
      issuer: "Stormshield",
      date: "2024",
      score: "En cours",
      description: "Certification sur les solutions de cybersécurité et pare-feu Stormshield.",
      logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&h=200&fit=crop",
    },
    {
      title: "Cisco Python Certification",
      issuer: "Cisco Networking Academy",
      date: "2024",
      score: "En cours",
      description: "Certification en programmation Python pour le réseau et l'automatisation.",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=200&fit=crop",
    },
    {
      title: "EBIOS Risk Manager",
      issuer: "ANSSI",
      date: "2024",
      score: "En cours",
      description: "Certification sur la méthode EBIOS Risk Manager pour l'analyse des risques cyber.",
      logo: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=200&h=200&fit=crop",
    },
  ]

  const attestations = [
    {
      title: "REMPART 2025",
      event: "Exercice de cybersécurité",
      date: "2025",
      description: "Participation à l'exercice national de cybersécurité REMPART organisé par l'ANSSI.",
    },
    {
      title: "Garonn'Hack 2024",
      event: "Capture The Flag",
      date: "2024",
      description: "Participation au challenge CTF régional de cybersécurité à Agen.",
    },
    {
      title: "Garonn'Hack 2025",
      event: "Capture The Flag",
      date: "2025",
      description: "Participation au challenge CTF régional de cybersécurité à Agen.",
    },
  ]

  const additionalTrainings = [
    {
      title: "Cybermoi(s)",
      provider: "Médiathèque du Tampon",
      date: "Octobre 2023",
      duration: "1 semaine",
      description: "Participation à un exercice de sensibilisation sur la cybersécurité.",
    },
    {
      title: "Cybermois - Professionnel",
      provider: "Campagne nationale",
      date: "Octobre 2024",
      duration: "1 mois",
      description: "Participation en tant que professionnel à la campagne de sensibilisation à la cybersécurité.",
    },
    {
      title: "Cybermois - Professionnel",
      provider: "Campagne nationale",
      date: "Octobre 2025",
      duration: "1 mois",
      description: "Participation en tant que professionnel à la campagne de sensibilisation à la cybersécurité.",
    },
    {
      title: "Initiation à React",
      provider: "D2Comm",
      date: "Septembre 2024",
      duration: "2 semaines",
      description: "Formation interne sur le développement d'applications avec React.",
    },
    {
      title: "Méthode Agile",
      provider: "Campus Numérique 47",
      date: "2024",
      duration: "20 heures",
      description: "Formation sur la gestion de projet avec la méthode Agile.",
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
                <Card className="h-full">
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
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Badge variant="outline">{certification.date}</Badge>
                        {certification.score && <Badge>{certification.score}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{certification.description}</p>
                    </div>
                  </CardContent>
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
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{attestation.title}</CardTitle>
                    <CardDescription>{attestation.event}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="outline">{attestation.date}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">{attestation.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Formations complémentaires</h3>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {additionalTrainings.map((training, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{training.title}</CardTitle>
                    <CardDescription>{training.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Badge variant="outline">{training.date}</Badge>
                        <Badge variant="outline">{training.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{training.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
