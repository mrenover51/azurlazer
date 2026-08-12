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
  { label: "Rouille et oxydation", src: "/images/laser/rust-metal-surface.webp" },
  { label: "Peintures et revêtements compatibles", src: "/images/laser/painted-rust-metal.webp" },
  { label: "Graisses et résidus industriels", src: "/images/laser/industrial-mechanical-gears.webp" },
  { label: "Pièces mécaniques", src: "/images/laser/industrial-mechanical-gears.webp" },
  { label: "Moules et outillages", src: "/images/home/laser-industrial-hero.webp" },
  { label: "Soudure et préparation", src: "/images/laser/laser-metal-sparks.webp" },
  { label: "Pierre et supports minéraux", src: "/images/aerogommage/stone-wall-surface.webp" },
  { label: "Restauration et patrimoine", src: "/images/laser/rusted-industrial-steel.webp" },
];
const benefits = [
  { title: "Travail ciblé", text: "L’énergie est dirigée vers la zone utile avec des paramètres réglés selon l’objectif." },
  { title: "Sans abrasif projeté", text: "Le procédé ne génère pas de média abrasif à récupérer après l’intervention." },
  { title: "Déchets secondaires limités", text: "Selon l’application, la quantité de déchets ajoutés peut être réduite par rapport à certains procédés." },
  { title: "Paramètres maîtrisés", text: "Puissance, fréquence, vitesse et recouvrement sont ajustés au couple support-contaminant." },
  { title: "Géométries complexes", text: "Certaines formes et zones difficiles peuvent être traitées lorsque l’accès et la sécurité le permettent." },
  { title: "Préparation technique", text: "Le laser peut préparer une surface avant peinture, soudure ou traitement lorsque le protocole le valide." },
];

export default function LaserPage() { return <>
  <PageHero eyebrow="Technologie de surface" title="Décapage laser" subtitle="La précision au service de vos surfaces" image="/images/home/laser-industrial-hero.webp"><a className="primary-button" href="/contact">Étudier mon projet <span>→</span></a></PageHero>
  <section className="content-section"><div className="shell split-content"><SectionTitle eyebrow="Le procédé" title="Qu’est-ce que le décapage laser ?" /><div className="prose"><p>Le décapage laser concentre une énergie lumineuse sur la couche à retirer. Son interaction avec l’oxydation, un dépôt ou un revêtement compatible permet d’en détacher ou d’en vaporiser une partie, avec captation adaptée lorsque l’intervention le nécessite.</p><p>Le résultat dépend du matériau, de l’épaisseur et de la nature du contaminant, du revêtement ainsi que de la finition recherchée. Un réglage pertinent — et souvent un essai préalable — permet de définir une méthode réaliste avant le traitement complet.</p></div></div></section>
  <section className="visual-story-section"><VisualStory items={[{ title: "Lire l’état de surface", text: "Oxydation, peinture et dépôts ne réagissent pas de façon identique. L’observation de la couche et du métal oriente l’essai et le réglage.", image: "/images/laser/painted-rust-metal.webp", label: "Peinture et oxydation sur métal" }, { title: "Maîtriser l’intervention", text: "La géométrie, l’accessibilité et l’usage futur de la pièce déterminent la progression et le niveau de préparation recherché.", image: "/images/laser/industrial-mechanical-gears.webp", label: "Mécanisme et pièces métalliques" }]} /></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Pourquoi le laser" title="Des paramètres au service du résultat" /><BenefitList items={benefits} /></div></section>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Applications" title="Des usages industriels aux interventions délicates" intro="Chaque application reste soumise à l’analyse du support, de la couche à retirer et des conditions d’accès." /><ApplicationGrid items={applications} /></div></section>
  <section className="content-section materials-section"><div className="shell materials-grid"><div><SectionTitle eyebrow="Compatibilité" title="Pour quels matériaux ?" /><p>Acier, inox, fonte, aluminium et certains alliages peuvent être concernés selon l’application. La pierre et d’autres supports minéraux peuvent également être étudiés lorsque des essais confirment la pertinence du procédé.</p></div><ul>{["Acier", "Inox", "Aluminium selon application", "Fonte", "Certains alliages", "Pierre", "Autres supports après essais"].map((x) => <li key={x}>{x}</li>)}</ul></div></section>
  <section className="content-section comparison-section"><div className="shell"><SectionTitle eyebrow="Avant / Après" title="Visualiser l’objectif d’intervention" /><div className="comparison-grid"><BeforeAfterSlider title="Oxydation" beforeLabel="Acier oxydé" afterLabel="Préparation métallique" beforeSrc="/images/laser/rust-metal-surface.webp" afterSrc="/images/laser/laser-metal-sparks.webp" /><BeforeAfterSlider title="Pièce mécanique" beforeLabel="Mécanisme ancien" afterLabel="Traitement industriel" beforeSrc="/images/laser/industrial-mechanical-gears.webp" afterSrc="/images/home/laser-industrial-hero.webp" /><BeforeAfterSlider title="Préparation" beforeLabel="Revêtement ancien" afterLabel="Travail du métal" beforeSrc="/images/laser/painted-rust-metal.webp" afterSrc="/images/laser/laser-metal-sparks.webp" /></div></div></section>
  <GlobalCta />
</>; }
