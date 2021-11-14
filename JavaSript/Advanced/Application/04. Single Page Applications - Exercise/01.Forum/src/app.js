import { showHome } from './home.js';

document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'Home': showHome
};

// Start application in home view
showHome();

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const view = sections[event.target.textContent];
        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
}