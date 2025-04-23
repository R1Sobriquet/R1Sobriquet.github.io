import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "MOOC de l'ANSSI",
      issuer: "Agence Nationale de la Sécurité des Systèmes d'Information",
      date: "2024",
      score: "En cours",
      description: "Formation en ligne sur les fondamentaux de la cybersécurité.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Certification RGPD",
      issuer: "CNIL",
      date: "2024",
      score: "En cours",
      description: "Formation sur la protection des données personnelles et la conformité au RGPD.",
      logo: "/placeholder.svg?height=80&width=80",
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

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((certification, index) => (
              <Card key={index}>
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
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Formations complémentaires</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {additionalTrainings.map((training, index) => (
              <Card key={index}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
