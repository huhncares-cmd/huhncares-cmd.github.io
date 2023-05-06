function deactivateAllSections() {
    document.querySelectorAll(".section").forEach(function(section) {
        section.classList.remove("active");
    });
}

function activateSection(section) {
    document.querySelector("h1").innerHTML = select[select.value].text;
    deactivateAllSections();
    if (select.value == 0) {
        document.querySelector("#s0").classList.add("active");
    } else if (select.value == 1) {
        document.querySelector("#s1").classList.add("active");
    } else if (select.value == 2) {
        document.querySelector("#s2").classList.add("active");
    } else if (select.value == 3) {
        document.querySelector("#s3").classList.add("active");
    } else if (select.value == 4) {
        document.querySelector("#s4").classList.add("active");
    }
}

let select = document.querySelector("#datasetSelector");
activateSection();
select.addEventListener("change", function() {
    deactivateAllSections();
    activateSection();
});