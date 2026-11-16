import cities from "./intervention-cities.json";

export type Commune = {
  nom: string;
  code: string;
  codeDepartement: string;
  codesPostaux: string[];
  centre: { type: string; coordinates: [number, number] };
};

// Centres géographiques officiels, API Découpage administratif (geo.api.gouv.fr),
// récupérés le 16 novembre 2026. Ordre des coordonnées GeoJSON : longitude, latitude.
export const interventionCities = cities as Commune[];
export const frejus = interventionCities.find(city => city.code === "83061")!;
export const usualRadiusKm = 100;

export function distanceKm(from: Commune, to: Commune): number {
  const [lon1, lat1] = from.centre.coordinates.map(value => value * Math.PI / 180);
  const [lon2, lat2] = to.centre.coordinates.map(value => value * Math.PI / 180);
  const a = Math.sin((lat2 - lat1) / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2;
  return 6371.0088 * 2 * Math.asin(Math.sqrt(Math.min(1, a)));
}

export function isCommune(value: unknown): value is Commune {
  if (!value || typeof value !== "object") return false;
  const city = value as Commune;
  const coords = city.centre?.coordinates;
  return typeof city.nom === "string" && typeof city.code === "string" && typeof city.codeDepartement === "string"
    && Array.isArray(city.codesPostaux) && city.codesPostaux.every(code => typeof code === "string")
    && Array.isArray(coords) && coords.length === 2 && coords.every(Number.isFinite)
    && Math.abs(coords[0]) <= 180 && Math.abs(coords[1]) <= 90;
}
