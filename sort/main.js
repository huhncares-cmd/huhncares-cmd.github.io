document.querySelector(".fade-in").classList.add("active");
document.querySelector('#scroll-down-btn').addEventListener('click', () => {
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
document.querySelector("#toggle-solution").addEventListener('click', () => { 
    document.querySelector("#toggle-solution").style.display = "none";
    document.querySelector("#solution").style.display = "block";
});