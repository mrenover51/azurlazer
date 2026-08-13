import Link from "next/link";
import { Hero } from "@/components/hero";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { DemoSection, OnSiteSection, ProjectJourney, TechnologyChooser } from "@/components/commercial-sections";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionTitle } from "@/components/ui/section-title";
import { BenefitList } from "@/components/services/benefit-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Décapage laser & aérogommage à Fréjus", "Décapage laser et aérogommage à Fréjus, dans le Var et en région PACA. Intervention sur site pour professionnels et particuliers.", "/");

const reasons = [
  { title: "La bonne technologie pour chaque besoin", text: "Laser ou aérogommage : nous adaptons le procédé au support et au résultat recherché." },
  { title: "Intervention sur site", text: "Nous nous déplaçons directement dans vos locaux, sur vos chantiers ou chez vous lorsque l’intervention le permet." },
  { title: "Deux technologies complémentaires", text: "La précision du laser associée à la polyvalence de l’aérogommage." },
  { title: "Une approche sur mesure", text: "Chaque intervention est étudiée selon le matériau, le revêtement, l’état du support et le résultat attendu." },
  { title: "Professionnels & particuliers", text: "Prestations adaptées aux projets ponctuels comme aux besoins réguliers." },
] as const;

export default function Home() { return <>
  <Hero />
  <section className="content-section services-section"><div className="shell"><SectionTitle eyebrow="Nos prestations" title="À chaque surface, sa solution." intro="Laser ou aérogommage : nous choisissons la technologie la plus adaptée à votre support pour un décapage précis, efficace et maîtrisé." /><div className="service-cards"><ServiceCard href="/decapage-laser" title="Décapage laser" index="01" image="/images/home/laser-industrial-hero.webp">Une technologie précise pour retirer rouille, oxydation, peinture, vernis, résidus ou certains revêtements.</ServiceCard><ServiceCard href="/aerogommage" title="Aérogommage" index="02" image="/images/aerogommage/wood-workshop-sanding.webp">Une solution polyvalente à basse pression pour le bois, le métal, la pierre, le mobilier et de nombreux projets de rénovation.</ServiceCard></div></div></section>
  <OnSiteSection />
  <DemoSection />
  <TechnologyChooser />
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Pourquoi choisir AZUR LASER ?" title="Une réponse adaptée à votre projet" /><BenefitList items={reasons} /></div></section>
  <section className="content-section comparison-section"><div className="shell"><SectionTitle eyebrow="Avant / Après" title="Exemples de résultats recherchés" intro="Ces visuels illustrent des supports et des résultats possibles. Ils ne sont pas présentés comme des réalisations AZUR LASER." /><div className="comparison-grid"><BeforeAfterSlider title="Portail métallique — Aérogommage" beforeLabel="Peinture et corrosion" afterLabel="Surface décapée" beforeSrc="/images/laser/painted-rust-metal.webp" afterSrc="/images/laser/laser-metal-sparks.webp" /><BeforeAfterSlider title="Pièce mécanique — Laser" beforeLabel="Rouille et résidus" afterLabel="Pièce nettoyée" beforeSrc="/images/laser/industrial-mechanical-gears.webp" afterSrc="/images/home/laser-industrial-hero.webp" /><BeforeAfterSlider title="Volets bois — Aérogommage" beforeLabel="Anciennes peintures" afterLabel="Bois décapé" beforeSrc="/images/aerogommage/wooden-shutters-brick.webp" afterSrc="/images/aerogommage/wood-surface-preparation.webp" /><BeforeAfterSlider title="Pièce métallique — Laser" beforeLabel="Surface oxydée" afterLabel="Nettoyage et préparation" beforeSrc="/images/laser/rust-metal-surface.webp" afterSrc="/images/laser/laser-metal-sparks.webp" /></div><div className="section-link"><Link href="/realisations">Voir tous les exemples →</Link></div></div></section>
  <section className="content-section individuals-section"><div className="shell split-content"><SectionTitle eyebrow="Pour les particuliers" title="Donnez une nouvelle vie à vos surfaces et objets" intro="Portails, volets, mobilier, poutres, escaliers ou pièces métalliques : nous étudions la solution adaptée." /><div><p className="body-large">Nous pouvons intervenir directement sur place lorsque le projet le permet, afin de vous éviter le transport et la manutention de vos éléments.</p><Link className="primary-button" href="/contact">Soumettre mon projet →</Link></div></div></section>
  <ProjectJourney />
  <section className="home-area"><div className="shell"><div><p className="section-eyebrow"><span />Fréjus · Var · PACA</p><h2>Intervention sur site région PACA</h2></div><p>Basés à Fréjus, nous intervenons principalement dans un rayon d’environ 100 km et étudions certains projets plus largement en région PACA selon leur nature.</p><Link className="text-link" href="/zone-intervention">Voir la zone d’intervention →</Link></div></section>
</>; }

function ServiceCard({ href, title, index, image, children }: { href: string; title: string; index: string; image: string; children: React.ReactNode }) { return <article className="service-card"><ImagePlaceholder label={title} src={image} sizes="(max-width: 767px) 100vw, 50vw" /><div className="service-card-copy"><span className="service-index">{index}</span><h3>{title}</h3><p>{children}</p><Link href={href}>Découvrir <span>→</span></Link></div></article>; }
