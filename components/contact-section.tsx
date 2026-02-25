"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AnimatedSection } from "@/components/animated-section"

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactSection() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message envoyé",
          description: "Votre message a été envoyé avec succès. Je vous répondrai dès que possible.",
        })
        reset()
      } else {
        throw new Error("Erreur lors de l'envoi du message")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-12">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Me contacter</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                N&apos;hésitez pas à me contacter pour toute question ou opportunité professionnelle
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Formulaire de contact</CardTitle>
              <CardDescription>
                Envoyez-moi un message. Je réponds généralement sous 24-48h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" placeholder="Votre nom" {...register("name")} />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Votre email" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Sujet de votre message" {...register("subject")} />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Votre message" {...register("message")} className="min-h-[150px]" />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
              <CardDescription>Vous pouvez également me contacter directement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors group">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Email</h3>
                  <Link
                    href="mailto:erwannn.pro@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                  >
                    erwannn.pro@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors group">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Téléphone</h3>
                  <Link
                    href="tel:+262692357264"
                    className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                  >
                    +262 692 35 72 64
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Localisation</h3>
                  <p className="text-sm text-muted-foreground mt-1">25 Rue des Augustins, Agen</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-4">Réseaux professionnels</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="lg" asChild className="w-full justify-start gap-2">
                    <a
                      href="https://linkedin.com/in/erwann-le-rouzic-a09b64219"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start gap-2">
                    <a href="https://github.com/R1Sobriquet" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2">
              <p className="text-sm font-medium text-primary">
                📅 Disponible à partir de juillet 2026
              </p>
              <p className="text-xs text-muted-foreground">
                Actuellement en alternance chez MyDesyn jusqu&apos;à la fin de mon BTS SIO (juin 2026). Ouvert aux opportunités professionnelles pour un CDI ou une poursuite d&apos;études.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
