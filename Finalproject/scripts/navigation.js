
document.addEventListener('DOMContentLoaded', () => {
    const bttnav = document.querySelector("#humburger");
    const navar = document.querySelector(".navigation"); // corriger ici

    bttnav.addEventListener('click', () => {
        bttnav.classList.toggle('show');
        navar.classList.toggle('show');
    });
});
