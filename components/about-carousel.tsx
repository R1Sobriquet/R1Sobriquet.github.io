"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

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

  const scrollPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const scrollNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex
    const isActive = diff === 0
    const isLeft = diff === -1 || (activeIndex === 0 && index === slides.length - 1)
    const isRight = diff === 1 || (activeIndex === slides.length - 1 && index === 0)

    if (isActive) {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 30,
        x: "0%",
      }
    } else if (isLeft) {
      return {
        scale: 0.75,
        opacity: 0.5,
        zIndex: 10,
        x: "-60%",
      }
    } else if (isRight) {
      return {
        scale: 0.75,
        opacity: 0.5,
        zIndex: 10,
        x: "60%",
      }
    } else {
      return {
        scale: 0.5,
        opacity: 0,
        zIndex: 0,
        x: "0%",
      }
    }
  }

  return (
    <div className="relative py-12">
      <div className="relative h-[500px] flex items-center justify-center">
        {slides.map((slide, index) => {
          const style = getSlideStyle(index)
          return (
            <motion.div
              key={index}
              className="absolute w-full max-w-md"
              initial={false}
              animate={style}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{
                pointerEvents: style.zIndex === 30 ? "auto" : "none",
              }}
            >
              <Card className="h-full bg-gradient-to-br from-background via-background to-primary/5">
                <CardHeader className="flex flex-row items-center gap-4">
                  {slide.icon}
                  <div className="grid gap-1">
                    <CardTitle>{slide.title}</CardTitle>
                    <CardDescription>{slide.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>{slide.content}</CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

