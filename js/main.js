const menuBurger = document.querySelector('.menu-burger');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});