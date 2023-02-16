const menu = document.querySelector('.nav-menu-small');
const menuBar = document.querySelector('.nav_menu-bar');

menuBar.addEventListener('click', (e) =>{
    menu.classList.toggle('show');
})