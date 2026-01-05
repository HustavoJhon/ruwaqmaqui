export function initHeroCarousel(
  selector: string,
  interval: number = 5000
) {
  const slides = document.querySelectorAll<HTMLElement>(selector);

  if (!slides.length) return;

  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("opacity-100");
    slides[index].classList.add("opacity-0");

    index = (index + 1) % slides.length;

    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");
  }, interval);
}
