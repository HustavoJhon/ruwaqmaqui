import type { Product } from "./products";

export const getCategoryName = (
  category: Product["category"],
  lang: string = "es"
): string => {
  if (lang === "en") {
    const categoryNames: Record<Product["category"], string> = {
      anillos: "Rings",
      aretes: "Earrings",
      collares: "Necklaces",
      pulseras: "Bracelets",
    };
    return categoryNames[category] || category;
  } else {
    const categoryNames: Record<Product["category"], string> = {
      anillos: "Anillos",
      aretes: "Aretes",
      collares: "Collares",
      pulseras: "Pulseras",
    };
    return categoryNames[category] || category;
  }
};

export const getAllImages = (product: Product): string[] => {
  const images: string[] = [];
  const mainImage = typeof product.image === "string" ? product.image : product.image.src;
  images.push(mainImage);

  if (product.images && product.images.length > 0) {
    product.images.forEach((img) => {
      const imgSrc = typeof img === "string" ? img : img.src;
      if (imgSrc !== mainImage) {
        images.push(imgSrc);
      }
    });
  }

  return images;
};
