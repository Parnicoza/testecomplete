function schimbaculoarea() {
    let paragraf = document.getElementById("culoare")
    if (paragraf.style.color === "red") {
        paragraf.style.color = "blue";
    } else {
        paragraf.style.color = "red";
    }
}