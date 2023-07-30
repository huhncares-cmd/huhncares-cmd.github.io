document.getElementById("switch-btn-one").addEventListener('click', () => {
    console.log("clicked");
    window.scrollTo({
        top: 0,
        left: window.innerWidth,
        behavior: "smooth",
    });
});
document.getElementById("switch-btn-two").addEventListener('click', () => {
    console.log("clicked2");
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });  
});