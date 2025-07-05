
document.addEventListener('DOMContentLoaded', () => {
    const bttnav = document.querySelector("#hamburger");
    const navar = document.querySelector("#navbar");

    bttnav.addEventListener('click', () => {
        bttnav.classList.toggle('active');
        navar.classList.toggle('active');
    })
});