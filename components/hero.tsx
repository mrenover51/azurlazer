import Image from "next/image";
import { company } from "@/lib/company";

const heroImagePath = "/images/home/hero.png";

const benefits = [
  {
    title: "MÉTAL",
    description: "Rouille, peinture et pièces mécaniques",
    icon: <span className="precision-icon" aria-hidden="true" />,
  },
  {
    title: "BOIS",
    description: "Meubles, poutres, volets et portes",
    icon: <span className="eco-icon" aria-hidden="true" />,
  },
  {
    title: "PIERRE & BRIQUE",
    description: "Nettoyage et rénovation de surfaces",
    icon: <span className="efficiency-icon" aria-hidden="true" />,
  },
] as const;

export function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-media">
        <Image
          className="hero-image"
          src={heroImagePath}
          alt="Décapage laser d’une surface métallique"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 55vw"
        />
        <div className="hero-image-overlay" aria-hidden="true" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow"><span />Décapage laser &amp; aérogommage</p>
          <h1><span>AZUR</span> LASER</h1>
          <p className="hero-subtitle">Redonnez vie à vos surfaces.</p>

          <div className="benefits" aria-label="Nos avantages">
            {benefits.map(({ title, description, icon }) => (
              <article className="benefit" key={title}>
                <div className="benefit-icon">{icon}</div>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="/contact">
              Demander un devis <span aria-hidden="true">→</span>
            </a>
            <a className="phone-button" href={company.phoneHref ? `tel:${company.phoneHref}` : "/contact"} aria-label={company.phoneHref ? `Appeler le ${company.phone}` : "Accéder au formulaire de contact"}>
              <span className="phone-icon" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
