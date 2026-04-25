"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface HeroProps {
  onContactClick?: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 pb-12 md:pb-16 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                Erwann LE ROUZIC
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Étudiant en BTS SIO option SLAM
              </p>
              <p className="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Développeur d&apos;applications en alternance chez MyDesyn, passionné par le développement web et les
                nouvelles technologies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 pt-2">
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link href="/cv-erwann-lerouzic.pdf" download>
                  <Download className="h-5 w-5" />
                  Télécharger mon CV
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={onContactClick}>
                Me contacter
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-xl w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/erwann-profile.jpg"
                alt="Erwann LE ROUZIC"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, (max-width: 1280px) 350px, 400px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}