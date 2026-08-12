import Link from "next/link";

export function GlobalCta() {
  return (
    <section className="global-cta">
      <div className="shell global-cta-inner">
        <div>
          <p className="section-eyebrow"><span />Un projet ?</p>
          <h2>Demandez votre devis</h2>
        </div>
        <ul>
          <li>Devis gratuit</li>
          <li>Étude personnalisée</li>
          <li>Photos jointes à votre demande</li>
        </ul>
        <Link className="primary-button" href="/contact">Demander un devis <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
