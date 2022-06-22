let menu = document.getElementsByClassName("menu-items")[0];
let checkbox = document.getElementById("toggle");

function input() {
    checkbox.checked = false;
}

menu.addEventListener('click', input);
