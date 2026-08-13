import Link from "next/link";
import { Hero } from "@/components/hero";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GlobalCta } from "@/components/layout/global-cta";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Décapage laser & aérogommage à Fréjus", "AZUR LASER accompagne les projets de décapage laser et d’aérogommage à Fréjus, dans le Var et dans un rayon habituel d’environ 100 km.", "/");

export default function Home() {
  return <>
    <Hero />
    <section className="content-section services-section">
      <div className="shell"><SectionTitle eyebrow="Votre besoin" title="Vous avez une surface à décaper ?" intro="Métal rouillé, ancienne peinture, meuble verni, poutres, volets, pierre, brique ou pièce mécanique : montrez-nous votre projet. AZUR LASER vous conseille la technique la plus adaptée." />
        <div className="service-cards">
          <ServiceCard href="/decapage-laser" title="Décapage laser" index="01" image="/images/home/laser-industrial-hero.webp">Une solution précise pour retirer la rouille, certaines peintures et différents dépôts. Elle convient particulièrement à de nombreux travaux sur métal.</ServiceCard>
          <ServiceCard href="/aerogommage" title="Aérogommage" index="02" image="/images/aerogommage/wood-workshop-sanding.webp">Une solution polyvalente pour retirer peinture, vernis ou salissures sur le bois, la pierre, la brique, le métal et d’autres supports.</ServiceCard>
        </div>
      </div>
    </section>
    <section className="content-section comparison-section">
      <div className="shell"><SectionTitle eyebrow="Avant / Après" title="Voyez le résultat recherché" intro="Faites glisser les images pour découvrir des exemples de surfaces avant et après décapage." />
        <div className="comparison-grid">
          <BeforeAfterSlider title="Surface rouillée" beforeLabel="Surface rouillée" afterLabel="Métal nettoyé" beforeSrc="/images/laser/rust-metal-surface.webp" afterSrc="/images/laser/laser-metal-sparks.webp" />
          <BeforeAfterSlider title="Pièce mécanique" beforeLabel="Pièce à nettoyer" afterLabel="Métal nettoyé" beforeSrc="/images/laser/industrial-mechanical-gears.webp" afterSrc="/images/home/laser-industrial-hero.webp" />
          <BeforeAfterSlider title="Ancienne peinture" beforeLabel="Peinture ancienne" afterLabel="Métal préparé" beforeSrc="/images/laser/painted-rust-metal.webp" afterSrc="/images/laser/laser-metal-sparks.webp" />
        </div>
        <div className="section-link"><Link href="/realisations">Découvrir toutes les réalisations <span>→</span></Link></div>
      </div>
    </section>
    <section className="content-section expertise-section"><div className="shell expertise-grid">
      <div><SectionTitle eyebrow="Notre méthode" title="Comprendre. Tester. Décaper." /><p className="body-large">Nous regardons votre surface, ce qu’il faut retirer et le résultat souhaité. Nous pouvons ensuite vous proposer le laser, l’aérogommage ou un essai préalable.</p><Link className="text-link" href="/contact">Parler de mon projet →</Link></div>
      <ol className="method-list"><li><span>01</span><div><h3>Votre besoin</h3><p>Vous nous décrivez le support, son état et le résultat que vous souhaitez.</p></div></li><li><span>02</span><div><h3>Notre conseil</h3><p>Nous choisissons la méthode adaptée. Un essai peut être proposé en cas de doute.</p></div></li><li><span>03</span><div><h3>Le décapage</h3><p>Nous adaptons le travail à la surface et contrôlons le résultat au fur et à mesure.</p></div></li></ol>
    </div></section>
    <section className="home-area"><div className="shell"><div><p className="section-eyebrow"><span />Fréjus · Var</p><h2>À vos côtés dans un rayon d’environ 100 km</h2></div><p>AZUR LASER intervient depuis Fréjus pour vos projets de décapage laser et d’aérogommage dans le Var et sur une partie des Alpes-Maritimes.</p><Link className="text-link" href="/zone-intervention">Découvrir notre zone d’intervention →</Link></div></section>
    <GlobalCta />
  </>;
}

function ServiceCard({ href, title, index, image, children }: { href: string; title: string; index: string; image: string; children: React.ReactNode }) {
  return <article className="service-card"><ImagePlaceholder label={title} src={image} sizes="(max-width: 767px) 100vw, 50vw" /><div className="service-card-copy"><span className="service-index">{index}</span><h3>{title}</h3><p>{children}</p><Link href={href}>En savoir plus <span>→</span></Link></div></article>;
}
