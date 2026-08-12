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
    departureCity: "Fréjus",
    department: "Var (83)",
    radius: "Environ 100 km autour de Fréjus",
    mainCities: [
      "Fréjus", "Saint-Raphaël", "Puget-sur-Argens", "Roquebrune-sur-Argens",
      "Les Issambres", "Sainte-Maxime", "Saint-Tropez", "Cogolin", "Grimaud",
      "Draguignan", "Fayence", "Mandelieu-la-Napoule", "Cannes", "Antibes",
    ],
    departments: ["Var (83)", "Alpes-Maritimes (06), selon localisation"],
  },
  socials: {} as { facebook?: string; instagram?: string; linkedin?: string },
} as const;

export const companyPlaceholders = [
  "Raison sociale", "Forme juridique", "SIRET", "Adresse", "Téléphone",
  "Email", "Responsable de publication", "Hébergeur", "URL du site",
] as const;
