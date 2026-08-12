import Image from "next/image";

export function Brand() {
  return (
    <span className="brand">
      <Image
        className="brand-image"
        src="/logo/logoazur.png"
        alt="Azur Laser — Décapage laser & aérogommage"
        width={1080}
        height={1080}
        priority
      />
    </span>
  );
}
