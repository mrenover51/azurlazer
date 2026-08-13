import Link from "next/link";
import { GlobalCta } from "@/components/layout/global-cta";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Zone d’intervention — Fréjus, Var et alentours",
  "AZUR LASER intervient pour le décapage laser et l’aérogommage à Fréjus, dans le Var et sur une partie des Alpes-Maritimes, dans un rayon habituel d’environ 100 km.",
  "/zone-intervention",
);

export default function ZonePage() {
  return <>
    <PageHero eyebrow="Fréjus · Var · Côte d’Azur" title="Zone d’intervention" subtitle="Basés à Fréjus, nous intervenons principalement dans un rayon d’environ 100 km." />
    <section className="content-section"><div className="shell zone-grid">
      <div className="map-placeholder" aria-label="Représentation d’un rayon approximatif de 100 kilomètres autour de Fréjus"><span>Zone habituelle · environ 100 km</span><div className="map-radar"><i className="radar-axis radar-axis-horizontal" /><i className="radar-axis radar-axis-vertical" /><b>100 km</b></div><strong>FRÉJUS</strong><small>Var · 83</small></div>
      <div><SectionTitle eyebrow="Secteur habituel" title="Au départ de Fréjus" /><p className="body-large">Nous nous déplaçons dans le Var et dans une partie des Alpes-Maritimes pour vos projets de décapage laser et d’aérogommage.</p><dl className="zone-data"><div><dt>Base</dt><dd>{company.intervention.departureCity}</dd></div><div><dt>Département</dt><dd>{company.intervention.department}</dd></div><div><dt>Rayon habituel</dt><dd>{company.intervention.radius}</dd></div></dl></div>
    </div></section>
    <section className="content-section alt-section service-cities"><div className="shell"><SectionTitle eyebrow="Principaux secteurs" title="Une présence locale, une zone étendue" intro="Nous intervenons notamment dans les secteurs suivants, sans que cette liste soit exhaustive." /><ul>{company.intervention.mainCities.map((city) => <li key={city}>{city}</li>)}</ul></div></section>
    <section className="content-section extended-travel"><div className="shell split-content"><SectionTitle eyebrow="Un peu plus loin ?" title="Contactez-nous" /><div><p className="body-large">Vous êtes un peu plus loin ? Selon le chantier, nous pouvons étudier votre demande.</p><Link className="primary-button" href="/contact">Parler de mon projet <span>→</span></Link></div></div></section>
    <section className="zone-cta"><div className="shell"><p>Votre chantier est-il dans notre secteur ?</p><h2>Parlez-nous de votre projet.</h2><Link className="primary-button" href="/contact">Demander un devis <span>→</span></Link></div></section>
    <GlobalCta />
  </>;
}
