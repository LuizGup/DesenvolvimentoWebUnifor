document.getElementById("toggleMenu").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.style.width = menu.style.width === "0px" ? "250px" : "0px";
});