"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { frejus, interventionCities, usualRadiusKm, type Commune } from "@/lib/intervention";
import styles from "./intervention.module.css";

export default function InterventionMap({ selected, resetToken }: { selected: Commune | null; resetToken: number }) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const selection = useRef<L.CircleMarker | null>(null);
  const zone = useRef<L.Circle | null>(null);
  const [tileError, setTileError] = useState(false);

  useEffect(() => {
    if (!container.current) return;
    const coordinates = (city: Commune): L.LatLngTuple => [city.centre.coordinates[1], city.centre.coordinates[0]];
    const instance = L.map(container.current, { scrollWheelZoom: false, zoomControl: false }).setView(coordinates(frejus), 8);
    L.control.zoom({ zoomInTitle: "Zoomer", zoomOutTitle: "Dézoomer" }).addTo(instance);
    map.current = instance;
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).on("tileerror", () => setTileError(true)).addTo(instance);
    const circle = L.circle(coordinates(frejus), { radius: usualRadiusKm * 1000, color: "#087dda", weight: 2, fillColor: "#159fff", fillOpacity: 0.09, interactive: false }).addTo(instance);
    zone.current = circle;
    const pinNames = ["Fréjus", "Saint-Raphaël", "Sainte-Maxime", "Saint-Tropez", "Draguignan", "Cannes", "Antibes"];
    interventionCities.filter(city => pinNames.includes(city.nom)).forEach(city => {
      const base = city.code === frejus.code;
      L.circleMarker(coordinates(city), { radius: base ? 8 : 5, color: "#fff", weight: 2, fillColor: base ? "#004e98" : "#087dda", fillOpacity: 1 })
        .bindTooltip(city.nom, { permanent: base, direction: "top" }).addTo(instance);
    });
    instance.fitBounds(circle.getBounds(), { padding: [18, 18] });
    const observer = new ResizeObserver(() => instance.invalidateSize());
    observer.observe(container.current);
    return () => { observer.disconnect(); instance.remove(); map.current = null; zone.current = null; selection.current = null; };
  }, []);

  useEffect(() => {
    const instance = map.current;
    if (!instance || !zone.current) return;
    selection.current?.remove();
    selection.current = null;
    if (selected) {
      const point: L.LatLngTuple = [selected.centre.coordinates[1], selected.centre.coordinates[0]];
      const label = document.createElement("span");
      label.textContent = selected.nom;
      selection.current = L.circleMarker(point, { radius: 9, color: "#07111d", weight: 3, fillColor: "#00b3ff", fillOpacity: 1 }).bindTooltip(label, { permanent: true, direction: "top" }).addTo(instance);
      instance.fitBounds(L.latLngBounds([point, [frejus.centre.coordinates[1], frejus.centre.coordinates[0]]]), { padding: [55, 55], maxZoom: 11, animate: false });
    } else instance.fitBounds(zone.current.getBounds(), { padding: [18, 18], animate: false });
  }, [selected, resetToken]);

  return <>
    <div ref={container} className={styles.map} role="region" aria-label="Carte de Fréjus et du rayon indicatif de 100 km. Utilisez les boutons plus et moins pour zoomer." />
    {tileError && <p className={styles.notice} role="status">Le fond de carte ne se charge pas complètement. La recherche de commune reste disponible. <a href="https://www.openstreetmap.org/#map=8/43.46/6.74" target="_blank" rel="noreferrer">Ouvrir OpenStreetMap</a></p>}
  </>;
}
