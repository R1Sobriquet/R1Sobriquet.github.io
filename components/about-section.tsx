"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { AboutCarousel } from "@/components/about-carousel"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de moi</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Étudiant en BTS SIO option SLAM au Campus Ermitage (Campus Numérique 47 à Agen)
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-8">
          <AboutCarousel />
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Statistiques GitHub</CardTitle>
              <CardDescription>Mon activité sur GitHub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center flex-wrap">
                <Image
                  src="https://github-readme-stats.vercel.app/api?username=R1Sobriquet&show_icons=true&theme=radical&hide_border=true&bg_color=00000000"
                  alt="GitHub Stats"
                  width={495}
                  height={195}
                  className="rounded-lg"
                  unoptimized
                />
                <Image
                  src="https://github-readme-streak-stats.herokuapp.com/?user=R1Sobriquet&theme=radical&hide_border=true&background=00000000"
                  alt="GitHub Streak"
                  width={495}
                  height={195}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7">
                Actuellement étudiant au Campus Ermitage à Agen en BTS SIO option SLAM, je suis en alternance chez MyDesyn où je développe des applications métier avec Windev et Webdev et Python.
              </p>
              <p className="leading-7 mt-4">
                Mon parcours diversifié m&apos;a permis de développer une approche polyvalente et une bonne capacité d&apos;adaptation. Je souhaite poursuivre mes études vers l&apos;Intelligence Artificielle après l&apos;obtention de mon BTS.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
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