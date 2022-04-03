const element = document.getElementById('errorBox');
const span = element.querySelector('span');

export function notify(message) {
    span.textContent = message;
    element.style.display = 'block';

    setTimeout(() => element.style.display = 'none', 3000);
}