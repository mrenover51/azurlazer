import Link from "next/link";
import { ApplicationGrid } from "@/components/services/application-grid";
import { BenefitList } from "@/components/services/benefit-list";
import { DemoSection, OnSiteSection, ProjectJourney } from "@/components/commercial-sections";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Décapage laser Fréjus, Var & PACA", "Décapage laser à Fréjus, dans le Var et en PACA : nettoyage précis, préparation et intervention sur site.", "/decapage-laser");
const audiences = [
  { label: "Industries et entreprises", text: "Nettoyage et préparation de pièces.", src: "/images/laser/industrial-mechanical-gears.webp" },
  { label: "Garages et automobile", text: "Pièces mécaniques, éléments métalliques, restauration.", src: "/images/laser/painted-rust-metal.webp" },
  { label: "Métalliers et ferronniers", text: "Retrait de rouille, peinture et oxydation.", src: "/images/laser/rust-metal-surface.webp" },
  { label: "Bâtiment", text: "Préparation et rénovation de surfaces.", src: "/images/laser/rusted-industrial-steel.webp" },
  { label: "Nautisme", text: "Traitement de certaines pièces et éléments métalliques compatibles.", src: "/images/laser/laser-metal-sparks.webp" },
  { label: "Particuliers", text: "Restauration d’objets, mobilier ou pièces métalliques.", src: "/images/home/laser-industrial-hero.webp" },
] as const;
const benefits = [
  { title: "Précision", text: "Le faisceau permet de travailler de manière très ciblée sur la couche à retirer." },
  { title: "Sans abrasif projeté", text: "Le procédé ne nécessite pas de sable ou de granulats projetés sur la surface." },
  { title: "Sans produits chimiques", text: "Le laser permet de réaliser de nombreux travaux sans décapant chimique." },
  { title: "Maîtrise du procédé", text: "La puissance, la fréquence et la vitesse de travail sont adaptées au support et au revêtement." },
  { title: "Réduction des déchets", text: "L’absence d’abrasif projeté limite les déchets secondaires générés." },
] as const;
const steps = [["Le matériau", "Métal, acier, inox, aluminium ou autre matériau compatible."], ["Le revêtement", "Rouille, peinture, oxydation, résidus ou autre dépôt."], ["Le résultat recherché", "Nettoyage, décapage, préparation avant peinture, préparation avant soudure ou restauration."]] as const;

export default function LaserPage() { return <>
  <PageHero eyebrow="Décapage laser" title="Décapage laser" subtitle="Une technologie de précision pour nettoyer et décaper les surfaces" image="/images/home/laser-industrial-hero.webp"><Link className="primary-button" href="/contact">Demander un devis →</Link></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="La technologie" title="Un décapage ciblé et maîtrisé" /><div className="prose"><p>Le décapage laser utilise un faisceau laser pour éliminer avec précision les couches indésirables présentes sur une surface : rouille, oxydation, peinture, vernis, résidus ou certains revêtements.</p><p>La technologie permet de cibler la matière à retirer tout en limitant l’action sur le support.</p><p>Les réglages sont adaptés à chaque matériau et à chaque intervention.</p></div></div></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Pour qui ?" title="Professionnels comme particuliers" intro="Le décapage laser s’adresse aux professionnels comme aux particuliers." /><ApplicationGrid items={audiences} /></div></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Pourquoi choisir le laser ?" title="Précision et maîtrise du procédé" /><BenefitList items={benefits} /></div></section>
  <section className="content-section process-section"><div className="shell"><SectionTitle eyebrow="Comment fonctionne le laser ?" title="Une action progressive sur la couche à retirer" intro="Le faisceau laser est dirigé vers la surface à traiter. Son énergie agit sur la couche indésirable et permet de la retirer progressivement." /><p className="process-intro">Avant chaque intervention, nous déterminons :</p><div className="process-grid">{steps.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <OnSiteSection /><DemoSection /><ProjectJourney />
</>; }
