export function initBlogPage() {
  // Añade comportamiento cliente opcional (por ejemplo: copiar URL del post)
  const copyButtons = document.querySelectorAll('[data-copy-url]');
  if (copyButtons.length === 0) return;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const url = btn.getAttribute('data-copy-url');
      if (!url) return;
      try {
        await navigator.clipboard.writeText(url);
        const original = btn.textContent;
        btn.textContent = 'Copiado';
        setTimeout(() => (btn.textContent = original), 1500);
      } catch (err) {
        console.warn('No se pudo copiar al portapapeles', err);
      }
    });
  });
}
