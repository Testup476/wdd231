
export default function initFormHandler() {
    const form = document.getElementById('data-form')
    const popup = document.getElementById('popup');
    const okBtn = document.getElementById('ok-popup-btn');

    if (!form || !popup || !okBtn) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkVisibility()) {
            form.reportValidity();
            return;
        }

        const selectpayment = form.querySelector("input[name='gender']:checked");
        if (!selectpayment) {
            alert("Please select a payment method.");
            return;
        }
        popup.classList.add("active");
        popup.showModal();
    });

    okBtn.addEventListener('click', () => {
        popup.close();
        form.reset();
    })
}