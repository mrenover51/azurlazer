import { GlobalCta } from "@/components/layout/global-cta";
import { RealizationsGallery } from "@/components/realizations/realizations-gallery";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Nos réalisations Avant / Après", "Découvrez six réalisations AZUR LASER sur pièces mécaniques, métal et pierre grâce à nos comparateurs Avant / Après interactifs.", "/realisations");
export default function RealisationsPage() { return <>
  <PageHero eyebrow="AZUR LASER · Avant / Après" title="NOS RÉALISATIONS" subtitle="Découvrez les résultats de nos interventions grâce à nos comparateurs Avant / Après. Faites glisser le curseur pour voir la différence." />
  <section className="content-section comparison-section" aria-label="Galerie des réalisations Avant / Après"><div className="shell"><RealizationsGallery premium /></div></section>
  <GlobalCta />
</>; }
