const button = document.getElementById('dark-mode');
const darkMode = document.body;

button.addEventListener('click', function(){
    darkMode.classList.toggle('dark-mode');
});
