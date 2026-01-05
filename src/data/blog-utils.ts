import type { BlogPost } from "./blog";

export function getRelatedPosts(posts: BlogPost[], currentSlug: string, category: string, limit = 3) {
  return posts
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, limit);
}

export function buildPostUrl(slug: string, getPath: (p: string) => string) {
  return `https://oro-inca-joyeria.vercel.app${getPath(`/blog/${slug}`)}`;
}
