import Link from "next/link";
import { DemoSection, OnSiteSection, ProjectJourney } from "@/components/commercial-sections";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Solutions de décapage pour professionnels", "Décapage laser et aérogommage pour artisans, garages, industriels, métalliers, bâtiment et nautisme à Fréjus, dans le Var et en PACA.", "/professionnels");
const sectors = [["Automobile", "Pièces mécaniques, restauration et préparation."], ["Industrie", "Nettoyage et préparation de pièces, équipements et éléments métalliques."], ["Métallerie & ferronnerie", "Rouille, peinture, oxydation et préparation avant finition."], ["Nautisme", "Intervention sur certaines pièces et surfaces adaptées."], ["Bâtiment", "Préparation et rénovation de différents supports."], ["Artisans & PME", "Solutions adaptées aux besoins spécifiques de chaque activité."]] as const;
const requests = [["J’ai des pièces rouillées", "Décapage laser"], ["J’ai un portail à décaper", "Laser ou aérogommage selon le support"], ["J’ai plusieurs volets à rénover", "Aérogommage"], ["J’ai une pièce mécanique à nettoyer", "Laser ou aérogommage selon la pièce et le résultat recherché"], ["Je dois préparer une pièce avant peinture", "Laser ou aérogommage selon le matériau"], ["J’ai une structure métallique avec de la corrosion", "Laser ou aérogommage selon la surface"], ["Je dois nettoyer une pièce sans utiliser de décapant chimique", "Étude de la solution la plus adaptée"]] as const;

export default function ProfessionalsPage() { return <>
  <PageHero eyebrow="Artisans · Garages · Industries · Bâtiment" title="Solutions pour les professionnels" subtitle="Votre activité nécessite régulièrement du nettoyage ou du décapage ? Azur Laser intervient directement dans vos locaux." image="/images/laser/industrial-mechanical-gears.webp"><Link className="primary-button" href="/contact?demande=professionnel">Étudier mon besoin →</Link></PageHero>
  <section className="content-section"><div className="shell"><SectionTitle eyebrow="Votre rythme" title="Un besoin ponctuel ou récurrent" /><div className="need-grid"><article><span>01</span><h2>Besoin ponctuel</h2><p>Vous avez une pièce, un équipement ou un chantier à traiter.</p></article><article><span>02</span><h2>Besoin récurrent</h2><p>Vous avez régulièrement des pièces ou surfaces à décaper.</p><p>Azur Laser peut étudier avec vous une solution adaptée à votre activité.</p></article></div></div></section>
  <section className="content-section alt-section"><div className="shell"><SectionTitle eyebrow="Secteurs professionnels" title="Une solution adaptée à votre activité" intro="Nous accompagnons les artisans, garages, industriels, métalliers, entreprises du bâtiment et professionnels du nautisme." /><div className="sector-grid">{sectors.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <OnSiteSection />
  <section className="content-section professional-requests"><div className="shell"><SectionTitle eyebrow="Exemples de demandes" title="Vous nous décrivez le besoin, nous étudions la solution" /><div className="request-list">{requests.map(([request, answer]) => <article key={request}><q>{request}</q><div><span>Solution possible</span><strong>{answer}</strong></div></article>)}</div></div></section>
  <DemoSection /><ProjectJourney />
</>; }
