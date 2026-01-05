document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
  const products = document.querySelectorAll<HTMLElement>(".product-item");
  const searchInput = document.getElementById("search") as HTMLInputElement | null;

  // Filtro por categoría
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      products.forEach((product) => {
        const productCategory = product.dataset.category;

        product.style.display =
          category === "todos" || productCategory === category
            ? "block"
            : "none";
      });
    });
  });

  // Búsqueda por nombre
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();

      products.forEach((product) => {
        const name = product.dataset.name || "";

        product.style.display = name.includes(value)
          ? "block"
          : "none";
      });
    });
  }
});
