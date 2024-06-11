const button = document.getElementById('dark-mode');
const darkMode = document.body;

button.addEventListener('click', function(){
    darkMode.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});