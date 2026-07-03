const searchInput = document.querySelector("[data-search-input]");
const searchableItems = document.querySelectorAll("[data-search-item]");
const categoryButtons = document.querySelectorAll("[data-category]");

const filterItems = () => {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const activeCategory = document.querySelector("[data-category].active")?.getAttribute("data-category") || "all";

  searchableItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const itemCategory = item.getAttribute("data-search-category") || "";
    const matchesQuery = !query || text.includes(query);
    const matchesCategory = activeCategory === "all" || itemCategory.includes(activeCategory);
    item.hidden = !(matchesQuery && matchesCategory);
  });
};

if (searchInput) {
  searchInput.addEventListener("input", filterItems);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    filterItems();
  });
});
