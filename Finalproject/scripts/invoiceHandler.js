
export default function initInvoiceHandle() {
    if (!window.location.pathname.includes('payment.html')) return;

    const data = JSON.parse(localStorage.getItem('param'));

    if (data) {
        const fields = {
            categorie: data.id1,
            chambre: data.id2,
            salle: data.id3,
            supp: data.id4,
            location: data.id5,
            prix: data.id6,
            warrent: data.id7
        };

        Object.entries(fields).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });

    } else {
        const popup = document.querySelector('.form-content');

        if (popup) {
            popup.innerHTML = "<h1>Something went wrong. No form data found</h1>";
        }
    }
}