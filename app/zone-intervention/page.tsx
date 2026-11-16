import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { InterventionExplorer } from "@/components/intervention/intervention-explorer";
import styles from "@/components/intervention/intervention.module.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Zone d’intervention — Fréjus, Var et Alpes-Maritimes",
  "Décapage laser et aérogommage à Fréjus, dans le Var et les Alpes-Maritimes. Découvrez notre rayon habituel d’environ 100 km, vérifiez votre commune et demandez un devis.",
  "/zone-intervention",
);

export default function ZonePage() {
  return <>
    <PageHero eyebrow="Fréjus (83) · Var · Alpes-Maritimes" title="Nous intervenons près de chez vous" subtitle="Décapage laser et aérogommage à Fréjus, dans le Var et les Alpes-Maritimes, principalement dans un rayon d'environ 100 km.">
      <Link className="primary-button" href="/contact">Demander un devis <span aria-hidden="true">→</span></Link>
    </PageHero>
    <div className="content-section"><div className="shell"><InterventionExplorer /></div></div>
    <section className="shell" aria-labelledby="outside-zone-heading"><div className={styles.cta}>
      <div><p className="section-eyebrow"><span />Étudions votre demande</p><h2 id="outside-zone-heading">Votre ville n’est pas dans la liste ?</h2><p>Envoyez-nous votre localisation et quelques photos de votre projet. Nous étudierons les possibilités d’intervention.</p></div>
      <Link className="primary-button" href="/contact">Parler de mon projet <span aria-hidden="true">→</span></Link>
    </div></section>
  </>;
}
