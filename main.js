const btn = document.getElementById("menu");
const nav = document.querySelector("nav");
btn.addEventListener("click", () => {
    toggleSidebar();
});
nav.addEventListener("click", () => {
    toggleSidebar();
});
function toggleSidebar() {
    document.querySelector("main").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");

    document.body.style.overflowX = "hidden";
}