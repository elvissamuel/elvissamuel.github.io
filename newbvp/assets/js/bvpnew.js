var navBar = document.querySelector('.navigation__bar');
var menu2 = document.querySelector('.menu2');

navBar.addEventListener('click', function(e){
    menu2.classList.toggle('show');
})