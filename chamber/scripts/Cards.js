
document.addEventListener('DOMContentLoaded', () => {

    const Cards = document.getElementById('membersContainer');

    fetch('chamber/data/members.json')
        .then(async (response) => {

            if (!response.ok) {
                throw new Error('No data found');

            }
            return await response.json();
        })
        .then(elements => {
            Cards.classList.add('Crd', 'grid-view'); // pour ne pas ecraser les classes.

            elements.forEach(elements => {
                const div = document.createElement('div');
                div.classList.add('card');

                div.innerHTML = `
                        <div class="Tagline">
                        <h3>${elements.name}</h3>
                        <p class="el">${elements.industry}</p><hr>
                        </div>
                        <img src="images/${elements.image}" alt="logo"" />
                         <p class="mail">Email: ${elements.email}</p>
                         <p class="PhoneN">Phone:${elements.phone}</p>
                        <p class="url>Url:<a href="${elements.website}" >${elements.website}</a></p>
                     `;
                Cards.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Fetch error :', error.message);
        });



    // Toggle view buttons
    document.getElementById("gridBtn").addEventListener("click", () => {
        Cards.classList.add("grid-view");
        Cards.classList.remove("list-view");
    });

    document.getElementById("listBtn").addEventListener("click", () => {
        Cards.classList.add("list-view");
        Cards.classList.remove("grid-view");
    });

})
