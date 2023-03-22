const menuBtn = document.querySelector(".nav_menu-bar");
const menuSmall = document.querySelector(".nav_menu_small");
const hero = document.querySelector(".hero_container");
const blurBg = document.querySelector(".blurbg");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

// console.log(blurBg.getPropertyValue("display"));
console.log(menuSmall);

menuBtn.addEventListener("click", (e) => {
  menuSmall.classList.toggle("show");
  blurBg.classList.toggle("show");
  openMenu.classList.toggle("remove");
  closeMenu.classList.toggle("show");
});
