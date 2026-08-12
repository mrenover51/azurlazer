import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact et demande de devis", "Présentez votre projet de décapage laser ou d’aérogommage et joignez les informations utiles à son étude.", "/contact");
export default function ContactPage() { return <><PageHero eyebrow="Contact / Devis" title="Parlons de votre projet" subtitle="Quelques informations et quelques photos nous permettent d’évaluer plus précisément votre besoin." /><section className="content-section"><div className="shell contact-layout"><div className="contact-aside"><span className="contact-number">01</span><h2>Préparer votre demande</h2><p>Indiquez la matière, les dimensions, la couche à retirer et le rendu attendu. Des vues d’ensemble et de détail faciliteront la première analyse.</p><div className="contact-detail"><small>Téléphone</small><strong>{company.phone}</strong></div><div className="contact-detail"><small>Email</small><strong>{company.email}</strong></div><p className="technical-note">Ces coordonnées sont des placeholders et doivent être renseignées avant publication.</p></div><ContactForm /></div></section></>; }
