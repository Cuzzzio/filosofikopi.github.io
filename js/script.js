// Toggle class active 
const navbarBar = document.querySelector ('.navbar-bar');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
navbarBar.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarBar.contains(e.target)) {
        navbarBar.classList.remove('active');
    }
});