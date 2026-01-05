import idleDirective from "astro/runtime/client/idle.js";
import anillo from "../assets/img/categories/anillos.png";
import arete from "../assets/img/categories/aretes.png";
import collar from "../assets/img/categories/collares.png";
import pulsera from "../assets/img/categories/pulseras.png";
export const COLLECTIONS = [
  {
    id: 1,
    title: "Colección Inti",
    subtitle: "Fuerza y elegancia masculina",
    image: anillo,
  },
  {
    id: 2,
    title: "Colección Killa",
    subtitle: "Belleza femenina y delicada",
    image: arete,
  },
  {
    id: 3,
    title: "Colección Andina",
    subtitle: "Inspirada en nuestra herencia ancestral",
    image: collar,
  },
];
