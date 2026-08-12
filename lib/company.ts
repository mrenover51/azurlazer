export const company = {
  name: "AZUR LASER",
  legalName: "[RAISON SOCIALE À RENSEIGNER]",
  legalForm: "[FORME JURIDIQUE À RENSEIGNER]",
  siret: "[SIRET À RENSEIGNER]",
  address: "[ADRESSE À RENSEIGNER]",
  phone: "[TÉLÉPHONE À RENSEIGNER]",
  phoneHref: "",
  email: "[EMAIL À RENSEIGNER]",
  publicationDirector: "[RESPONSABLE DE PUBLICATION À RENSEIGNER]",
  host: "[HÉBERGEUR À RENSEIGNER APRÈS DÉPLOIEMENT]",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  intervention: {
    departureCity: "[VILLE DE DÉPART À RENSEIGNER]",
    department: "[DÉPARTEMENT À RENSEIGNER]",
    radius: "[RAYON D’INTERVENTION À RENSEIGNER]",
    mainCities: [] as string[],
    departments: [] as string[],
  },
  socials: {} as { facebook?: string; instagram?: string; linkedin?: string },
} as const;

export const companyPlaceholders = [
  "Raison sociale", "Forme juridique", "SIRET", "Adresse", "Téléphone",
  "Email", "Responsable de publication", "Hébergeur", "URL du site",
  "Ville de départ", "Département", "Rayon et communes d’intervention",
] as const;
