"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function ContactDialog() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const copyEmail = () => {
    navigator.clipboard.writeText("erwannn.lerouzic@gmail.com")
    setCopied(true)
    toast({
      title: "Email copié !",
      description: "L'adresse email a été copiée dans le presse-papier"
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline">
          <Mail className="h-4 w-4 mr-2" />
          Me contacter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Me contacter</DialogTitle>
          <DialogDescription>
            N'hésitez pas à me contacter pour toute opportunité professionnelle
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {/* Email avec bouton copier */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground truncate">
                  erwannn.lerouzic@gmail.com
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyEmail}
              className="shrink-0"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          {/* LinkedIn */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link
              href="https://linkedin.com/in/erwann-le-rouzic-a09b64219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span>Voir mon profil LinkedIn</span>
            </Link>
          </Button>

          {/* GitHub */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link
              href="https://github.com/R1Sobriquet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span>Voir mon profil GitHub</span>
            </Link>
          </Button>

          {/* Localisation générale */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-medium">Localisation</p>
              <p className="text-sm text-muted-foreground">Agen, France</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
