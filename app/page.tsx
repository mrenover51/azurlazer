import Link from "next/link";
import { Hero } from "@/components/hero";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GlobalCta } from "@/components/layout/global-cta";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Décapage laser & aérogommage", "AZUR LASER accompagne les projets de décapage laser, d’aérogommage et de préparation de surfaces.", "/");

export default function Home() {
  return <>
    <Hero />
    <section className="content-section services-section">
      <div className="shell"><SectionTitle eyebrow="Nos prestations" title="La bonne technique pour chaque surface" intro="Nous analysons le support, la couche à retirer et le résultat attendu avant de proposer un procédé et des paramètres d’intervention." />
        <div className="service-cards">
          <ServiceCard href="/decapage-laser" title="Décapage laser" index="01" image="/images/home/laser-industrial-hero.webp">Une action précise et sans abrasif projeté pour retirer certains contaminants, oxydations, peintures ou revêtements compatibles, tout en maîtrisant l’interaction avec le support.</ServiceCard>
          <ServiceCard href="/aerogommage" title="Aérogommage" index="02" image="/images/aerogommage/wood-workshop-sanding.webp">Un procédé polyvalent à basse pression, utilisant un abrasif sélectionné pour le bois, la pierre, le métal et d’autres supports compatibles.</ServiceCard>
        </div>
      </div>
    </section>
    <section className="content-section comparison-section">
      <div className="shell"><SectionTitle eyebrow="Avant / Après" title="La matière retrouve sa lecture" intro="Ces comparateurs illustrent les résultats recherchés. Ils seront remplacés par les photographies documentées des chantiers AZUR LASER." />
        <div className="comparison-grid">
          <BeforeAfterSlider title="Pièce métallique oxydée" beforeLabel="Métal oxydé" afterLabel="Métal préparé" beforeSrc="/images/laser/rust-metal-surface.webp" afterSrc="/images/laser/laser-metal-sparks.webp" />
          <BeforeAfterSlider title="Pièce mécanique" beforeLabel="Mécanisme ancien" afterLabel="Travail de précision" beforeSrc="/images/laser/industrial-mechanical-gears.webp" afterSrc="/images/home/laser-industrial-hero.webp" />
          <BeforeAfterSlider title="Surface contaminée" beforeLabel="Peinture et oxydation" afterLabel="Préparation métallique" beforeSrc="/images/laser/painted-rust-metal.webp" afterSrc="/images/laser/laser-metal-sparks.webp" />
        </div>
        <div className="section-link"><Link href="/realisations">Découvrir toutes les réalisations <span>→</span></Link></div>
      </div>
    </section>
    <section className="content-section expertise-section"><div className="shell expertise-grid">
      <div><SectionTitle eyebrow="Notre méthode" title="Observer. Tester. Paramétrer." /><p className="body-large">Un résultat professionnel commence par la compréhension du support. Nature de la matière, adhérence et épaisseur de la couche, géométrie, accessibilité et finition attendue guident le choix du procédé.</p><Link className="text-link" href="/contact">Faire étudier mon projet →</Link></div>
      <ol className="method-list"><li><span>01</span><div><h3>Diagnostic</h3><p>Analyse du support, du contaminant et des contraintes du chantier.</p></div></li><li><span>02</span><div><h3>Essai</h3><p>Validation sur une zone représentative lorsque la nature du support l’exige.</p></div></li><li><span>03</span><div><h3>Intervention</h3><p>Mise en œuvre avec des paramètres adaptés et un contrôle régulier du résultat.</p></div></li></ol>
    </div></section>
    <GlobalCta />
  </>;
}

function ServiceCard({ href, title, index, image, children }: { href: string; title: string; index: string; image: string; children: React.ReactNode }) {
  return <article className="service-card"><ImagePlaceholder label={title} src={image} sizes="(max-width: 767px) 100vw, 50vw" /><div className="service-card-copy"><span className="service-index">{index}</span><h3>{title}</h3><p>{children}</p><Link href={href}>En savoir plus <span>→</span></Link></div></article>;
}
