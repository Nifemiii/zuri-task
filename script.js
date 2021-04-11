const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLink = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
});