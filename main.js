const btn = document.getElementById("menu");
const nav = document.querySelector("nav");
btn.addEventListener("click", () => {
    toggleSidebar();
});
nav.addEventListener("click", () => {
    toggleSidebar();
    document.querySelector("body").style.overflowX = "hidden";
});
function toggleSidebar() {
    document.querySelector("main").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
    
    document.querySelector("body").style.overflowX = "hidden";
}
