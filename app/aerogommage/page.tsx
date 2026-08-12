import { ApplicationGrid } from "@/components/services/application-grid";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { VisualStory } from "@/components/services/visual-story";
import { GlobalCta } from "@/components/layout/global-cta";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Aérogommage", "Aérogommage du bois, de la pierre et du métal : principe, choix de l’abrasif et applications.", "/aerogommage");
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
  <PageHero eyebrow="Décapage polyvalent" title="Aérogommage" subtitle="Un décapage polyvalent pour retrouver la matière" image="/images/aerogommage/wood-workshop-sanding.webp"><a className="primary-button" href="/contact">Étudier mon projet <span>→</span></a></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="Le procédé" title="Une action ajustée au support" /><div className="prose"><p>L’aérogommage projette à basse pression un abrasif sélectionné en fonction du support, de la couche à retirer et du rendu recherché. Cette combinaison permet de travailler sur des surfaces et des volumes très variés.</p><p>Le bois, la pierre ou le métal ne réagissent pas de la même manière. Un essai permet d’observer la réaction de la matière et d’éviter une intervention trop agressive ou un rendu incompatible avec le projet.</p></div></div></section>
  <section className="visual-story-section"><VisualStory items={[{ title: "Retrouver le bois", text: "Sur mobilier, poutres ou menuiseries, l’objectif est défini selon l’essence, l’ancienne finition et l’aspect final souhaité.", image: "/images/aerogommage/furniture-restoration-workshop.webp", label: "Travail de restauration sur mobilier en bois" }, { title: "Respecter la matière", text: "Pierre, brique et façades compatibles demandent un abrasif et une pression choisis après observation, puis validation sur une zone d’essai.", image: "/images/aerogommage/wood-brick-surface.webp", label: "Bois ancien et maçonnerie en brique" }]} /></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Applications" title="Du mobilier aux surfaces bâties" intro="La compatibilité et le niveau de finition sont évalués avant intervention." /><ApplicationGrid items={apps} /></div></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Réglages" title="Choisir le bon abrasif" intro="La qualité du résultat repose sur l’équilibre entre cinq paramètres interdépendants." /><div className="parameter-grid">{[["Granulométrie", "Dimension des particules"], ["Dureté", "Interaction avec la matière"], ["Pression", "Énergie de projection"], ["Distance", "Répartition de l’impact"], ["Angle", "Action sur le relief"]].map(([a,b]) => <article key={a}><span>+</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>
  <section className="content-section compare-methods"><div className="shell"><SectionTitle eyebrow="Orientation technique" title="Laser ou aérogommage ?" intro="Le meilleur procédé est celui qui répond au support, à la surface et au résultat attendu." /><div className="method-comparison"><article><span>01</span><h3>Laser</h3><p>Précis, ciblé et sans abrasif projeté. Il est particulièrement intéressant pour de nombreuses applications métalliques, mécaniques et industrielles.</p></article><article><span>02</span><h3>Aérogommage</h3><p>Très polyvalent, il convient à de nombreux travaux sur bois, pierre, mobilier et surfaces plus étendues, avec un réglage adapté.</p></article></div><p className="technical-note">Le choix final est proposé après analyse du support et, lorsque nécessaire, validation par un essai.</p></div></section>
  <section className="content-section comparison-section"><div className="shell"><SectionTitle eyebrow="Avant / Après" title="Retrouver la lecture de la matière" /><div className="comparison-grid"><BeforeAfterSlider title="Meuble bois" beforeLabel="Mobilier ancien" afterLabel="Préparation du bois" beforeSrc="/images/aerogommage/furniture-restoration-workshop.webp" afterSrc="/images/aerogommage/wood-surface-preparation.webp" /><BeforeAfterSlider title="Poutre" beforeLabel="Structure ancienne" afterLabel="Bois en rénovation" beforeSrc="/images/aerogommage/wood-brick-surface.webp" afterSrc="/images/aerogommage/wood-beams-renovation.webp" /><BeforeAfterSlider title="Pierre" beforeLabel="Mur ancien" afterLabel="Surface minérale" beforeSrc="/images/realisations/weathered-stone-paint.webp" afterSrc="/images/aerogommage/stone-wall-surface.webp" /></div></div></section>
  <GlobalCta />
</>; }
