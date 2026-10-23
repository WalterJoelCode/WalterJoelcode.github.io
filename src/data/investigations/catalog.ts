export interface InvestigationCatalogItem {
  slug: "pensamiento-logico-algoritmico";
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  cover: string;
}

export const INVESTIGATIONS: InvestigationCatalogItem[] = [
  {
    slug: "pensamiento-logico-algoritmico",
    title: "Fortalecimiento del pensamiento lógico y algorítmico mediante el aprendizaje progresivo con pseudocódigo y PSeInt en protagonistas de la educación técnica",
    shortDescription: "Buena práctica educativa que parte de la resolución lógica de problemas, avanza con pseudocódigo y PSeInt, y prepara la transición fundamentada hacia C#.",
    category: "Buenas prácticas educativas",
    year: "2026",
    cover: "/investigaciones/pensamiento-logico-algoritmico/pseint-aula.jpeg",
  },
];

export const getInvestigationBySlug = (slug: string) =>
  INVESTIGATIONS.find((investigation) => investigation.slug === slug);
