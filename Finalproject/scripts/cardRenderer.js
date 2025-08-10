import { showDetails } from './modalHandler.js';


export default function renderCards(data, container) {

    if (!container) return;

    container.innerHTNL = "";

    data.forEach((element, index) => {
        const div = document.createElement('div');
        div.classList = 'Container';

        div.innerHTML = `
        <div class="card-image">
                <div class="product-image">
                    <img src="${element.photos[0]}" class="tumb" alt="product" loading="lazy">
                    <button class="read-more" data-index="${index}">Read More</button>
                </div>
                <div class="pro-info">
                    <h3 class="brand">${element.titre}</h3>
                    <p class="short-description">${element.description}</p>
                    <span class="price">$${element.prix_usd}</span><br>
                    <span class="garantie">Security deposit (months): ${element.garantie_mois}</span>
                </div>
            </div>

        `;
        div.querySelector('.read-more').addEventListener('click', () => {
            showDetails(element)
        });

        container.appendChild(div);
    })
}