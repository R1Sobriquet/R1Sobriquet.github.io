import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function SynthesisTableSection() {
  return (
    <section id="synthesis-table" className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tableau de synthèse des réalisations professionnelles
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Vue d'ensemble des compétences mobilisées selon le référentiel BTS
              SIO
            </p>
          </div>
        </div>

        {/* En-tête officiel */}
        <Card className="mb-6">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-center">
              BTS SERVICES INFORMATIQUES AUX ORGANISATIONS - SESSION 2025
            </CardTitle>
            <div className="text-center space-y-2">
              <p className="text-primary-foreground/90">
                <strong>NOM et prénom :</strong> LE ROUZIC Erwann
              </p>
              <p className="text-primary-foreground/90">
                <strong>Centre de formation :</strong> Campus Ermitage, 156
                Avenue Jean JAURÈS, 47000 AGEN
              </p>
              <p className="text-primary-foreground/90">
                <strong>Option :</strong> ☐ SISR ☑ SLAM
              </p>
              <p className="text-primary-foreground/90">
                <strong>Adresse URL du portfolio :</strong>{" "}
                https://erwann-lerouzic.vercel.app
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* Boutons d'action */}
        <div className="flex justify-center gap-4 mb-8">
          <Button asChild>
            <Link href="/docs/tableau-synthese-complet.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Télécharger le tableau complet
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/tableau-synthese-realisations.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Télécharger les réalisations détaillées
            </Link>
          </Button>
        </div>

        {/* Section des documents PDF */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Card className="p-4 border-2 border-primary/20 hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Tableau de synthèse complet</h3>
                <p className="text-sm text-muted-foreground">
                  Matrice des compétences
                </p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Vue détaillée de toutes les compétences mobilisées dans chaque
              réalisation professionnelle.
            </p>
            <Button asChild className="w-full">
              <Link href="/docs/tableau-synthese-complet.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Télécharger le PDF
              </Link>
            </Button>
          </Card>

          <Card className="p-4 border-2 border-secondary/20 hover:border-secondary transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-secondary/10 rounded">
                <Download className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Réalisations détaillées</h3>
                <p className="text-sm text-muted-foreground">
                  Fiches descriptives
                </p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Documentation complète de chaque réalisation avec contexte,
              technologies et compétences.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/docs/tableau-synthese-realisations.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Télécharger le PDF
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
