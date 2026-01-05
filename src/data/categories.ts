import idleDirective from "astro/runtime/client/idle.js";
import anillo from "../assets/img/categories/anillos.png";
import arete from "../assets/img/categories/aretes.png";
import collar from "../assets/img/categories/collares.png";
import pulsera from "../assets/img/categories/pulseras.png";
export const CATEGORIES = [
  {
    id: 1,
    title: "Anillos",
    subtitle: "Elegancia y estilo para cada ocasión",
    image: anillo,
  },
  {
    id: 2,
    title: "Aretes",
    subtitle: "Detalles que destacan tu belleza",
    image: arete,
  },
  {
    id: 3,
    title: "Collares",
    subtitle: "Inspiración y sofisticación en cada diseño",
    image: collar,
  },
  {
    id: 4,
    title: "Pulseras",
    subtitle: "Joyas que adornan y cuentan historias",
    image: pulsera,
  },
];
