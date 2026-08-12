export type Realization = {
  id: string;
  title: string;
  category: "laser" | "aerogommage";
  support: string;
  objective: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeSrc: string;
  afterSrc: string;
};

export const realizations: Realization[] = [
  { id: "metal-oxyde", title: "Pièce métallique oxydée", category: "laser", support: "Métal", objective: "Retrait d’oxydation", description: "Exemple visuel générique d’une préparation métallique.", beforeLabel: "Métal oxydé", afterLabel: "Travail du métal", beforeSrc: "/images/laser/rust-metal-surface.webp", afterSrc: "/images/laser/laser-metal-sparks.webp" },
  { id: "piece-mecanique", title: "Pièce mécanique", category: "laser", support: "Acier", objective: "Nettoyage technique", description: "Exemple visuel générique d’un environnement mécanique et d’un traitement industriel.", beforeLabel: "Mécanisme ancien", afterLabel: "Procédé industriel", beforeSrc: "/images/laser/industrial-mechanical-gears.webp", afterSrc: "/images/home/laser-industrial-hero.webp" },
  { id: "meuble-bois", title: "Mobilier en bois", category: "aerogommage", support: "Bois", objective: "Retrait d’une ancienne finition", description: "Exemple visuel générique d’une remise en état du bois.", beforeLabel: "Mobilier ancien", afterLabel: "Bois préparé", beforeSrc: "/images/aerogommage/furniture-restoration-workshop.webp", afterSrc: "/images/aerogommage/wood-surface-preparation.webp" },
  { id: "poutre", title: "Poutre ancienne", category: "aerogommage", support: "Bois", objective: "Retrouver l’aspect de la matière", description: "Exemple visuel générique de rénovation d’une structure bois.", beforeLabel: "Bâti ancien", afterLabel: "Poutres en rénovation", beforeSrc: "/images/aerogommage/wood-brick-surface.webp", afterSrc: "/images/aerogommage/wood-beams-renovation.webp" },
  { id: "pierre", title: "Support minéral", category: "aerogommage", support: "Pierre", objective: "Nettoyage de surface", description: "Exemple visuel générique de supports minéraux distincts.", beforeLabel: "Mur altéré", afterLabel: "Pierre apparente", beforeSrc: "/images/realisations/weathered-stone-paint.webp", afterSrc: "/images/aerogommage/stone-wall-surface.webp" },
  { id: "revetement", title: "Revêtement compatible", category: "laser", support: "Métal", objective: "Préparation avant traitement", description: "Exemple visuel générique de surfaces métalliques distinctes.", beforeLabel: "Peinture oxydée", afterLabel: "Préparation métal", beforeSrc: "/images/laser/painted-rust-metal.webp", afterSrc: "/images/laser/laser-metal-sparks.webp" },
];
