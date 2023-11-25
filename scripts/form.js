let form = document.querySelector('form');

form.onsubmit = (ev) => {
    ev.preventDefault();
    window.location.replace('../pages/main.html');
}