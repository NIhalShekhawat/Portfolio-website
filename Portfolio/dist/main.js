const menuBtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menu = document.querySelector(".menu");
const navItem = document.querySelectorAll(".nav-item");

//Set initial state of the menu

let showMenu = false;

menuBtn.addEventListener("click", togleMenu);

function togleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    menu.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    menu.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
