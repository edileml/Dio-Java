function changeMode() {
    changeClasses();
}
function changeClasses() {
    button.classList.toggle(darmodeclass);
    h1.classList.toggle(darmodeclass);
    body.classList.toggle(darmodeclass);
    footer.classList.toggle(darmodeclass);
}
function changeText(){
    const lightmode = "light mode";
    const darkmode = "dark mode";
    if(button.classList.contains(darmodeclass)) {
        button.innerHTML = "Light mode"
    }
}

const darmodeclass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByName('body')[0];
const footer = document.getElementsByName('footer')[0];

button.addEventListener('click', changeMode);