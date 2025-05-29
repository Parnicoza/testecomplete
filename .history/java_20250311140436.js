function schimbaculoarea() {
    let paragraf = document.getElementById("culoare")
    if (paragraf.style.color === "red") {
        paragraf.style.color = "blue" ;
    } else if (paragraf.style.color === "blue") {
        paragraf.style.color = "green";
    } else if (paragraf.style.color === "green") {
        paragraf.style.color = "yellow";
    } else {
        paragraf.style.color = "red";
    }
    paragraf.style.transition = "color 0.5s ease";
}