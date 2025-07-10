
document.addEventListener('DOMContentLoaded', () => {

    fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('There is an issue');
            }

            return await response.json();
        })
        .then(data => {
            const Cards = document.getElementById('cards');

            data.prophets.forEach(element => {
                const card = document.createElement('div');
                card.className = 'Box';
                card.innerHTML = `<div class="name">${element.name} ${element.lastname}</div>
                                                <div class="Birth">
                                                    <div>Date of Bith: ${element.birthdate}</div>
                                                    <div>Place of Birth ${element.birthplace}</div>
                                                </div>
                                    <img src='${element.imageurl}' width=10%,>
                                    `;
                Cards.appendChild(card);
            })
        })
})