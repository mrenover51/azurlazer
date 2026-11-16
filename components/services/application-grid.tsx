import Image from "next/image";
import styles from "./photography.module.css";

export type ApplicationItem = { label: string; src: string; alt: string; text?: string; position?: string; secondary?: { src: string; alt: string; position?: string } };

export function ApplicationGrid({ items }: { items: readonly ApplicationItem[] }) {
  return <div className={`application-grid ${styles.grid}`}>{items.map((item, index) => <article key={item.label}>
    <div className={styles.frame}>
      <div className={item.secondary ? styles.photoPair : styles.photoSingle}>
        {[{ src: item.src, alt: item.alt, position: item.position }, ...(item.secondary ? [item.secondary] : [])].map(photo => <div className={styles.photo} key={photo.src}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 430px) 100vw, (max-width: 767px) 50vw, (max-width: 1100px) 33vw, 340px" style={{ objectPosition: photo.position ?? "center" }} />
        </div>)}
      </div>
      <span className={styles.badge}>Photo d’illustration</span>
    </div>
    <div><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.label}</h3>{item.text && <p>{item.text}</p>}</div></div>
  </article>)}</div>;
}
