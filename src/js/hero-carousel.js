document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 Hero carousel cargado");

  const slides = document.querySelectorAll(".hero-slide");
  console.log("Slides encontrados:", slides.length);

  if (!slides.length) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("opacity-100");
    slides[current].classList.add("opacity-0");

    current = (current + 1) % slides.length;

    slides[current].classList.remove("opacity-0");
    slides[current].classList.add("opacity-100");
  }, 5000);
});
