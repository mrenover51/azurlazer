"use client";
import Image from "next/image";
import { useId, useState, type PointerEvent } from "react";
type Props = { beforeLabel: string; afterLabel: string; beforeSrc: string; afterSrc: string; title: string; aspectRatio: string };
export function BeforeAfterSlider({ beforeLabel, afterLabel, beforeSrc, afterSrc, title, aspectRatio }: Props) {
  const [position, setPosition] = useState(50);
  const id = useId();
  function update(event: PointerEvent<HTMLInputElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPosition(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
  }
  return <figure className="comparison" aria-label={title}>
    <div className="comparison-stage" style={{ aspectRatio }}>
      <div className="comparison-visual"><Image src={beforeSrc} alt={beforeLabel} fill sizes="(max-width: 767px) 100vw, (max-width: 1400px) 50vw, 650px" draggable={false} /></div>
      {/* Clip a full-size layer so the framing stays fixed while dragging. */}
      <div className="comparison-after" style={{ clipPath: 'inset(0 0 0 ' + position + '%)' }}><div className="comparison-visual"><Image src={afterSrc} alt={afterLabel} fill sizes="(max-width: 767px) 100vw, (max-width: 1400px) 50vw, 650px" draggable={false} /></div></div>
      <div className="comparison-labels" aria-hidden="true"><span>AVANT</span><span>APRÈS</span></div>
      <div className="comparison-handle" style={{ left: position + '%' }} aria-hidden="true"><i>↔</i></div>
      <label className="sr-only" htmlFor={id}>Comparer les photos avant et après : {title}</label>
      <input id={id} type="range" min="0" max="100" step="1" value={position} aria-describedby={id + '-help'} aria-valuetext={position + ' % avant, ' + (100 - position) + ' % après'}
        onChange={event => setPosition(Number(event.target.value))}
        onPointerDown={event => { if (event.button !== 0) return; event.preventDefault(); event.currentTarget.focus({ preventScroll: true }); event.currentTarget.setPointerCapture(event.pointerId); update(event); }}
        onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) update(event); }}
        onPointerUp={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }} />
    </div>
    <figcaption id={id + '-help'} className="comparison-help">Faites glisser le curseur ou utilisez les flèches du clavier.</figcaption>
  </figure>;
}
