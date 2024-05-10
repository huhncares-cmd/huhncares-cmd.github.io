document.querySelector(".fade-in").classList.add("active");
document.querySelector('#scroll-down-btn').addEventListener('click', () => {
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});