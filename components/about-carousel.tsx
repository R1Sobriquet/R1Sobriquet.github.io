"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, MapPin } from "lucide-react"

export function AboutCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const slides = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Formation",
      description: "Mon parcours académique",
      content: (
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
      ),
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Expérience",
      description: "Mon parcours professionnel",
      content: (
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
      ),
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Informations",
      description: "Mes coordonnées",
      content: (
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
            <span className="text-sm">linkedin.com/in/erwann-le-rouzic-a09b64219</span>
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
      ),
    },
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <Card className="h-full mx-2">
                <CardHeader className="flex flex-row items-center gap-4">
                  {slide.icon}
                  <div className="grid gap-1">
                    <CardTitle>{slide.title}</CardTitle>
                    <CardDescription>{slide.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>{slide.content}</CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
