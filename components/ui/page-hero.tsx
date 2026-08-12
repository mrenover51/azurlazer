import Image from "next/image";

type Props = { eyebrow: string; title: string; subtitle: string; image?: string; children?: React.ReactNode };

export function PageHero({ eyebrow, title, subtitle, image = "/images/home/laser-industrial-hero.webp", children }: Props) {
  return (
    <section className="page-hero">
      <Image className="page-hero-image" src={image} alt="" fill priority sizes="100vw" />
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="shell page-hero-inner"><p className="section-eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{subtitle}</p>{children}</div>
    </section>
  );
}
