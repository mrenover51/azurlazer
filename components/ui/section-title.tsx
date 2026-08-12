type Props = { eyebrow?: string; title: string; intro?: string; align?: "left" | "center" };

export function SectionTitle({ eyebrow, title, intro, align = "left" }: Props) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
      {eyebrow && <p className="section-eyebrow"><span />{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
