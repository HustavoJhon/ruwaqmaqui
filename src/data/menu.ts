export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

export const MENU: MenuItem[] = [
  {
    label: "Productos",
    href: "/products",
    children: [
      {
        label: "Aretes",
        href: "/products?category=aretes",
      },
      {
        label: "Anillos",
        href: "/products?category=anillos",
      },
      {
        label: "Collares",
        href: "/products?category=collares",
      },
      {
        label: "Pulseras",
        href: "/products?category=pulseras",
      },
    ],
  },
  {
    label: "Nosotros",
    href: "/about",
    children: [
      {
        label: "Historia",
        href: "/about#historia",
      },
      {
        label: "Talleres",
        href: "/about#talleres",
      },
      {
        label: "Misión",
        href: "/about#mision",
      },
    ],
  },
];
