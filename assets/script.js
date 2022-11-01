let menu = document.getElementsByClassName("menu-items")[0];
let checkbox = document.getElementById("toggle");
var voltarHome = document.getElementById("fab");

function mostrarBotao() {
    voltarHome.style.display = "block";
}

function input() {
    checkbox.checked = false;
}

window.onscroll = mostrarBotao;
menu.addEventListener('click', input);
