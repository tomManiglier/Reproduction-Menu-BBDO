const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('menu-active');
});