import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function DocumentsSection() {
  return (
    <section id="documents" className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Documents E5 et E6 - BTS SIO
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Téléchargez les documents officiels pour l'épreuve E5 et E6 du BTS
            </p>
          </div>
        </div>

        {/* Documents PDF */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors bg-gradient-to-br from-background via-background to-primary/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Tableau de synthèse complet
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fiche E5 - Tableau de synthèse
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Vue détaillée de toutes les compétences mobilisées dans chaque
              réalisation professionnelle selon le référentiel BTS SIO.
            </p>
            <Button asChild className="w-full" size="lg">
              <Link href="/docs/tableau-synthese-realisations.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Télécharger le tableau de synthèse
              </Link>
            </Button>
          </Card>

          <Card className="p-6 border-2 border-secondary/20 hover:border-secondary transition-colors bg-gradient-to-br from-background via-background to-secondary/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <FileText className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Réalisations détaillées
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fiches descriptives E6
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Documentation complète de chaque réalisation professionnelle avec
              contexte, technologies utilisées et compétences mobilisées.
            </p>
            <Button asChild variant="secondary" className="w-full" size="lg">
              <Link href="/docs/E5_1751374731937.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Télécharger les réalisations
              </Link>
            </Button>
          </Card>
        </div>

        {/* Actions rapides */}
        <div className="flex justify-center gap-4 mt-8">
          <Button asChild>
            <Link href="/docs/tableau-synthese-realisations.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Tableau complet
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/E5_1751374731937.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Réalisations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
