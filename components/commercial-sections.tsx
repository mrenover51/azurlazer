import Link from "next/link";
import { SectionTitle } from "./ui/section-title";

export function OnSiteSection() {
  return <section className="content-section onsite-section"><div className="shell onsite-panel">
    <div><SectionTitle eyebrow="Mobilité" title="Intervention directement sur site" intro="Votre pièce ou votre équipement ne peut pas être déplacé ?" /><p className="onsite-lead">Nous venons à vous.</p><p>Notre matériel nous permet d’intervenir directement dans vos locaux, sur vos chantiers ou chez vous, lorsque les conditions d’intervention le permettent.</p></div>
    <div className="onsite-advantage"><span>Un véritable avantage pour les professionnels</span><p>Le client n’a pas nécessairement besoin de :</p><ul><li>démonter entièrement son équipement</li><li>transporter une pièce lourde</li><li>organiser un transport spécifique</li><li>immobiliser son activité plus longtemps que nécessaire</li></ul><p>Nous étudions le chantier et déterminons la méthode d’intervention la plus adaptée.</p><div className="button-row"><Link className="primary-button" href="/contact">Demander un devis →</Link><Link className="secondary-button" href="/realisations">Voir nos réalisations</Link></div></div>
  </div></section>;
}

export function DemoSection() {
  return <section className="demo-section"><div className="shell demo-inner"><div><p className="section-eyebrow"><span />Vous doutez encore ?</p><h2>Nous venons vous faire une démonstration.</h2><p>Vous souhaitez voir le résultat avant de vous lancer ? Nous pouvons étudier votre pièce et, selon le projet, proposer une démonstration sur site.</p></div><Link className="primary-button" href="/contact?demande=demonstration">Demander une démonstration →</Link></div></section>;
}

const choices = [
  ["Rouille sur pièce métallique", "Laser", "laser"], ["Décapage précis d’une pièce", "Laser", "laser"], ["Préparation avant soudure", "Laser", "laser"], ["Nettoyage ciblé", "Laser", "laser"],
  ["Grandes surfaces métalliques", "Aérogommage", "aero"], ["Volets bois", "Aérogommage", "aero"], ["Meuble ancien", "Aérogommage", "aero"], ["Poutres", "Aérogommage", "aero"], ["Pierre", "Aérogommage", "aero"],
  ["Portail", "Laser ou aérogommage selon le support et le revêtement", "both"], ["Pièce mécanique", "Laser ou aérogommage selon la pièce", "both"], ["Rénovation", "Laser ou aérogommage selon le projet", "both"],
] as const;

export function TechnologyChooser() {
  return <section className="content-section chooser-section"><div className="shell"><SectionTitle eyebrow="Bien choisir" title="Laser ou aérogommage ?" intro="Deux technologies complémentaires pour répondre précisément à votre besoin." /><div className="chooser-grid">{choices.map(([need, solution, kind]) => <article className={`choice-card choice-${kind}`} key={need}><p>{need}</p><div><span>Solution possible</span><strong>{solution}</strong></div></article>)}</div><div className="chooser-note"><strong>Chaque chantier est différent.</strong><p>Nous analysons le support, le revêtement, l’état de la surface et le résultat recherché afin de déterminer la technique la plus adaptée.</p></div></div></section>;
}

export function ProjectJourney() {
  const steps = ["Vous nous envoyez quelques photos", "Nous étudions votre besoin", "Nous vous conseillons la solution adaptée", "Nous vous transmettons votre devis"];
  return <section className="content-section project-section"><div className="shell"><SectionTitle eyebrow="Vous avez un projet ?" title="Envoyez-nous quelques photos." /><ol className="project-steps">{steps.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol><Link className="primary-button" href="/contact">Parler de mon projet →</Link></div></section>;
}
