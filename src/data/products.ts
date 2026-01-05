import type { ImageMetadata } from "astro";

import anillo01 from "../assets/img/products/anillos/anillos-1.jpg";
import anillo02 from "../assets/img/products/anillos/Sortija de compromiso Modelo Encuentro Oro 18K.jpg";

import arete01 from "../assets/img/products/aretes/arete-1.jpg";
import arete02 from "../assets/img/products/aretes/arete-2.jpg";
import arete03 from "../assets/img/products/aretes/arete-3.jpg";
import arete04 from "../assets/img/products/aretes/576653851_1607277847151674_6620458920188429498_n.jpg";
import arete05 from "../assets/img/products/aretes/577446311_1608315360381256_1148410897100216870_n.jpg";

import collar01 from "../assets/img/products/collares/514407675_1511781833367943_8715228900840877082_n.jpg";
import collar02 from "../assets/img/products/collares/539564175_18080970587503837_1904721084838237786_n.jpg";
import collar03 from "../assets/img/products/collares/540449911_18080970569503837_6061174776614063869_n.jpg";
import collar04 from "../assets/img/products/collares/540559091_18080970560503837_5452321682517263180_n.jpg";

import pulsera01 from "../assets/img/products/pulseras/515364265_1516844712861655_8323171663846118903_n.jpg";
import pulsera02 from "../assets/img/products/pulseras/520421167_18075938306503837_1731443168419658313_n.jpg";
import pulsera03 from "../assets/img/products/pulseras/521541070_18075938297503837_5367119733131768831_n.jpg";
import pulsera04 from "../assets/img/products/pulseras/521552076_18075938279503837_2920415677062248300_n.jpg";

export type Category =
  | "anillos"
  | "aretes"
  | "collares"
  | "pulseras";

export interface Product {
  id: number;
  name: string;
  description: string;
  detailedDescription?: string; // Segunda descripción detallada
  price: number;
  oldPrice?: number;
  image: ImageMetadata; // Imagen principal (para compatibilidad)
  images?: ImageMetadata[]; // Array de imágenes adicionales
  category: Category;
  badge?: string;
}

export const PRODUCTS = [
  {
    id: 1,
    name: "Anillo Inti Dorado",
    description: "Inspirado en la fuerza del sol Inca",
    detailedDescription: "Este anillo representa el poder y la energía del sol Inti, una de las deidades más importantes en la cosmovisión andina. Fabricado con materiales de la más alta calidad, combina la elegancia moderna con el simbolismo ancestral. Perfecto para ocasiones especiales o como pieza de colección que honra nuestras raíces culturales.",
    price: 129.99,
    oldPrice: 159.99,
    image: anillo01,
    images: [anillo01], // Puedes agregar más imágenes cuando estén disponibles
    category: "anillos",
    badge: "Oferta",
  },
  {
    id: 2,
    name: "Sortija de compromiso Modelo Encuentro Oro 18K",
    description: "Inspirado en la fuerza del sol Inca",
    detailedDescription: "Este anillo representa el poder y la energía del sol Inti, una de las deidades más importantes en la cosmovisión andina. Fabricado con materiales de la más alta calidad, combina la elegancia moderna con el simbolismo ancestral. Perfecto para ocasiones especiales o como pieza de colección que honra nuestras raíces culturales.",
    price: 129.99,
    oldPrice: 159.99,
    image: anillo02,
    images: [anillo02, arete01], // Puedes agregar más imágenes cuando estén disponibles
    category: "anillos",
    badge: "Oferta",
  },
  {
    id: 3,
    name: "Aretes Killa",
    description: "Elegancia sutil y femenina",
    detailedDescription: "Los aretes Killa rinden homenaje a la luna, símbolo de feminidad y fertilidad en la cultura Inca. Con un diseño delicado pero impactante, estos aretes están diseñados para realzar la belleza natural. Fabricados con técnicas tradicionales y materiales premium, son ideales para el uso diario o eventos especiales.",
    price: 89.99,
    image: arete01,
    images: [arete01, arete02, arete03, arete04, arete05],
    category: "aretes",
    badge: "Nuevo",
  },
  {
    id: 4,
    name: "Collar Tamaulti",
    description: "Elegancia ancestral",
    detailedDescription: "El collar Tamaulti es una pieza única que combina elementos de diseño precolombino con un toque contemporáneo. Cada detalle está cuidadosamente trabajado para crear una pieza que no solo es hermosa, sino también significativa. Perfecto para quienes buscan una joya que cuente una historia y refleje su conexión con la tradición andina.",
    price: 90.0,
    image: collar01,
    images: [collar01, collar02, collar03, collar04],
    category: "collares",
    badge: "Nuevo",
  },
  {
    id: 5,
    name: "Pulsera Andina",
    description: "Equilibrio y tradición",
    detailedDescription: "Esta pulsera representa el equilibrio entre el mundo espiritual y material, un concepto fundamental en la filosofía andina. Con un diseño que evoca los patrones geométricos encontrados en los textiles ancestrales, esta pieza es un símbolo de conexión con nuestras raíces. Ideal para uso diario, combina comodidad con significado cultural profundo.",
    price: 90.0,
    image: pulsera01,
    images: [pulsera01, pulsera02, pulsera03, pulsera04],
    category: "pulseras",
    badge: "Nuevo",
  },
];
