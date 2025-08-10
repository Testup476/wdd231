
import fetchAppartements from './dataService.js';
import renderCards from './cardRenderer.js';
import setupFilters from './filters.js'
import initFormHandler from './formHandler.js'
import initInvoiceHandler from './invoiceHandler.js';


document.addEventListener('DOMContentLoaded', async () => {

    console.log('payment.js (modular) loaded');
    initFormHandler();
    initInvoiceHandler();

    const url = './data/appartements_categories.json';
    const container = document.getElementById('section-product');
    const prevBtn = document.getElementById('preview');
    const nextBtn = document.getElementById('nxt');
    const prixMinInput = document.getElementById('prix-min');
    const warantInput = document.getElementById('warrent');

    try {

        const appartements = await fetchAppartements(url);
        renderCards(appartements, container);
        setupFilters(appartements, prixMinInput, warantInput, container);

        nextBtn?.addEventListener('click', () => {
            container.scrollBy({ left: 450, behavior: 'smooth' });
        });

        prevBtn?.addEventListener('click', () => {
            container.scrollBy({ left: -450, behavior: 'smooth' });
        });


    } catch (error) {
        console.log(error);
    }
})