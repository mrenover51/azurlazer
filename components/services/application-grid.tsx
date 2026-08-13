import { ImagePlaceholder } from "../ui/image-placeholder";

export type ApplicationItem = { label: string; src: string; text?: string };

export function ApplicationGrid({ items }: { items: readonly ApplicationItem[] }) {
  return <div className="application-grid">{items.map((item, index) => <article key={item.label}><ImagePlaceholder label={item.label} src={item.src} /><div><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.label}</h3>{item.text && <p>{item.text}</p>}</div></div></article>)}</div>;
}
