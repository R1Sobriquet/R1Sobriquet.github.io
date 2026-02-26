"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { ContactDialog } from "@/components/contact-dialog"
import Image from "next/image"
import { Briefcase, GraduationCap } from "lucide-react"

export default function AboutSection() {
  const timelineData = [
    {
      type: "Alternance",
      title: "Alternance - Développeur d'applications",
      period: "Décembre 2024 - Présent",
      location: "MyDesyn, Agen",
      description: "Développement d'applications métier avec Windev, Webdev et Python",
      icon: <Briefcase className="h-4 w-4" />,
      badgeColor: "bg-green-500/10 text-green-700 dark:text-green-400",
    },
    {
      type: "Stage",
      title: "Stage - Développement Web",
      period: "Septembre - Décembre 2024",
      location: "D2Comm, Le Passage d'Agen",
      description: "Développement de composants React pour des sites web modernes et responsives",
      icon: <Briefcase className="h-4 w-4" />,
      badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    },
    {
      type: "Expérience",
      title: "Agent de centre d'appels",
      period: "Janvier - Mars 2024",
      location: "Orange, Le Tampon, Réunion",
      description: null,
      icon: <Briefcase className="h-4 w-4" />,
      badgeColor: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    },
    {
      type: "Stage",
      title: "Stage - Secteur informatique",
      period: "Octobre - Novembre 2023",
      location: "Médiathèque, Mairie du Tampon, Réunion",
      description: "Support utilisateur, maintenance du parc informatique et sensibilisation à la cybersécurité",
      icon: <Briefcase className="h-4 w-4" />,
      badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    },
    {
      type: "Formation",
      title: "BTS SIO option SLAM",
      period: "2023 - 2025",
      location: "Campus Numérique 47, Agen",
      description: "Services Informatiques aux Organisations — Solutions Logicielles et Applications Métiers",
      icon: <GraduationCap className="h-4 w-4" />,
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    },
    {
      type: "Formation",
      title: "Licence de Langues Étrangères Appliquées",
      period: "2021 - 2022",
      location: "INU Champollion, Albi, Occitanie",
      description: null,
      icon: <GraduationCap className="h-4 w-4" />,
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    },
    {
      type: "Formation",
      title: "Licence de psychologie",
      period: "2019 - 2020",
      location: "Université de Bretagne Occidentale, Brest",
      description: null,
      icon: <GraduationCap className="h-4 w-4" />,
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    },
    {
      type: "Formation",
      title: "Baccalauréat Littéraire",
      period: "2014 - 2018",
      location: "Lycée Pierre Lagourgue, Le Tampon, Réunion",
      description: null,
      icon: <GraduationCap className="h-4 w-4" />,
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    },
  ]

  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-6 space-y-16">

        {/* 1. En-tête enrichi */}
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                À propos de moi
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Étudiant en BTS SIO option SLAM au Campus Ermitage (Campus Numérique 47 à Agen)
              </p>
            </div>
            <ContactDialog />
          </div>
        </AnimatedSection>

        {/* 2. Présentation */}
        <AnimatedSection>
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-7">
                Actuellement étudiant au Campus Ermitage à Agen en BTS SIO option SLAM, je suis en alternance chez MyDesyn où je développe des applications métier avec Windev, Webdev et Python.
              </p>
              <p className="leading-7">
                Mon parcours diversifié m&apos;a permis de développer une approche polyvalente et une bonne capacité d&apos;adaptation. Je souhaite poursuivre mes études vers l&apos;Intelligence Artificielle après l&apos;obtention de mon BTS.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 3. Timeline chronologique */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Mon parcours</h3>
            <p className="text-muted-foreground mt-2">Formation et expérience professionnelle</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Point circulaire */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-background via-background to-primary/5">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <Badge variant="outline" className={item.badgeColor}>
                            {item.type}
                          </Badge>
                          <CardTitle className="text-base">{item.title}</CardTitle>
                          <CardDescription>{item.location}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="shrink-0 self-start text-xs whitespace-nowrap">
                          {item.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    {item.description && (
                      <CardContent className="pt-0 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Statistiques GitHub */}
        <AnimatedSection>
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Statistiques GitHub</CardTitle>
              <CardDescription>Mon activité sur GitHub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center flex-wrap">
                <div className="bg-muted/30 rounded-lg p-1">
                  <Image
                    src="https://github-readme-stats.vercel.app/api?username=R1Sobriquet&show_icons=true&theme=radical&hide_border=true&bg_color=00000000"
                    alt="GitHub Stats"
                    width={495}
                    height={195}
                    className="rounded-lg"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="bg-muted/30 rounded-lg p-1">
                  <Image
                    src="https://github-readme-streak-stats.herokuapp.com/?user=R1Sobriquet&theme=radical&hide_border=true&background=00000000"
                    alt="GitHub Streak"
                    width={495}
                    height={195}
                    className="rounded-lg"
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 5. Mon parcours académique (conservé intact) */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Mon parcours académique</h3>
            <p className="text-muted-foreground mt-2">Formation en BTS SIO au sein du Campus Ermitage</p>
          </div>

          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Campus Ermitage & Campus Numérique 47</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Campus Ermitage</h3>
                  <p className="leading-7">
                    Le Campus Ermitage, situé à Agen, est un établissement d&apos;enseignement supérieur privé qui propose des formations en alternance de niveau Bac+2 à Bac+3, notamment dans les domaines du tertiaire et du numérique.
                  </p>
                  <p className="leading-7 mt-4">
                    Le BTS Services Informatiques aux Organisations (SIO) proposé par Ermitage Sup&apos; est une formation en alternance de deux ans, axée sur les métiers de l&apos;informatique. Il propose deux spécialités :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                    <li><span className="font-semibold">SISR</span> (Solutions d&apos;Infrastructure, Systèmes et Réseaux), orientée vers l&apos;administration des réseaux et systèmes</li>
                    <li><span className="font-semibold">SLAM</span> (Solutions Logicielles et Applications Métiers), centrée sur le développement de logiciels et d&apos;applications</li>
                  </ul>
                  <p className="leading-7 mt-4">
                    Ce BTS forme à des postes comme technicien réseau, développeur web ou administrateur système.
                  </p>
                </div>

                {/* Image aérienne du Campus Ermitage */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="https://campusermitage.fr/wp-content/uploads/2024/11/Ermitage-2021-vu-du-ciel-logo_-copie.webp"
                    alt="Campus Ermitage vu du ciel"
                    width={800}
                    height={400}
                    className="object-cover w-full"
                    unoptimized
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Campus Numérique 47</h3>
                  <p className="leading-7">
                    Le Campus Numérique 47, situé à Agen, est un lieu dédié à la formation, à l&apos;innovation et à l&apos;inclusion dans le domaine du numérique. Créé en 2017 et devenu Groupement d&apos;Intérêt Public en 2021, il regroupe des acteurs publics et économiques du Lot-et-Garonne.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Il propose :</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Des formations du bac au bac+5 (développement web, IA, cybersécurité…)</li>
                      <li>Un incubateur pour start-up numériques</li>
                      <li>Un tiers-lieu et des ateliers gratuits pour favoriser l&apos;inclusion numérique</li>
                    </ul>
                  </div>
                  <p className="leading-7 mt-4">
                    Installé dans un bâtiment moderne avec espaces de coworking, FabLab, et amphithéâtre, le Campus est un moteur de la transformation numérique locale.
                  </p>
                </div>

                {/* Image du Campus Numérique 47 */}
                <div className="rounded-lg overflow-hidden max-w-2xl mx-auto">
                  <Image
                    src="https://www.vie-economique.com/wp-content/uploads/sites/13/2024/09/Campus_num_vie_eco_julien_mivielle_20231-scaled-928x484-c-default.jpg"
                    alt="Campus Numérique 47 à Agen"
                    width={600}
                    height={300}
                    className="object-cover w-full"
                    unoptimized
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>
    </section>
  )
}
