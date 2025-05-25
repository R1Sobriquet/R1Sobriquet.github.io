
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
              Documents E6 - BTS SIO
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Téléchargez les documents officiels pour l'épreuve E6
            </p>
          </div>
        </div>

        {/* En-tête officiel */}
        <Card className="mb-8">
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

        {/* Documents PDF */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Tableau de synthèse complet</h3>
                <p className="text-sm text-muted-foreground">
                  Matrice des compétences
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Vue détaillée de toutes les compétences mobilisées dans chaque
              réalisation professionnelle selon le référentiel BTS SIO.
            </p>
            <Button asChild className="w-full" size="lg">
              <Link href="/docs/tableau-synthese-complet.pdf.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Télécharger le tableau de synthèse
              </Link>
            </Button>
          </Card>

          <Card className="p-6 border-2 border-secondary/20 hover:border-secondary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <FileText className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Réalisations détaillées</h3>
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
              <Link href="/docs/tableau-synthese-realisations.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Télécharger les réalisations
              </Link>
            </Button>
          </Card>
        </div>

        {/* Actions rapides */}
        <div className="flex justify-center gap-4 mt-8">
          <Button asChild>
            <Link href="/docs/tableau-synthese-complet.pdf.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Tableau complet
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/tableau-synthese-realisations.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Réalisations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
