import Image from "next/image";

type Props = { label: string; src: string; className?: string; sizes?: string };

export function ImagePlaceholder({ label, src, className = "", sizes = "(max-width: 767px) 100vw, 33vw" }: Props) {
  return (
    <div className={`image-placeholder visual-image ${className}`}>
      <Image src={src} alt={`Illustration : ${label}`} fill sizes={sizes} />
      <span className="visual-overlay" aria-hidden="true" />
      <span className="visual-label">Photo d’illustration</span>
      <strong>{label}</strong>
    </div>
  );
}
