import { ApplicationGrid } from "@/components/services/application-grid";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { VisualStory } from "@/components/services/visual-story";
import { GlobalCta } from "@/components/layout/global-cta";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Aérogommage à Fréjus et dans le Var", "Aérogommage à Fréjus et dans le Var pour le bois, la pierre et le métal, avec intervention dans un rayon habituel d’environ 100 km.", "/aerogommage");
const apps = [
  { label: "Bois", src: "/images/aerogommage/wood-workshop-sanding.webp" },
  { label: "Poutres", src: "/images/aerogommage/wood-beams-renovation.webp" },
  { label: "Meubles", src: "/images/aerogommage/furniture-restoration-workshop.webp" },
  { label: "Volets", src: "/images/aerogommage/wooden-shutters-brick.webp" },
  { label: "Portes", src: "/images/aerogommage/wooden-shutters-brick.webp" },
  { label: "Escaliers", src: "/images/aerogommage/wood-surface-preparation.webp" },
  { label: "Métal", src: "/images/laser/rusted-industrial-steel.webp" },
  { label: "Pierre", src: "/images/aerogommage/stone-wall-surface.webp" },
  { label: "Brique", src: "/images/aerogommage/wood-brick-surface.webp" },
  { label: "Façades compatibles", src: "/images/realisations/weathered-stone-paint.webp" },
  { label: "Mobilier ancien", src: "/images/aerogommage/furniture-restoration-workshop.webp" },
  { label: "Éléments décoratifs", src: "/images/aerogommage/wood-surface-preparation.webp" },
];

export default function AeroPage() { return <>
  <PageHero eyebrow="Décapage polyvalent" title="Aérogommage" subtitle="Retirer peinture, vernis et salissures sur de nombreux supports" image="/images/aerogommage/wood-workshop-sanding.webp"><a className="primary-button" href="/contact">Envoyer des photos <span>→</span></a></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="En quelques mots" title="Qu’est-ce que l’aérogommage ?" /><div className="prose"><p>L’aérogommage permet de décaper une surface grâce à la projection contrôlée d’un produit très fin.</p><p>C’est une solution particulièrement intéressante pour retirer peinture, vernis ou salissures sur de nombreux supports.</p></div></div></section>
  <section className="visual-story-section"><VisualStory items={[{ title: "Retrouver le bois", text: "Sur un meuble, une poutre ou un volet, nous adaptons le travail au bois et à la finition que vous souhaitez ensuite appliquer.", image: "/images/aerogommage/furniture-restoration-workshop.webp", label: "Restauration d’un meuble en bois" }, { title: "Nettoyer la pierre et la brique", text: "Nous ajustons la méthode à la surface. Un essai peut être réalisé pour vérifier le rendu avant d’aller plus loin.", image: "/images/aerogommage/wood-brick-surface.webp", label: "Bois ancien et mur en brique" }]} /></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Idéal pour…" title="De nombreux projets de rénovation" intro="Meubles, poutres, volets, portes, escaliers, pierre, brique, métal ou éléments anciens : nous vérifions la méthode adaptée à votre support." /><ApplicationGrid items={apps} /></div></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Notre savoir-faire" title="Un réglage adapté à votre surface" intro="Nous adaptons la pression et le produit utilisé à la surface afin d’obtenir le résultat recherché." /><div className="parameter-grid">{[["Le support", "Bois, pierre, brique ou métal"], ["La couche à retirer", "Peinture, vernis ou salissures"], ["La pression", "Ajustée pour chaque travail"], ["La zone à traiter", "Petite pièce ou surface étendue"], ["Le résultat souhaité", "Surface remise à nu ou prête à finir"]].map(([a,b]) => <article key={a}><span>+</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>
  <section className="content-section compare-methods"><div className="shell"><SectionTitle eyebrow="Nous vous conseillons" title="Laser ou aérogommage ?" intro="Pas besoin de connaître la différence avant de nous contacter. Montrez-nous simplement ce que vous souhaitez décaper : nous vous conseillerons la méthode la plus adaptée." /><div className="method-comparison"><article><span>01</span><h3>Laser</h3><p>Particulièrement adapté à de nombreux travaux précis sur métal : rouille, pièces mécaniques, préparation de surface et certains revêtements.</p></article><article><span>02</span><h3>Aérogommage</h3><p>Très polyvalent pour le bois, les meubles, les poutres, les volets, la pierre, la brique et de nombreux travaux de rénovation.</p></article></div><p className="technical-note"><strong>Un doute ?</strong> Envoyez-nous une photo.</p></div></section>
  <section className="content-section comparison-section"><div className="shell"><SectionTitle eyebrow="Avant / Après" title="Le résultat en images" /><div className="comparison-grid"><BeforeAfterSlider title="Meuble en bois" beforeLabel="Ancien vernis" afterLabel="Bois remis à nu" beforeSrc="/images/aerogommage/furniture-restoration-workshop.webp" afterSrc="/images/aerogommage/wood-surface-preparation.webp" /><BeforeAfterSlider title="Poutre" beforeLabel="Bois ancien" afterLabel="Bois remis à nu" beforeSrc="/images/aerogommage/wood-brick-surface.webp" afterSrc="/images/aerogommage/wood-beams-renovation.webp" /><BeforeAfterSlider title="Pierre" beforeLabel="Pierre encrassée" afterLabel="Pierre nettoyée" beforeSrc="/images/realisations/weathered-stone-paint.webp" afterSrc="/images/aerogommage/stone-wall-surface.webp" /></div></div></section>
  <GlobalCta />
</>; }
