"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { distanceKm, frejus, interventionCities, isCommune, usualRadiusKm, type Commune } from "@/lib/intervention";
import styles from "./intervention.module.css";

const Map = dynamic(() => import("./intervention-map"), { ssr: false, loading: () => <div className={styles.mapLoading} role="status">Chargement de la carte…</div> });

export function InterventionExplorer() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Commune[]>([]);
  const [selected, setSelected] = useState<Commune | null>(null);
  const [resetToken, setResetToken] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "results" | "empty" | "error" | "invalid">("idle");
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => request.current?.abort(), []);

  function choose(city: Commune) {
    request.current?.abort();
    request.current = null;
    setSelected(city); setResults([]); setStatus("idle"); setQuery(city.nom);
  }

  async function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    request.current?.abort();
    setSelected(null); setResults([]);
    const text = query.trim();
    if (text.length < 2 || (/^\d+$/.test(text) && !/^\d{5}$/.test(text))) { setStatus("invalid"); return; }
    const controller = new AbortController();
    request.current = controller;
    const timer = window.setTimeout(() => controller.abort(), 10000);
    setStatus("loading");
    try {
      const params = new URLSearchParams({ fields: "nom,code,centre,codesPostaux,codeDepartement", limit: "20", boost: "population" });
      params.set(/^\d{5}$/.test(text) ? "codePostal" : "nom", text);
      const response = await fetch(`https://geo.api.gouv.fr/communes?${params}`, { signal: controller.signal });
      if (!response.ok) throw new Error("Geocoding unavailable");
      const data: unknown = await response.json();
      if (!Array.isArray(data) || !data.every(isCommune)) throw new Error("Invalid geocoding response");
      if (request.current !== controller) return;
      setResults(data); setStatus(data.length ? "results" : "empty");
    } catch {
      if (request.current === controller) setStatus("error");
    } finally { window.clearTimeout(timer); }
  }

  const distance = selected ? distanceKm(frejus, selected) : null;
  return <>
    <section className={styles.explorer} aria-labelledby="zone-heading">
      <div className={styles.intro}>
        <p className="section-eyebrow"><span />Notre secteur</p>
        <h2 id="zone-heading">Au départ de Fréjus, jusqu’à chez vous.</h2>
        <p>Nous nous déplaçons sur site pour les particuliers et les professionnels, dans le Var et les Alpes-Maritimes.</p>
        <div className={styles.facts}><div><strong>Fréjus <small>(83)</small></strong><span>Notre point de départ</span></div><div><strong>≈ 100 km</strong><span>Notre rayon habituel</span></div></div>
        <form className={styles.search} onSubmit={search}>
          <label htmlFor="project-city">Dans quelle ville se trouve votre projet ?</label>
          <p id="city-help">Saisissez une commune française ou son code postal, puis choisissez le bon résultat.</p>
          <div className={styles.searchRow}><input id="project-city" name="commune" value={query} autoComplete="off" maxLength={100} aria-describedby="city-help city-status" placeholder="Ex. : Cannes ou 06400" onChange={event => { request.current?.abort(); request.current = null; setQuery(event.target.value); setResults([]); setSelected(null); setStatus("idle"); }} /><button type="submit" disabled={status === "loading"}>{status === "loading" ? "Recherche…" : "Rechercher"}</button></div>
          <div id="city-status" role="status" aria-live="polite" className={styles.status}>
            {status === "loading" && "Recherche de votre commune…"}
            {status === "invalid" && "Indiquez au moins deux caractères ou un code postal à cinq chiffres."}
            {status === "empty" && "Aucune commune trouvée. Vérifiez l’orthographe ou essayez le code postal."}
            {status === "error" && <>La recherche est momentanément indisponible. Réessayez, choisissez un secteur ci-dessous ou <Link href="/contact">contactez-nous</Link>.</>}
            {status === "results" && `${results.length} résultat(s). Choisissez votre commune ; le département et les codes postaux permettent de distinguer les homonymes.${results.length === 20 ? " Si votre commune n’apparaît pas, précisez son nom ou utilisez son code postal." : ""}`}
          </div>
          {results.length > 0 && <ul className={styles.results} aria-label="Communes trouvées">{results.map(city => <li key={city.code}><button type="button" onClick={() => choose(city)}><strong>{city.nom}</strong><span>Département {city.codeDepartement} · {city.codesPostaux.join(", ")}</span></button></li>)}</ul>}
        </form>
        {selected && distance !== null && <div className={styles.result} role="status"><span className={styles.kicker}>{selected.nom} · {selected.codeDepartement}</span><h3>{distance < 1 ? "Moins de 1 km" : `Environ ${Math.round(distance)} km`} à vol d’oiseau</h3><p>{distance <= usualRadiusKm ? "Votre commune se trouve dans notre zone habituelle d’intervention. Contactez-nous pour confirmer votre projet." : "Votre projet peut être étudié sur demande."}</p><Link className="text-link" href="/contact">Demander un devis →</Link></div>}
        <p className={styles.finePrint}>Rayon indicatif à vol d’oiseau, depuis le centre géographique de Fréjus jusqu’au centre de la commune. Ce n’est pas une distance par la route. Toute intervention reste à confirmer selon la localisation, l’accès et la nature du projet.</p>
        <a className={styles.source} href="https://geo.api.gouv.fr/" target="_blank" rel="noreferrer">Communes et coordonnées : API Découpage administratif</a>
      </div>
      <div className={styles.mapPanel}>
        <div className={styles.mapHeader}><span><i />Fréjus · rayon indicatif de 100 km</span><button type="button" onClick={() => { request.current?.abort(); request.current = null; setSelected(null); setResults([]); setStatus("idle"); setResetToken(value => value + 1); }}>Vue d’ensemble</button></div>
        <Map selected={selected} resetToken={resetToken} />
        <p className={styles.mapCaption}>Le disque bleu représente le rayon habituel, sans garantie de couverture. Zoomez avec + / − ; sur mobile, déplacez la carte avec les doigts.</p>
      </div>
    </section>
    <section className={styles.sectors} aria-labelledby="sectors-heading"><p className="section-eyebrow"><span />Des repères près de chez vous</p><h2 id="sectors-heading">Quelques exemples de secteurs</h2><p>Cette liste n’est pas exhaustive. Sélectionnez une ville pour la situer sur la carte et vérifier sa distance indicative.</p><ul className={styles.cities}>{interventionCities.map(city => <li key={city.code}><button type="button" aria-pressed={selected?.code === city.code} onClick={() => { choose(city); document.getElementById("zone-heading")?.scrollIntoView({ block: "start" }); }}>{city.nom}<span aria-hidden="true">↗</span></button></li>)}</ul></section>
  </>;
}
