import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Erwann LE ROUZIC</h1>
              <p className="text-xl text-muted-foreground">Étudiant en BTS SIO option SLAM</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Développeur d&apos;applications en alternance chez MyDesyn, passionné par le développement web et les
                nouvelles technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1" asChild>
                <Link href="/cv-erwann-lerouzic.pdf" download>
                  <Download className="h-4 w-4" />
                  Télécharger mon CV
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border w-[300px] h-[300px]">
              <Image
                src="/erwann-profile.jpg"
                alt="Erwann LE ROUZIC"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
