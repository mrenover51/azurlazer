import { ApplicationGrid } from "@/components/services/application-grid";
import { BenefitList } from "@/components/services/benefit-list";
import { VisualStory } from "@/components/services/visual-story";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GlobalCta } from "@/components/layout/global-cta";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Décapage laser à Fréjus et dans le Var", "Décapage laser à Fréjus et dans le Var : principe, avantages, applications et supports compatibles, avec intervention dans un rayon habituel d’environ 100 km.", "/decapage-laser");
const applications = [
  { label: "Enlever la rouille", src: "/images/laser/rust-metal-surface.webp" },
  { label: "Retirer certaines peintures", src: "/images/laser/painted-rust-metal.webp" },
  { label: "Nettoyer des pièces métalliques", src: "/images/laser/industrial-mechanical-gears.webp" },
  { label: "Préparer avant peinture", src: "/images/laser/laser-metal-sparks.webp" },
  { label: "Nettoyer certaines pièces mécaniques", src: "/images/laser/industrial-mechanical-gears.webp" },
  { label: "Restaurer des éléments anciens", src: "/images/laser/rusted-industrial-steel.webp" },
];
const benefits = [
  { title: "Travail très précis", text: "Le laser vise la zone à nettoyer et son réglage est adapté au travail demandé." },
  { title: "Sans sable projeté", text: "Aucun sable ni autre produit abrasif n’est projeté sur la pièce." },
  { title: "Peu de déchets ajoutés", text: "Le nettoyage ne laisse pas de sable usagé à ramasser après l’intervention." },
  { title: "Bien adapté au métal", text: "Il convient à de nombreux travaux de décapage de rouille et de décapage de peinture sur métal." },
  { title: "Réglage adapté au support", text: "La puissance et la vitesse de travail sont ajustées à chaque pièce." },
];

export default function LaserPage() { return <>
  <PageHero eyebrow="Décapage précis" title="Décapage laser" subtitle="Retirer la rouille et certains revêtements avec précision" image="/images/home/laser-industrial-hero.webp"><a className="primary-button" href="/contact">Envoyer des photos <span>→</span></a></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="En quelques mots" title="Qu’est-ce que le décapage laser ?" /><div className="prose"><p>Le décapage laser permet de retirer la rouille, certaines peintures et différents dépôts sur une surface de manière très précise.</p><p>Le laser agit directement sur la couche que l’on souhaite retirer. Le réglage est adapté à chaque support et à chaque travail.</p></div></div></section>
  <section className="visual-story-section"><VisualStory items={[{ title: "D’abord, nous regardons la pièce", text: "Nous vérifions la matière, la couche à retirer et le résultat souhaité. Cela permet de choisir un réglage adapté.", image: "/images/laser/painted-rust-metal.webp", label: "Peinture et rouille sur métal" }, { title: "Puis, nous adaptons le travail", text: "La forme de la pièce, son état et son usage sont pris en compte. Un essai peut être réalisé si nécessaire.", image: "/images/laser/industrial-mechanical-gears.webp", label: "Pièces mécaniques en métal" }]} /></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Pour quoi faire ?" title="Les usages courants du décapage laser" intro="Le laser est particulièrement intéressant pour de nombreux travaux précis sur métal." /><ApplicationGrid items={applications} /></div></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Pourquoi choisir le laser ?" title="Un nettoyage précis et bien maîtrisé" /><BenefitList items={benefits} /><p className="technical-note">Vous ne savez pas si le laser convient à votre pièce ? Envoyez-nous simplement quelques photos. Nous vous conseillerons.</p></div></section>
  <section className="content-section materials-section"><div className="shell materials-grid"><div><SectionTitle eyebrow="Supports" title="Pour quels matériaux ?" /><p>Le décapage laser est surtout utilisé sur le métal. La compatibilité dépend toutefois de la pièce et de ce qu’il faut retirer. Nous vérifions donc chaque demande avant de vous conseiller.</p></div><ul>{["Acier", "Inox", "Fonte", "Aluminium selon le projet", "Certains alliages", "Autres supports après essai"].map((x) => <li key={x}>{x}</li>)}</ul></div></section>
  <section className="content-section comparison-section"><div className="shell"><SectionTitle eyebrow="Avant / Après" title="Le résultat en images" /><div className="comparison-grid"><BeforeAfterSlider title="Rouille" beforeLabel="Surface rouillée" afterLabel="Métal nettoyé" beforeSrc="/images/laser/rust-metal-surface.webp" afterSrc="/images/laser/laser-metal-sparks.webp" /><BeforeAfterSlider title="Pièce mécanique" beforeLabel="Pièce à nettoyer" afterLabel="Métal nettoyé" beforeSrc="/images/laser/industrial-mechanical-gears.webp" afterSrc="/images/home/laser-industrial-hero.webp" /><BeforeAfterSlider title="Peinture" beforeLabel="Ancienne peinture" afterLabel="Métal préparé" beforeSrc="/images/laser/painted-rust-metal.webp" afterSrc="/images/laser/laser-metal-sparks.webp" /></div></div></section>
  <GlobalCta />
</>; }
