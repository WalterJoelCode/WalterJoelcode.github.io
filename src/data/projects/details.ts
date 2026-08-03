import { getProjectByName } from "./catalog";
import { hoteleriatec } from "./hoteleriatec";
import type { CollaboratorAssignment } from "../collaborators";
import { readdirSync } from "node:fs";
import { extname, resolve } from "node:path";

export interface InstitutionalCard {
  title: string;
  description: string;
  icon?: string;
}
export interface ProjectDetail {
  slug: "flosscuerosystem" | "hoteleriatec" | "stockone" | "sigepro";
  category: "business" | "education";
  title: string;
  shortDescription: string;
  logo?: string;
  github?: string;
  gallery: { src: string; alt: string }[];
  generalDescription: string;
  context?: string;
  objectives: string[];
  technologies: string[];
  collaborators?: CollaboratorAssignment[];
  institutionalCards?: InstitutionalCard[];
}

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

const projectGallery = (project: ProjectDetail["slug"], title: string) => {
  const directory = resolve(process.cwd(), "public", "projects", project, "gallery");

  return readdirSync(directory, { withFileTypes: true })
    .filter((file) => file.isFile() && imageExtensions.has(extname(file.name).toLowerCase()))
    .sort((first, second) => first.name.localeCompare(second.name, "es", { numeric: true }))
    .map((file, index) => ({
      src: `/projects/${project}/gallery/${file.name}`,
      alt: `${title} — imagen ${index + 1}`,
    }));
};

const flossCueroSystem = getProjectByName("FlossCueroSystem");
const stockOne = getProjectByName("StockOne");
const sigepro = getProjectByName("SIGEPRO");

const stockOneCollaborators: NonNullable<ProjectDetail["collaborators"]> = [];
const walterJoel = "walterJoelCastilCorea" as const;

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "flosscuerosystem",
    category: flossCueroSystem.category,
    title: flossCueroSystem.name,
    shortDescription: flossCueroSystem.shortDescription,
    logo: flossCueroSystem.logo,
    github: flossCueroSystem.github || undefined,
    gallery: projectGallery("flosscuerosystem", "FlossCueroSystem"),
    generalDescription: flossCueroSystem.description,
    objectives: [],
    technologies: flossCueroSystem.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la solución", details: "Participación en el análisis, diseño y desarrollo del sistema." }],
  },
  {
    slug: "hoteleriatec",
    category: "education",
    title: hoteleriatec.title,
    shortDescription: getProjectByName("HoteleríaTec").shortDescription,
    logo: hoteleriatec.logo,
    github: hoteleriatec.github || undefined,
    gallery: projectGallery("hoteleriatec", "HoteleríaTec"),
    generalDescription: hoteleriatec.generalDescription,
    context: "HoteleríaTec surge como una propuesta de innovación pedagógica orientada a fortalecer el proceso de enseñanza-aprendizaje en la carrera de Técnico General en Servicio de Restaurante, Bar y Cafetería, específicamente en la unidad Técnicas de Venta y Sistema de Facturación en el Restaurante. La estrategia consiste en la implementación de un sistema de información diseñado con un enfoque educativo, que permite a las y los protagonistas interactuar con un entorno similar al que encontrarán en establecimientos gastronómicos modernos. El entorno formativo presenta una oportunidad significativa para incorporar herramientas tecnológicas que acerquen a los estudiantes a las dinámicas actuales del sector gastronómico. En muchos casos, el contacto con sistemas de punto de venta o plataformas de gestión ocurre únicamente cuando ingresan al mercado laboral, generando una curva de aprendizaje adicional. Ante esta realidad, HoteleríaTec ofrece un ambiente de simulación que permite practicar procedimientos reales dentro del aula, fortaleciendo la integración entre teoría y práctica mediante escenarios interactivos que favorecen el aprendizaje activo y el desarrollo de competencias digitales aplicadas al servicio de restaurante.",
    institutionalCards: [
      { title: "Estrategia Nacional de Educación en todas sus Modalidades “Bendiciones y Victorias” 2024 - 2026 ", description: "Busca asegurar el desarrollo humano y pleno de las personas, familia y comunidad mediante 16 ejes temáticos y 80 líneas de trabajo aplicadas en centros de estudio de zonas urbanas y rurales", icon: "mission" },
      { title: "Plan Nacional de Lucha contra la Pobreza y para el Desarrollo Humano 2022-2026", description: "Su objetivo principal es continuar reduciendo la pobreza y la pobreza extrema, impulsando el crecimiento económico, la estabilidad macroeconómica y la restitución de derechos sociales para mejorar la calidad de vida de las familias", icon: "vision" },
      { title: "Programa Nacional de Creatividad, Investigación, Innovación, Emprendimiento y Tecnología - Siempre más allá", description: ". Su objetivo es potenciar el talento de estudiantes y docentes de la educación técnica mediante la transformación digital, la investigación y el desarrollo de emprendimientos vinculados a los sectores productivos.", icon: "values" },
      { title: "Metodología educativa Aprender-Haciendo del Tecnológico Nacional (INATEC)", description: "Consiste en un formato de 70% de práctica y 30% de teoría, diseñado para que los estudiantes desarrollen habilidades reales mediante el uso de herramientas y equipos de nivel tecnológico, entre otros.", icon: "principles" },
    ],
    objectives: ["Desarrollar un sistema de información educativo para simular los procesos operativos del área de restaurante.", "Fortalecer el aprendizaje teórico y práctico previo al mundo laboral mediante la simulación de procesos propios del servicio de restaurante.", "Potenciar las competencias profesionales y digitales de los protagonistas del área de restaurante mediante el uso de herramientas tecnológicas."],
    technologies: hoteleriatec.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la solución", details: "Definición de la estrategia didáctica, diseño de la secuencia didáctica y construcción de la plataforma web." }],
  },
  {
    slug: "stockone",
    category: stockOne.category,
    title: stockOne.name,
    shortDescription: stockOne.shortDescription,
    logo: stockOne.logo,
    github: stockOne.github || undefined,
    gallery: projectGallery("stockone", "StockOne"),
    generalDescription: "StockOne es un sistema web integral de gestión comercial e inventario, diseñado para centralizar la operación diaria de una tienda. Permite administrar productos, categorías, servicios, clientes, proveedores y agencias; además de registrar compras, ventas, devoluciones, envíos, créditos y movimientos de caja. Incluye alertas de bajo inventario, ajustes de existencias y control de acceso por roles para administradores, cajeros y responsables de inventario. Desarrollado con Laravel 12, PHP 8.2 y Livewire, el proyecto prioriza procesos operativos claros y trazables. Ofrece paneles de estadísticas, historial de transacciones, emisión de comprobantes y reportes detallados de inventario, ventas, compras, caja y envíos, con generación de PDF y exportación a Excel. También incorpora recuperación de contraseña, envío de correos y herramientas de respaldo y restauración de la base de datos.",
    objectives: ["..."],
    technologies: stockOne.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la solución", details: "Participación en el análisis, diseño y desarrollo del sistema." }, ...stockOneCollaborators],
  },
  {
    slug: "sigepro",
    category: sigepro.category,
    title: sigepro.name,
    shortDescription: sigepro.shortDescription,
    logo: sigepro.logo,
    github: sigepro.github || undefined,
    gallery: projectGallery("sigepro", "SIGEPRO"),
    generalDescription: "Contenido provisional. Lorem ipsum dolor sit amet, consectetur adipiscing elit. La descripción definitiva se incorporará cuando los requisitos y el alcance del proyecto estén confirmados.",
    objectives: ["Contenido provisional: definir el problema a resolver.", "Contenido provisional: documentar los objetivos aprobados.", "Contenido provisional: describir los siguientes pasos."],
    technologies: sigepro.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la propuesta", details: "Participación en el análisis, diseño y desarrollo de la propuesta." }],
  },
];

export const getProjectDetailBySlug = (slug: string) => PROJECT_DETAILS.find((project) => project.slug === slug);
