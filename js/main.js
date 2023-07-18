window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        document.querySelector("nav").classList.add("sticky", window.scrollY > 0);
        return;
    }
    document.querySelector("nav").classList.remove("sticky", window.scrollY == 0);
});