import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"

export default function TechWatchSection() {
  const techNews = [
    {
      id: "news1",
      title: "Les avancées de l'IA générative en 2024",
      date: "15 mai 2024",
      source: "Le Monde Informatique",
      category: "intelligence-artificielle",
      summary:
        "Les modèles d'IA générative continuent d'évoluer rapidement en 2024, avec des capacités de plus en plus impressionnantes en matière de génération de texte, d'images et de code. Les entreprises adoptent ces technologies pour automatiser certaines tâches et améliorer leur productivité.",
      link: "https://www.lemondeinformatique.fr/",
      tags: ["IA", "Machine Learning", "Automatisation"],
      impact:
        "Ces avancées pourraient transformer de nombreux métiers du développement, en automatisant certaines tâches répétitives et en permettant aux développeurs de se concentrer sur des problèmes plus complexes.",
    },
    {
      id: "news2",
      title: "React 19 : les nouvelles fonctionnalités qui vont changer le développement front-end",
      date: "3 avril 2024",
      source: "Medium",
      category: "developpement-web",
      summary:
        "La version 19 de React apporte des améliorations significatives, notamment en termes de performance et de gestion de l'état. Les nouveaux hooks et les optimisations du rendu promettent de simplifier le développement d'applications complexes.",
      link: "https://medium.com/",
      tags: ["React", "JavaScript", "Front-end"],
      impact:
        "Ces nouvelles fonctionnalités vont me permettre d'optimiser mes développements React et d'adopter de nouvelles pratiques pour améliorer la performance de mes applications.",
    },
    {
      id: "news3",
      title: "La sécurité des applications web en 2024 : les meilleures pratiques",
      date: "20 mars 2024",
      source: "OWASP",
      category: "securite",
      summary:
        "L'OWASP a publié sa nouvelle liste des 10 vulnérabilités les plus critiques pour les applications web. Les attaques par injection et les failles d'authentification restent des menaces majeures, tandis que de nouvelles vulnérabilités liées aux API et aux microservices émergent.",
      link: "https://owasp.org/",
      tags: ["Sécurité", "Web", "OWASP"],
      impact:
        "Je dois intégrer ces recommandations dans mes développements pour garantir la sécurité des applications que je crée, notamment en mettant en place des pratiques de validation des entrées et de gestion des sessions plus robustes.",
    },
    {
      id: "news4",
      title: "WinDev 29 : les nouvelles fonctionnalités pour le développement d'applications métier",
      date: "10 février 2024",
      source: "PC Soft",
      category: "developpement-logiciel",
      summary:
        "La nouvelle version de WinDev apporte des améliorations significatives pour le développement d'applications métier, notamment en termes d'interface utilisateur, de performance et d'intégration avec les services cloud.",
      link: "https://www.pcsoft.fr/",
      tags: ["WinDev", "Applications métier", "AGL"],
      impact:
        "Ces nouvelles fonctionnalités vont me permettre d'améliorer mes développements chez MyDesyn, en particulier pour l'intégration de services cloud et l'amélioration des interfaces utilisateur.",
    },
  ]

  return (
    <section id="tech-watch" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Veille technologique</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Je reste constamment informé des dernières évolutions dans mon domaine
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Ma méthode de veille</CardTitle>
              <CardDescription>Comment je reste à jour dans un domaine en constante évolution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Pour rester informé des dernières tendances et évolutions dans le domaine du développement informatique,
                j&apos;utilise plusieurs sources et outils :
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <span className="font-medium">Newsletters spécialisées :</span> Je suis abonné à plusieurs newsletters
                  techniques comme JavaScript Weekly, React Status et Python Weekly.
                </li>
                <li>
                  <span className="font-medium">Flux RSS :</span> J&apos;utilise Feedly pour agréger les contenus de
                  blogs techniques et sites d&apos;actualités comme Medium, Dev.to et Smashing Magazine.
                </li>
                <li>
                  <span className="font-medium">Réseaux sociaux :</span> Je suis des développeurs influents et des
                  comptes spécialisés sur Twitter/X, LinkedIn et GitHub.
                </li>
                <li>
                  <span className="font-medium">Podcasts :</span> J&apos;écoute régulièrement des podcasts comme Syntax,
                  Le Podcast AWS et Les Cast Codeurs.
                </li>
                <li>
                  <span className="font-medium">Veille concurrentielle :</span> J&apos;analyse les solutions et
                  technologies utilisées par d&apos;autres entreprises du secteur.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="intelligence-artificielle">IA</TabsTrigger>
              <TabsTrigger value="developpement-web">Web</TabsTrigger>
              <TabsTrigger value="securite">Sécurité</TabsTrigger>
              <TabsTrigger value="developpement-logiciel">Logiciel</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {techNews.map((news) => (
                  <TechNewsCard key={news.id} news={news} />
                ))}
              </div>
            </TabsContent>

            {["intelligence-artificielle", "developpement-web", "securite", "developpement-logiciel"].map(
              (category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {techNews
                      .filter((news) => news.category === category)
                      .map((news) => (
                        <TechNewsCard key={news.id} news={news} />
                      ))}
                  </div>
                </TabsContent>
              ),
            )}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

interface TechNewsCardProps {
  news: {
    id: string
    title: string
    date: string
    source: string
    category: string
    summary: string
    link: string
    tags: string[]
    impact: string
  }
}

function TechNewsCard({ news }: TechNewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{news.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {news.date} - {news.source}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{news.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {news.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Impact sur mon activité</h4>
          <p className="text-sm text-muted-foreground mt-1">{news.impact}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={news.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Lire l&apos;article
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
