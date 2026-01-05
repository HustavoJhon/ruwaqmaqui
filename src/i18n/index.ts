import { translations as esTranslations } from './es';
import { translations as enTranslations } from './en';
import type { AstroGlobal } from 'astro';

export type Language = 'es' | 'en';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export const translations = {
  es: esTranslations,
  en: enTranslations,
};

/**
 * Detecta el idioma desde la URL usando Astro.url.pathname
 * / -> es
 * /en -> en
 * /en/products -> en
 */
export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'es';
}

/**
 * Obtiene el idioma actual desde Astro.url
 */
export function getCurrentLanguage(Astro: AstroGlobal): Language {
  return getLanguageFromPath(Astro.url.pathname);
}

/**
 * Obtiene la ruta base sin el prefijo de idioma
 * /en/products -> /products
 * /products -> /products
 */
export function getBasePath(pathname: string): string {
  if (pathname.startsWith('/en')) {
    return pathname.replace('/en', '') || '/';
  }
  return pathname;
}

/**
 * Obtiene la ruta con el prefijo de idioma
 * /products, 'en' -> /en/products
 * /products, 'es' -> /products
 */
export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === 'en') {
    return `/en${path === '/' ? '' : path}`;
  }
  return path;
}

/**
 * Función t() para obtener traducciones con claves anidadas
 * Ejemplo: t('nav.productos') o t('common.precio')
 */
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang] || translations.es;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback a español si no encuentra la clave
      value = translations.es;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Retorna la clave si no encuentra traducción
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

/**
 * Hook para usar traducciones en componentes Astro
 */
export function useTranslations(lang: Language) {
  return (key: string) => t(lang, key);
}

/**
 * Obtiene traducciones completas para un idioma
 */
export function getTranslations(lang: Language = 'es') {
  return translations[lang] || translations.es;
}

/**
 * Obtiene la traducción de un producto según el idioma
 */
export function getProductTranslation(productId: number, lang: Language) {
  const trans = translations[lang] || translations.es;
  const productTrans = (trans as any).productTranslations?.[productId.toString()];
  return productTrans || null;
}

/**
 * Obtiene la traducción de un blog según el idioma
 */
export function getBlogTranslation(slug: string, lang: Language) {
  const trans = translations[lang] || translations.es;
  const blogTrans = (trans as any).blogTranslations?.[slug];
  return blogTrans || null;
}

/**
 * Obtiene el contenido traducido de un blog según el idioma
 */
export function getBlogContent(slug: string, lang: Language): string | null {
  const blogTrans = getBlogTranslation(slug, lang);
  return blogTrans?.content || null;
}

