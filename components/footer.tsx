import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Erwann LE ROUZIC. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Portfolio réalisé dans le cadre de l&apos;épreuve E5 du BTS SIO option SLAM
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/erwannlerouzic" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/erwann-le-rouzic-a09b64219" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:erwannn.lerouzic@gmail.com">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
