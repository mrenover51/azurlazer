export type Realization = {
  id: string;
  title: string;
  category: "laser" | "aerogommage";
  support: string;
  need: string;
  solution: string;
  result: string;
  beforeLabel: string;
  afterLabel: string;
  beforeSrc: string;
  afterSrc: string;
};

export const realizations: Realization[] = [
  { id: "metal-oxyde", title: "Pièce métallique rouillée", category: "laser", support: "Métal", need: "Enlever la rouille", solution: "Décapage laser", result: "Métal nettoyé, prêt pour la suite du projet", beforeLabel: "Surface rouillée", afterLabel: "Métal nettoyé", beforeSrc: "/images/laser/rust-metal-surface.webp", afterSrc: "/images/laser/laser-metal-sparks.webp" },
  { id: "piece-mecanique", title: "Pièce mécanique", category: "laser", support: "Acier", need: "Retirer les dépôts présents", solution: "Décapage laser", result: "Pièce nettoyée avec un travail précis", beforeLabel: "Pièce à nettoyer", afterLabel: "Métal nettoyé", beforeSrc: "/images/laser/industrial-mechanical-gears.webp", afterSrc: "/images/home/laser-industrial-hero.webp" },
  { id: "meuble-bois", title: "Meuble en bois", category: "aerogommage", support: "Bois", need: "Retirer une ancienne finition", solution: "Aérogommage", result: "Bois remis à nu, prêt à recevoir une nouvelle finition", beforeLabel: "Ancien vernis", afterLabel: "Bois remis à nu", beforeSrc: "/images/aerogommage/furniture-restoration-workshop.webp", afterSrc: "/images/aerogommage/wood-surface-preparation.webp" },
  { id: "poutre", title: "Poutres anciennes", category: "aerogommage", support: "Bois", need: "Retirer l’ancienne couche en surface", solution: "Aérogommage", result: "Bois apparent, prêt pour la rénovation", beforeLabel: "Bois ancien", afterLabel: "Bois remis à nu", beforeSrc: "/images/aerogommage/wood-brick-surface.webp", afterSrc: "/images/aerogommage/wood-beams-renovation.webp" },
  { id: "pierre", title: "Mur en pierre", category: "aerogommage", support: "Pierre", need: "Nettoyer les salissures en surface", solution: "Aérogommage", result: "Pierre nettoyée et aspect d’origine mieux visible", beforeLabel: "Pierre encrassée", afterLabel: "Pierre nettoyée", beforeSrc: "/images/realisations/weathered-stone-paint.webp", afterSrc: "/images/aerogommage/stone-wall-surface.webp" },
  { id: "revetement", title: "Peinture sur métal", category: "laser", support: "Métal", need: "Retirer une ancienne peinture", solution: "Décapage laser", result: "Métal préparé pour une nouvelle finition", beforeLabel: "Ancienne peinture", afterLabel: "Métal préparé", beforeSrc: "/images/laser/painted-rust-metal.webp", afterSrc: "/images/laser/laser-metal-sparks.webp" },
];
