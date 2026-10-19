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
    title: "Fortalecimiento del pensamiento lógico y algorítmico",
    shortDescription: "Una práctica educativa progresiva con pseudocódigo, PSeInt y C# para fortalecer la resolución de problemas en estudiantes de programación.",
    category: "Buenas prácticas educativas",
    year: "2026",
    cover: "/investigaciones/pensamiento-logico-algoritmico/pseint-aula.jpeg",
  },
];

export const getInvestigationBySlug = (slug: string) =>
  INVESTIGATIONS.find((investigation) => investigation.slug === slug);
