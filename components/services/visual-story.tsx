import { ImagePlaceholder } from "../ui/image-placeholder";

type Item = { title: string; text: string; image: string; label: string };
export function VisualStory({ items }: { items: readonly Item[] }) {
  return <div className="visual-story">{items.map((item, index) => <article key={item.title} className={index % 2 ? "visual-story-reverse" : ""}><ImagePlaceholder src={item.image} label={item.label} sizes="(max-width: 767px) 100vw, 55vw" /><div><span>{String(index + 1).padStart(2, "0")}</span><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div>;
}
