import Image from "next/image";
import { company } from "@/lib/company";

const heroImagePath = "/images/home/hero.png";

const benefits = [
  {
    title: "PRÉCISION",
    description: "Décapage ciblé en profondeur",
    icon: <span className="precision-icon" aria-hidden="true" />,
  },
  {
    title: "ÉCOLOGIQUE",
    description: "Sans produits chimiques ni abrasifs nocifs",
    icon: <span className="eco-icon" aria-hidden="true" />,
  },
  {
    title: "EFFICACITÉ",
    description: "Résultat optimal, rapidement",
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
          <p className="hero-subtitle">La technologie au service de vos surfaces</p>

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
