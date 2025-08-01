document.addEventListener('DOMContentLoaded', () => {

    async function FetctData(params) {
        const data = await fetch(params);

        if (!data.ok) {
            throw new Error('No data to fetch', data);
        }
        const response = await data.json();
        card(response)
    }

    function Showdetails(data) {
        const content = document.getElementById('modal-content');
        const modal = document.getElementById('modal-np');

        content.innerHTML = `
        <h1>detail</h1>
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <p>${data.detail}</p>
    `;

        modal.showModal();
    }


    function card(data) {
        const cardgrid = document.getElementById('cards-grid');
        data.forEach(elements => {
            const section = document.createElement('section')
            section.classList.add('card');
            section.innerHTML = `
            <div>${elements.name}</div>
           <figure>
            <img src="${elements.image}" alt="Botanic Garden">
           </figure>
           <address>${elements.address}</address>
         <p>${elements.description}</p>
         <button id="learn-more">Learn more</button>
          `;

            section.querySelector('#learn-more').addEventListener('click', () => Showdetails(elements));

            cardgrid.appendChild(section)

        });
    }
    const url = `./data/items.json`;

    FetctData(url);
})