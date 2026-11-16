import Link from "next/link";
import { ApplicationGrid } from "@/components/services/application-grid";
import { BenefitList } from "@/components/services/benefit-list";
import { DemoSection, OnSiteSection, ProjectJourney } from "@/components/commercial-sections";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import styles from "@/components/services/photography.module.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Aérogommage Fréjus, Var & PACA", "Aérogommage à Fréjus, dans le Var et en PACA pour le bois, le métal, la pierre et la rénovation, avec intervention sur site.", "/aerogommage");
const apps = [
  { label: "Maisons et bâtiments", src: "/images/aerogommage/stone-house.webp", alt: "Façade ancienne en pierre et brique avec menuiseries en bois", position: "center" }, { label: "Menuiseries et volets", src: "/images/aerogommage/weathered-wood-shutters.webp", alt: "Volets et panneaux de bois ancien à la peinture écaillée", position: "center" },
  { label: "Meubles et mobilier", src: "/images/aerogommage/wood-restoration.webp", alt: "Buffet ancien en bois sculpté et portes vitrées", position: "center 45%" }, { label: "Escaliers et poutres", src: "/images/aerogommage/wood-staircase.webp", alt: "Escalier intérieur avec marches et rampe en bois", position: "center 60%", secondary: { src: "/images/aerogommage/timber-beams.webp", alt: "Poutres et charpente en bois dans des combles anciens", position: "center top" } },
  { label: "Portails et structures métalliques", src: "/images/aerogommage/iron-gate.webp", alt: "Grille métallique ancienne avec traces de corrosion", position: "center" }, { label: "Carrosserie et pièces mécaniques", src: "/images/aerogommage/engine-block.webp", alt: "Bloc moteur métallique démonté sur un établi de mécanique", position: "center" },
  { label: "Pierre et matériaux de construction", src: "/images/aerogommage/stone-brick-masonry.webp", alt: "Mur ancien composé de pierres, de briques et de joints de mortier", position: "center" }, { label: "Travaux de restauration", src: "/images/aerogommage/antique-wood-cabinet.webp", alt: "Détail des panneaux de bois et ferrures d’un meuble ancien", position: "center" },
] as const;
const benefits = [
  { title: "Une solution éco-responsable", text: "L’aérogommage peut utiliser des abrasifs d’origine minérale ou végétale et permet, selon les applications, de limiter ou d’éviter l’utilisation de décapants chimiques." },
  { title: "Précis et maîtrisé", text: "La pression de travail et l’abrasif sont adaptés au matériau et au résultat recherché." },
  { title: "Respectueux des supports", text: "Le travail à basse pression permet d’intervenir avec finesse sur de nombreux supports." },
  { title: "Sans décapant chimique", text: "De nombreuses opérations peuvent être réalisées sans produits chimiques décapants." },
  { title: "Polyvalent", text: "Bois, métal, pierre, mobilier, volets, portails ou pièces mécaniques." },
] as const;
const removable = ["Peintures", "Vernis", "Rouille", "Oxydation", "Salissures", "Résidus", "Revêtements anciens", "Certaines traces et dépôts"];

export default function AeroPage() { return <div className={`${styles.page} ${styles.aero}`}>
  <PageHero eyebrow="Aérogommage" title="Aérogommage" subtitle="Un décapage efficace, précis et respectueux des surfaces" image="/images/aerogommage/wood-shutters-hero.webp"><Link className="primary-button" href="/contact">Demander un devis →</Link></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="La technique" title="Un décapage adapté à chaque support" /><div className="prose"><p>L’aérogommage est une technique de décapage qui utilise un abrasif projeté à basse pression pour retirer peintures, vernis, rouille, salissures et différents revêtements.</p><p>La pression et le choix de l’abrasif sont adaptés à chaque support afin d’obtenir un décapage efficace tout en maîtrisant l’action sur la surface.</p></div></div></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Pour qui ?" title="De nombreux projets de rénovation" /><ApplicationGrid items={apps} /></div></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Pourquoi choisir l’aérogommage ?" title="Une solution précise et polyvalente" /><BenefitList items={benefits} /></div></section>
  <section className="content-section process-section"><div className="shell split-content"><SectionTitle eyebrow="Comment fonctionne l’aérogommage ?" title="Air comprimé, abrasif et basse pression" /><div className="prose"><p>L’abrasif est mélangé à de l’air comprimé puis projeté à basse pression sur la surface.</p><p>L’impact de l’abrasif permet de décoller progressivement la couche à retirer.</p><p>Nous adaptons l’abrasif, la pression et la distance de travail en fonction du support et du résultat souhaité.</p></div></div></section>
  <section className="content-section removable-section"><div className="shell"><SectionTitle eyebrow="Que peut-on retirer ?" title="Les couches et dépôts courants" /><div className="removable-grid">{removable.map((item, i) => <article key={item}><span>0{i + 1}</span><h3>{item}</h3></article>)}</div></div></section>
  <OnSiteSection /><DemoSection /><ProjectJourney />
</div>; }
