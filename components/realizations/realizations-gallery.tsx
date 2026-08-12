"use client";

import { useState } from "react";
import { realizations } from "@/lib/realizations";
import { BeforeAfterSlider } from "../before-after-slider";

export function RealizationsGallery() {
  const [filter, setFilter] = useState<"all" | "laser" | "aerogommage">("all");
  const visible = filter === "all" ? realizations : realizations.filter((item) => item.category === filter);
  return (
    <div>
      <div className="filter-bar" role="group" aria-label="Filtrer les réalisations">
        {([["all", "Tout"], ["laser", "Laser"], ["aerogommage", "Aérogommage"]] as const).map(([value, label]) => (
          <button className={filter === value ? "active" : ""} key={value} type="button" onClick={() => setFilter(value)}>{label}</button>
        ))}
      </div>
      <div className="realizations-grid">
        {visible.map((item) => (
          <article className="realization-card" key={item.id}>
            <BeforeAfterSlider beforeLabel={item.beforeLabel} afterLabel={item.afterLabel} beforeSrc={item.beforeSrc} afterSrc={item.afterSrc} compact />
            <div className="realization-copy">
              <span>{item.category === "laser" ? "Décapage laser" : "Aérogommage"}</span>
              <h2>{item.title}</h2><p>{item.description}</p>
              <dl><div><dt>Support</dt><dd>{item.support}</dd></div><div><dt>Objectif</dt><dd>{item.objective}</dd></div></dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
