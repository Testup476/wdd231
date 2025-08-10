import renderCards from './cardRenderer.js';

export default function setupFilters(appartements, priceInput, warantInput, container) {
    /*WHEN THE USER ENTERS THE PRICE INPUT*/
    priceInput?.addEventListener('input', () => {
        const min = prixInput.value.trim() === '' ? 0 : Number(priceInput.value);
        if (!min) {
            renderCards(appartements, container);
            return;
        }

        const filtered = appartements.filter(app => app.prix_usd >= min && app.prix_usd < (min * 2));

        renderCards(filtered, container);
    });

    /*WHE THE USER MAY OR NOT ENTER A SPECIFIC WARANTY*/

    warantInput?.addEventListener('input', () => {
        const war = warantInput.value.trim() === '' ? 0 : Number(warantInput.value);

        if (!war) {
            renderCards(appartements, container);
            return;
        }

        const filtered = appartements.filter(app => app.garantie_mois >= war && app.garantie_mois < (war + 2));
        renderCards(filtered, container);
    });
}