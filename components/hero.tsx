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
    <section className="py-12 md:py-24 pb-16 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Erwann LE ROUZIC</h1>
              <p className="text-xl text-muted-foreground">Étudiant en BTS SIO option SLAM</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Développeur d&apos;applications en alternance chez MyDesyn, passionné par le développement web et les
                nouvelles technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/cv-erwann-lerouzic.pdf" download>
                  <Download className="h-5 w-5" />
                  Télécharger mon CV
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={onContactClick}>
                Me contacter
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/erwann-profile.jpg"
                alt="Erwann LE ROUZIC"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}