import Image from "next/image";
import logo from "@/public/logo/logoazur.png";
import { realizations } from "@/lib/realizations";
import { BeforeAfterSlider } from "../before-after-slider";
import styles from "./realisation-card.module.css";

type Props = { realization: (typeof realizations)[number] };

export function RealisationCard({ realization }: Props) {
  return (
    <article className={styles.card} aria-labelledby={`realisation-${realization.id}`}>
      <div className={styles.logo}>
        <Image src={logo} alt="AZUR LASER" sizes="200px" />
      </div>
      <div className={styles.slider}>
        <BeforeAfterSlider {...realization} aspectRatio="4 / 3" />
      </div>
      <div className={styles.copy}>
        <h2 id={`realisation-${realization.id}`}>{realization.title}</h2>
        <p>{realization.description}</p>
      </div>
    </article>
  );
}
