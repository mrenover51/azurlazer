export function BenefitList({ items }: { items: readonly { title: string; text: string }[] }) {
  return <div className="benefit-list">{items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}
