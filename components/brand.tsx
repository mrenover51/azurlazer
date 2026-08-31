import Image from "next/image";

export function Brand() {
  return (
    <span className="brand">
      <Image
        className="brand-image"
        src="/logo/logoazur.png"
        alt="Azur Laser — Décapage laser & aérogommage"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 200px, (max-width: 1180px) 240px, (max-width: 1260px) 260px, 300px"
        priority
      />
    </span>
  );
}
