const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

//TO-DO pendiente el cierre de los menus cuando se de click en la seccion main de la página
// body.addEventListener('click', closeMenus);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function closeMenus() {
  aside.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('slide-right');
}

function toggleDesktopMenu() {
  aside.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('slide-right');
}
function toggleCartAside() {
  mobileMenu.classList.add('slide-right');
  desktopMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
}