import type { APIRoute } from 'astro';
import { PRODUCTS } from '../data/products';
import { BLOG_POSTS } from '../data/blog';

const baseUrl = 'https://oro-inca-joyeria.vercel.app';

export const GET: APIRoute = () => {
  const staticPages = [
    '',
    '/products',
    '/blog',
    '/contact',
    '/about',
    '/eterno-compromiso',
    '/eventos/bodas',
    '/eventos/compromiso',
    '/eventos/aniversarios',
  ];

  const productPages = PRODUCTS.map((product) => `/product/${product.id}`);
  const blogPages = BLOG_POSTS.map((post) => `/blog/${post.slug}`);

  const allPages = [...staticPages, ...productPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(
    (url) => {
      const esUrl = url;
      const enUrl = `/en${url === '' ? '' : url}`;
      return `  <url>
    <loc>${baseUrl}${esUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'daily' : url.includes('/product/') || url.includes('/blog/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.includes('/product/') || url.includes('/blog/') ? '0.8' : '0.6'}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${esUrl}" />
  </url>
  <url>
    <loc>${baseUrl}${enUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'daily' : url.includes('/product/') || url.includes('/blog/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.includes('/product/') || url.includes('/blog/') ? '0.8' : '0.6'}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${esUrl}" />
  </url>`;
    }
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

