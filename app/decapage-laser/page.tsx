import Link from "next/link";
import { ApplicationGrid } from "@/components/services/application-grid";
import { BenefitList } from "@/components/services/benefit-list";
import { DemoSection, OnSiteSection, ProjectJourney } from "@/components/commercial-sections";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import styles from "@/components/services/photography.module.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Décapage laser Fréjus, Var & PACA", "Décapage laser à Fréjus, dans le Var et en PACA : nettoyage précis, préparation et intervention sur site.", "/decapage-laser");
const audiences = [
  { label: "Industries et entreprises", text: "Nettoyage et préparation de pièces.", src: "/images/laser/industrial-laser-cleaning.webp", alt: "Outil de nettoyage laser retirant la corrosion d’une pièce métallique industrielle", position: "center 70%" },
  { label: "Garages et automobile", text: "Pièces mécaniques, éléments métalliques, restauration.", src: "/images/laser/automotive-engine.webp", alt: "Moteur automobile démonté et composants métalliques dans un garage", position: "center 55%" },
  { label: "Métalliers et ferronniers", text: "Retrait de rouille, peinture et oxydation.", src: "/images/laser/wrought-iron-gate.webp", alt: "Détails d’un ancien portail en fer forgé présentant de la rouille", position: "center 45%" },
  { label: "Bâtiment", text: "Préparation et rénovation de surfaces.", src: "/images/laser/building-steelwork.webp", alt: "Profilés métalliques de construction présentant de la corrosion", position: "center" },
  { label: "Nautisme", text: "Traitement de certaines pièces et éléments métalliques compatibles.", src: "/images/laser/marine-propellers.webp", alt: "Hélice métallique et embase d’un moteur de bateau", position: "center 65%" },
  { label: "Particuliers", text: "Restauration d’objets, mobilier ou pièces métalliques.", src: "/images/laser/antique-iron-key.webp", alt: "Ancienne clé en fer à restaurer suspendue à un support en bois", position: "70% center" },
] as const;
const benefits = [
  { title: "Précision", text: "Le faisceau permet de travailler de manière très ciblée sur la couche à retirer." },
  { title: "Sans abrasif projeté", text: "Le procédé ne nécessite pas de sable ou de granulats projetés sur la surface." },
  { title: "Sans produits chimiques", text: "Le laser permet de réaliser de nombreux travaux sans décapant chimique." },
  { title: "Maîtrise du procédé", text: "La puissance, la fréquence et la vitesse de travail sont adaptées au support et au revêtement." },
  { title: "Réduction des déchets", text: "L’absence d’abrasif projeté limite les déchets secondaires générés." },
] as const;
const steps = [["Le matériau", "Métal, acier, inox, aluminium ou autre matériau compatible."], ["Le revêtement", "Rouille, peinture, oxydation, résidus ou autre dépôt."], ["Le résultat recherché", "Nettoyage, décapage, préparation avant peinture, préparation avant soudure ou restauration."]] as const;

export default function LaserPage() { return <div className={`${styles.page} ${styles.laser}`}>
  <PageHero eyebrow="Décapage laser" title="Décapage laser" subtitle="Une technologie de précision pour nettoyer et décaper les surfaces" image="/images/laser/laser-cleaning-hero.webp"><Link className="primary-button" href="/contact">Demander un devis →</Link></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="La technologie" title="Un décapage ciblé et maîtrisé" /><div className="prose"><p>Le décapage laser utilise un faisceau laser pour éliminer avec précision les couches indésirables présentes sur une surface : rouille, oxydation, peinture, vernis, résidus ou certains revêtements.</p><p>La technologie permet de cibler la matière à retirer tout en limitant l’action sur le support.</p><p>Les réglages sont adaptés à chaque matériau et à chaque intervention.</p></div></div></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Pour qui ?" title="Professionnels comme particuliers" intro="Le décapage laser s’adresse aux professionnels comme aux particuliers." /><ApplicationGrid items={audiences} /></div></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Pourquoi choisir le laser ?" title="Précision et maîtrise du procédé" /><BenefitList items={benefits} /></div></section>
  <section className="content-section process-section"><div className="shell"><SectionTitle eyebrow="Comment fonctionne le laser ?" title="Une action progressive sur la couche à retirer" intro="Le faisceau laser est dirigé vers la surface à traiter. Son énergie agit sur la couche indésirable et permet de la retirer progressivement." /><p className="process-intro">Avant chaque intervention, nous déterminons :</p><div className="process-grid">{steps.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <div className={`shell ${styles.credits}`}><p>Photographies de nettoyage laser : <a href="https://www.dvidshub.net/image/6459434/frce-explores-new-technology-using-lasers-remove-corrosion-and-coatings-metallic-components">Kimberly Koonce</a> et <a href="https://www.dvidshub.net/image/5175837/new-laser-cleans-up-corrosion">Zachary Heal</a> / DVIDS, domaine public. Illustrations externes, pas des chantiers AZUR LASER.</p><p lang="en">The appearance of U.S. Department of War (DoW) visual information does not imply or constitute DoW endorsement.</p></div>
  <OnSiteSection /><DemoSection /><ProjectJourney />
</div>; }
