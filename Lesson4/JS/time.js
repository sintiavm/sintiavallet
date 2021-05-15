let updateLast = document.lastModified
document.getElementById('lastUpdate').innerText = updateLast
let fullYear = new Date().getFullYear();
document.getElementById("year").innerHTML = fullYear;

function toggleMenu()  {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}