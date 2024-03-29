function changeMode () {
    changeClass();
    changeText();
}

function changeClass () {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    social.classList.toggle(darkModeClass);
}

function changeText () {
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
    } else {
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
    } 
    return;
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('modo-selector');
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const social = document.getElementById('social-media');

button.addEventListener('click', changeMode)