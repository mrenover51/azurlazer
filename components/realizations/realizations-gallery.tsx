import { realizations } from "@/lib/realizations";
import { BeforeAfterSlider } from "../before-after-slider";
import { RealisationCard } from "./realisation-card";
import styles from "./realisation-card.module.css";

export function RealizationsGallery({ limit, premium = false }: { limit?: number; premium?: boolean }) {
  if (premium) {
    return <div className={styles.gallery}>{realizations.slice(0, limit).map(item => <RealisationCard key={item.id} realization={item} />)}</div>;
  }
  return <div className="realizations-grid">{realizations.slice(0, limit).map((item, index) => <article className="realization-card" key={item.id}>
    <div className="realization-copy"><span>Réalisation {String(index + 1).padStart(2, "0")} · Avant / Après</span><h2>{item.title}</h2><p>{item.description}</p></div>
    <BeforeAfterSlider {...item} />
  </article>)}</div>;
}
