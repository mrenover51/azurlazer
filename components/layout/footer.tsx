import Link from "next/link";
import { Brand } from "../brand";
import { company } from "@/lib/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Décapage laser et aérogommage pour retirer rouille, peinture, vernis et salissures. Une solution adaptée à chaque support.</p>
        </div>
        <FooterColumn title="Nos services" links={[["Décapage laser", "/decapage-laser"], ["Aérogommage", "/aerogommage"], ["Professionnels", "/professionnels"], ["Réalisations", "/realisations"]]} />
        <FooterColumn title="Navigation" links={[["Accueil", "/"], ["Zone d’intervention", "/zone-intervention"], ["Contact / Devis", "/contact"]]} />
        <FooterColumn title="Informations" links={[["Mentions légales", "/mentions-legales"], ["Politique de confidentialité", "/politique-confidentialite"]]} />
        <div className="footer-column">
          <h2>Contact</h2>
          <p>{company.phone}</p><p>{company.email}</p><p>Fréjus - Var</p><p>Rayon principal d’environ 100 km · projets étudiés en région PACA</p>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} AZUR LASER</span><span>Décapage laser &amp; aérogommage</span></div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return <div className="footer-column"><h2>{title}</h2>{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>;
}
