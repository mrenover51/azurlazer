import Link from "next/link";

export function GlobalCta() {
  return (
    <section className="global-cta">
      <div className="shell global-cta-inner">
        <div>
          <p className="section-eyebrow"><span />Un doute ?</p>
          <h2>Envoyez-nous quelques photos</h2>
        </div>
        <ul>
          <li>Devis gratuit</li>
          <li>Conseil sur la méthode adaptée</li>
          <li>Pas besoin d’être expert</li>
          <li>Fréjus et environ 100 km alentour</li>
        </ul>
        <Link className="primary-button" href="/contact">Demander un devis <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
