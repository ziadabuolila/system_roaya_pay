// --- menu pages ---
window.addEventListener("DOMContentLoaded", () => {
  fetch("include_menu/menu.html#menu-placeholder")
    .then(response => response.text())
    .then(data => {
      document.getElementById("menu-placeholder").innerHTML = data;
    });
});
// --- menu show ---
const menu = document.getElementById("menu-placeholder");
const toggleBtn = document.getElementById("toggleMenuBtn");
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ) {
        menu.classList.remove("show");
    }
});
// --- dropdown menu ---
function toggleSubmenu(element) {
    const parent = element.parentElement;
    parent.classList.toggle('open');
}