function schimbaculoarea() {
    let paragraf = document.getElementById("culoare")
    if (paragraf.style.color === "red") {
        paragraf.style.color = "blue";
    if (paragraf.style.color === "blue") {
        paragraf.style.color = "green";
    } else {
        paragraf.style.color = "red";
    }
}