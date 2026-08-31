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
        sizes="(max-width: 767px) 114px, (max-width: 1180px) 132px, (max-width: 1260px) 144px, 150px"
        priority
      />
    </span>
  );
}
