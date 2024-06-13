//MENU RESPONSIVE//

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("menu-visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("menu-visible");
})

//CAMBIAR A DARK MODE

const colorModeButton = document.querySelector("#dark-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor() {
  body.classList.toggle("dark-mode");
}
