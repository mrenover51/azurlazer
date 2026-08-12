"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = { beforeLabel: string; afterLabel: string; beforeSrc: string; afterSrc: string; title?: string; compact?: boolean };

export function BeforeAfterSlider({ beforeLabel, afterLabel, beforeSrc, afterSrc, title, compact = false }: Props) {
  const [position, setPosition] = useState(50);
  const id = useId();
  return (
    <figure className={`comparison ${compact ? "comparison-compact" : ""}`}>
      <div className="comparison-stage">
        <div className="comparison-visual comparison-before"><Image src={beforeSrc} alt={beforeLabel} fill sizes="(max-width: 767px) 100vw, 33vw" /><span>AVANT</span><strong>{beforeLabel}</strong></div>
        <div className="comparison-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}><div className="comparison-visual comparison-after-visual"><Image src={afterSrc} alt={afterLabel} fill sizes="(max-width: 767px) 100vw, 33vw" /><span>APRÈS</span><strong>{afterLabel}</strong></div></div>
        <div className="comparison-handle" style={{ left: `${position}%` }} aria-hidden="true"><i>↔</i></div>
        <label className="sr-only" htmlFor={id}>Position du comparateur avant après pour {title ?? beforeLabel}</label>
        <input id={id} type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
      </div>
      {title && <figcaption>{title}<small>Association illustrative — photographies distinctes, pas un chantier AZUR LASER</small></figcaption>}
    </figure>
  );
}
