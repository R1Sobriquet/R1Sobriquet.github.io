import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de moi</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Étudiant en BTS SIO option SLAM au Campus Ermitage (Campus Numérique 47 à Agen)
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8" />
              <div className="grid gap-1">
                <CardTitle>Formation</CardTitle>
                <CardDescription>Mon parcours académique</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold">BTS SIO option SLAM</div>
                  <div className="text-sm text-muted-foreground">2023 - 2025</div>
                  <div className="text-sm">Campus Numérique 47, Agen</div>
                </li>
                <li>
                  <div className="font-semibold">Licence de Langues Étrangères Appliquées</div>
                  <div className="text-sm text-muted-foreground">2021 - 2022</div>
                  <div className="text-sm">INU Champollion, Albi, Occitanie</div>
                </li>
                <li>
                  <div className="font-semibold">Licence de psychologie</div>
                  <div className="text-sm text-muted-foreground">2019 - 2020</div>
                  <div className="text-sm">Université de Bretagne Occidentale, Brest</div>
                </li>
                <li>
                  <div className="font-semibold">Baccalauréat Littéraire</div>
                  <div className="text-sm text-muted-foreground">2014 - 2018</div>
                  <div className="text-sm">Lycée Pierre Lagourgue, Le Tampon, Réunion</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Briefcase className="h-8 w-8" />
              <div className="grid gap-1">
                <CardTitle>Expérience</CardTitle>
                <CardDescription>Mon parcours professionnel</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold">Alternance - Développeur d&apos;applications</div>
                  <div className="text-sm text-muted-foreground">Décembre 2024 - Présent</div>
                  <div className="text-sm">MyDesyn, Développement d&apos;applications métier Windev/Webdev</div>
                </li>
                <li>
                  <div className="font-semibold">Stage - Développement Web</div>
                  <div className="text-sm text-muted-foreground">Septembre - Décembre 2024</div>
                  <div className="text-sm">D2Comm, Le Passage d&apos;Agen, Développement React</div>
                </li>
                <li>
                  <div className="font-semibold">Agent de centre d&apos;appels</div>
                  <div className="text-sm text-muted-foreground">Janvier - Mars 2024</div>
                  <div className="text-sm">Orange, Le Tampon, Réunion</div>
                </li>
                <li>
                  <div className="font-semibold">Stage - Secteur informatique</div>
                  <div className="text-sm text-muted-foreground">Octobre - Novembre 2023</div>
                  <div className="text-sm">Médiathèque, Mairie du Tampon, Réunion</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <MapPin className="h-8 w-8" />
              <div className="grid gap-1">
                <CardTitle>Informations</CardTitle>
                <CardDescription>Mes coordonnées</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-semibold">Localisation:</span>
                  <span>48 Cours du 14 Juillet, Agen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <span>erwannn.lerouzic@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold">LinkedIn:</span>
                  <span>linkedin.com/in/erwann-le-rouzic-a09b64219</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold">GitHub:</span>
                  <span>github.com/R1Sobriquet</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold">Téléphone:</span>
                  <span>+262 692 35 72 64</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Présentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7">
                Actuellement étudiant au Campus Numérique 47 à Agen en BTS SIO option SLAM (Solutions Logicielles et
                Applications Métier), je suis en alternance chez MyDesyn où je développe des applications métier avec
                Windev, Webdev et Windev Mobile.
              </p>
              <p className="leading-7 mt-4">
                Mon parcours académique diversifié, incluant des études en langues étrangères appliquées et en
                psychologie, m&apos;a permis de développer une approche polyvalente et une bonne capacité
                d&apos;adaptation. J&apos;ai récemment effectué un stage chez D2Comm où j&apos;ai travaillé sur des
                projets React.
              </p>
              <p className="leading-7 mt-4">
                Je souhaite poursuivre mes études avec une licence en informatique orientée vers l&apos;Intelligence
                Artificielle après l&apos;obtention de mon BTS. Ma formation et mes expériences professionnelles
                m&apos;ont permis d&apos;acquérir des compétences techniques solides en développement web et
                applications, ainsi qu&apos;une bonne compréhension des enjeux liés à la production de services
                informatiques.
              </p>
              <p className="leading-7 mt-4">
                Je suis particulièrement intéressé par le développement d&apos;applications web modernes et
                performantes, ainsi que par les technologies émergentes comme l&apos;IA et l&apos;apprentissage
                automatique.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
