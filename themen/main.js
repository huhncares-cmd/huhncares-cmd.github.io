document.getElementById("switch-btn-one").addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: window.innerWidth,
        behavior: "smooth",
    });
});
document.getElementById("switch-btn-two").addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });  
});