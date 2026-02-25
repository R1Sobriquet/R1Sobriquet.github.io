"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

export default function TechWatchSection() {
  const techNews = [
    {
      id: "news1",
      title: "ANSSI : Recommandations pour sécuriser les applications web en 2025",
      date: "Janvier 2025",
      source: "ANSSI - Agence Nationale de la Sécurité des Systèmes d'Information",
      category: "securite",
      summary:
        "L'ANSSI publie ses recommandations actualisées pour la sécurisation des applications web, incluant les nouvelles menaces liées aux API REST, l'authentification moderne et la protection contre les attaques par LLM.",
      link: "https://www.ssi.gouv.fr/",
      tags: ["Cybersécurité", "ANSSI", "Web Security"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
      impact:
        "Ces recommandations sont essentielles pour mes développements web (EsportApp, LeedCar). J'applique notamment les principes de defense-in-depth et les pratiques OWASP Top 10 dans mes projets professionnels.",
    },
    {
      id: "news2",
      title: "Python et Machine Learning : Pandas 2.2 optimise le traitement de grandes données",
      date: "Décembre 2024",
      source: "Python Software Foundation",
      category: "intelligence-artificielle",
      summary:
        "La nouvelle version de Pandas améliore considérablement les performances de traitement de datasets volumineux avec le support natif d'Apache Arrow et des optimisations mémoire avancées.",
      link: "https://pandas.pydata.org/",
      tags: ["Python", "Data Science", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop",
      impact:
        "Directement applicable à mon projet de pipeline d'enrichissement de données IA chez MyDesyn. Les optimisations mémoire permettent de traiter des volumes plus importants et d'accélérer les étapes de nettoyage et modélisation.",
    },
    {
      id: "news3",
      title: "EBIOS Risk Manager : Nouvelle méthodologie d'analyse de risques cyber",
      date: "Novembre 2024",
      source: "ANSSI",
      category: "securite",
      summary:
        "L'ANSSI met à jour sa méthode EBIOS Risk Manager pour intégrer les nouvelles menaces liées au cloud, à l'IA et aux chaînes d'approvisionnement numériques. Cette approche permet une analyse structurée des risques cyber.",
      link: "https://www.ssi.gouv.fr/ebios",
      tags: ["EBIOS", "Gestion des risques", "Cybersécurité"],
      image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&h=300&fit=crop",
      impact:
        "En cours de certification EBIOS Risk Manager, cette méthodologie me permet d'identifier et prioriser les risques dans mes projets professionnels. Particulièrement utile pour analyser la sécurité de l'application de taxi LeedCar.",
    },
    {
      id: "news4",
      title: "Next.js 15 et React 19 : Le futur du développement web moderne",
      date: "Octobre 2024",
      source: "Vercel / React Team",
      category: "developpement-web",
      summary:
        "Next.js 15 intègre React 19 avec des améliorations majeures : Server Components stables, nouvelles APIs de cache, amélioration des performances et meilleure expérience développeur avec Turbopack.",
      link: "https://nextjs.org/",
      tags: ["Next.js", "React", "Front-end"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      impact:
        "Mon portfolio utilise Next.js 15 et React 19, ce qui me permet d'expérimenter avec les dernières technologies. J'applique ces patterns modernes dans mes projets web comme EsportApp et LeedCar.",
    },
    {
      id: "news5",
      title: "Stormshield : Nouvelles solutions de protection des infrastructures critiques",
      date: "Octobre 2024",
      source: "Stormshield",
      category: "securite",
      summary:
        "Stormshield dévoile ses nouvelles solutions de cybersécurité pour protéger les infrastructures critiques, avec des pare-feu de nouvelle génération et des outils d'analyse comportementale avancés.",
      link: "https://www.stormshield.com/",
      tags: ["Stormshield", "Firewall", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=300&fit=crop",
      impact:
        "En cours de certification Stormshield, j'étudie ces solutions pour comprendre la protection réseau et applicative. Ces connaissances sont essentielles pour sécuriser les applications métier que je développe chez MyDesyn.",
    },
    {
      id: "news6",
      title: "WinDev 2024 : Nouvelles fonctionnalités pour applications métier",
      date: "Septembre 2024",
      source: "PC Soft",
      category: "developpement-logiciel",
      summary:
        "WinDev 2024 apporte des améliorations majeures : intégration cloud native, nouveaux composants UI modernes, optimisations HFSQL et meilleure compatibilité avec les API REST modernes.",
      link: "https://www.pcsoft.fr/",
      tags: ["WinDev", "HFSQL", "Applications métier"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      impact:
        "J'utilise quotidiennement WinDev dans mon alternance chez MyDesyn pour développer des applications métier. Ces nouvelles fonctionnalités améliorent significativement la productivité et la qualité des applications de gestion.",
    },
    {
      id: "news7",
      title: "Cisco Python Certification : Automatisation réseau avec Python",
      date: "Août 2024",
      source: "Cisco Networking Academy",
      category: "developpement-logiciel",
      summary:
        "Cisco renforce son programme de certification Python axé sur l'automatisation réseau, le scripting et l'intégration avec les API Cisco. Focus sur NetDevOps et Infrastructure as Code.",
      link: "https://www.netacad.com/",
      tags: ["Python", "Cisco", "Automatisation"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop",
      impact:
        "En cours de certification Cisco Python, j'apprends à automatiser les tâches réseau et à utiliser Python pour la gestion d'infrastructure. Ces compétences sont complémentaires à mon travail sur les pipelines de données.",
    },
    {
      id: "news8",
      title: "Retour sur le Cybermois 2024 : Sensibilisation et formation en cybersécurité",
      date: "Octobre 2024",
      source: "Cybermoi/s - Campagne nationale",
      category: "securite",
      summary:
        "Le Cybermois 2024 a rassemblé professionnels et grand public autour de la sensibilisation à la cybersécurité. Focus sur les nouvelles menaces, le phishing et la protection des données personnelles.",
      link: "https://www.cybermois.fr/",
      tags: ["Sensibilisation", "Cybersécurité", "Formation"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop",
      impact:
        "Participation en tant que professionnel au Cybermois 2024, j'ai contribué à sensibiliser le public aux enjeux de cybersécurité. Cette expérience renforce ma compréhension des risques et ma capacité à développer des applications sécurisées.",
    },
    {
      id: "news9",
      title: "Claude 3.5 Sonnet et l'API Anthropic : Vers des agents IA autonomes",
      date: "Décembre 2024",
      source: "Anthropic",
      category: "intelligence-artificielle",
      summary:
        "Anthropic dévoile les capacités avancées de Claude 3.5 Sonnet, notamment le Computer Use permettant à l'IA d'interagir directement avec des interfaces graphiques. L'API Anthropic s'enrichit de nouvelles fonctionnalités pour construire des agents autonomes capables d'exécuter des workflows complexes sans intervention humaine.",
      link: "https://www.anthropic.com/claude",
      tags: ["Claude", "LLM", "Agents IA", "API"],
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop",
      impact:
        "L'émergence des agents IA autonomes transforme les pratiques de développement logiciel. Dans mes projets personnels et mon alternance chez MyDesyn, j'explore comment intégrer ces capacités pour automatiser des tâches répétitives de traitement de données et de génération de code. La maîtrise de l'API Anthropic devient une compétence différenciante pour un développeur SLAM.",
    },
    {
      id: "news10",
      title: "DeepSeek R1 : L'IA open source chinoise qui bouscule les modèles propriétaires",
      date: "Janvier 2025",
      source: "DeepSeek AI",
      category: "intelligence-artificielle",
      summary:
        "DeepSeek publie R1, un modèle de raisonnement open source qui rivalise avec GPT-4o et Claude 3.5 Sonnet sur les benchmarks mathématiques et de programmation, tout en étant accessible gratuitement. Ce modèle entraîné avec des ressources significativement réduites remet en question les hypothèses sur le coût de développement des LLM.",
      link: "https://www.deepseek.com/",
      tags: ["DeepSeek", "Open Source", "LLM", "Raisonnement"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop",
      impact:
        "L'arrivée de modèles open source performants comme DeepSeek R1 ouvre de nouvelles possibilités pour intégrer l'IA dans des projets sans coût d'API élevé. Je surveille activement ces modèles pour mes projets Python chez MyDesyn, notamment pour des tâches d'analyse de données et d'automatisation où le déploiement local d'un LLM devient envisageable.",
    },
    {
      id: "news11",
      title: "Tailwind CSS v4 : Une refonte majeure du moteur de compilation",
      date: "Janvier 2025",
      source: "Tailwind Labs",
      category: "developpement-web",
      summary:
        "Tailwind CSS v4 introduit un nouveau moteur basé sur Rust (Oxide) qui réduit les temps de compilation de 80%, remplace le fichier tailwind.config.js par une configuration CSS native via @theme, et adopte CSS custom properties nativement pour toutes les valeurs de design tokens. La migration depuis v3 nécessite des ajustements mais reste rétrocompatible sur les classes utilitaires principales.",
      link: "https://tailwindcss.com/blog/tailwindcss-v4",
      tags: ["Tailwind CSS", "CSS", "Front-end", "Performance"],
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=300&fit=crop",
      impact:
        "Ce portfolio utilise Tailwind CSS et une mise à jour vers v4 apporterait des gains de performance significatifs en développement. La configuration CSS native change aussi la façon dont les thèmes (comme le système de couleurs beige/rose de ce portfolio) sont définis, ce qui me prépare à adopter des pratiques modernes de design system dans mes futurs projets web.",
    },
    {
      id: "news12",
      title: "TypeScript 5.8 : Améliorations du typage et inférence avancée",
      date: "Février 2026",
      source: "Microsoft / TypeScript Team",
      category: "developpement-web",
      summary:
        "TypeScript 5.8 apporte des améliorations majeures dans l'inférence de types pour les génériques imbriqués, un nouveau mode strict pour les vérifications d'assignation, et des optimisations du compilateur qui réduisent de 40% les temps de build sur les très grands projets. Le support natif des decorators ECMAScript est finalisé sans flag expérimental.",
      link: "https://devblogs.microsoft.com/typescript/",
      tags: ["TypeScript", "JavaScript", "Typage statique", "Performance"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=300&fit=crop",
      impact:
        "TypeScript est central dans mon stack Next.js 15. Les améliorations d'inférence de types de la v5.8 me permettent d'écrire moins de annotations manuelles tout en gardant une sécurité de type maximale. Cela accélère mon développement sur les projets EsportApp et LeedCar, où la complexité des types augmente avec les fonctionnalités.",
    },
    {
      id: "news13",
      title: "Directive NIS2 : Transposition française et nouvelles obligations pour les entreprises",
      date: "Octobre 2024",
      source: "ANSSI / Journal Officiel",
      category: "securite",
      summary:
        "La directive européenne NIS2 entre en vigueur et étend les obligations de cybersécurité à plus de 10 000 entités françaises, incluant PME et collectivités locales, contre 500 sous NIS1. Les entreprises doivent désormais notifier les incidents de sécurité sous 24 heures, mettre en place une gestion des risques formelle et sécuriser leurs chaînes d'approvisionnement logicielles.",
      link: "https://www.ssi.gouv.fr/entreprise/reglementation/nis2/",
      tags: ["NIS2", "Conformité", "RGPD", "Cybersécurité"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop",
      impact:
        "NIS2 impacte directement les entreprises comme MyDesyn qui développent des logiciels pour des clients potentiellement soumis à cette réglementation. En tant que développeur, comprendre ces exigences me permet d'intégrer dès la conception les pratiques de security-by-design et de documentation des risques que les clients devront justifier auprès de l'ANSSI.",
    },
    {
      id: "news14",
      title: "GitHub Copilot Workspace 2026 : L'IDE augmenté par l'IA",
      date: "Février 2026",
      source: "GitHub / Microsoft",
      category: "developpement-logiciel",
      summary:
        "GitHub annonce Copilot Workspace 2026, une évolution majeure qui transforme l'IDE en un environnement de développement augmenté par l'IA. L'agent peut maintenant gérer des refactorisations complètes de codebase, générer des architectures système, et effectuer des revues de code contextualisées en analysant l'historique Git et les discussions d'équipe.",
      link: "https://github.com/features/copilot",
      tags: ["GitHub Copilot", "IA", "Productivité", "IDE"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=300&fit=crop",
      impact:
        "J'utilise GitHub Copilot quotidiennement dans VS Code pour accélérer mon développement. L'évolution vers Copilot Workspace change fondamentalement mon workflow : il s'agit désormais de superviser et valider des propositions architecturales plutôt que d'écrire chaque ligne. Cette compétence de prompting et de supervision d'IA devient aussi importante que la programmation classique pour un développeur SLAM en 2026.",
    },
    {
      id: "news15",
      title: "Python 3.14 : Mode JIT par défaut et async/await amélioré",
      date: "Janvier 2026",
      source: "Python Software Foundation",
      category: "developpement-logiciel",
      summary:
        "Python 3.14 active le compilateur JIT par défaut pour tous les utilisateurs, apportant des gains de performance de 15 à 40% sur les workloads intensifs sans modification de code. Les coroutines async/await bénéficient d'optimisations majeures et un nouveau système de type guards natif améliore la sécurité du code asynchrone.",
      link: "https://docs.python.org/3.14/whatsnew/3.14.html",
      tags: ["Python", "JIT", "Performances", "Async"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=300&fit=crop",
      impact:
        "Python est mon langage principal pour les pipelines de données et l'automatisation chez MyDesyn. L'activation par défaut du JIT dans Python 3.14 apporte des gains de performance automatiques sur mes scripts de traitement de données volumineuses. La migration est planifiée dès validation de la compatibilité avec nos dépendances critiques (Pandas, SQLAlchemy, FastAPI).",
    },
  ]

  return (
    <section id="tech-watch" className="py-12">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Veille technologique</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Je reste constamment informé des dernières évolutions dans mon domaine
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-8">
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
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
              <StaggerContainer className="grid gap-6 md:grid-cols-2">
                {techNews.map((news) => (
                  <StaggerItem key={news.id}>
                    <TechNewsCard news={news} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </TabsContent>

            {["intelligence-artificielle", "developpement-web", "securite", "developpement-logiciel"].map(
              (category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <StaggerContainer className="grid gap-6 md:grid-cols-2">
                    {techNews
                      .filter((news) => news.category === category)
                      .map((news) => (
                        <StaggerItem key={news.id}>
                          <TechNewsCard news={news} />
                        </StaggerItem>
                      ))}
                  </StaggerContainer>
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
    image: string
    impact: string
  }
}

function TechNewsCard({ news }: TechNewsCardProps) {
  return (
    <Card className="bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {news.image && (
        <Link href={news.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <div className="relative w-full h-48 overflow-hidden hover:opacity-90 transition-opacity">
            <img
              src={news.image}
              alt={news.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </Link>
      )}
      <CardHeader>
        <Link href={news.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">
          <CardTitle>{news.title}</CardTitle>
        </Link>
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