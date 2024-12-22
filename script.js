document.getElementById("searchBtn").onclick = function() {
    var secondpart = document.querySelector(".second-part");
    if (secondpart.style.display === "none") {
        secondpart.style.display = "block";
    } else {
        secondpart.style.display = "none";
    }
};

document.getElementById("seemoreBtn").onclick = function() {
    let morearticles = document.querySelector(".bonus-articles");
    if (morearticles.style.display === "none") {
        morearticles.style.display = "block";
    } 
}
