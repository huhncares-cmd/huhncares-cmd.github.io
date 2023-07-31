document.getElementById("switch-btn-one").addEventListener('click', () => {
    console.log(window.visualViewport.width)
    window.scrollTo({
        top: 0,
        left: window.visualViewport.width,
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