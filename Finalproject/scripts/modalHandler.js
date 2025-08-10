
export  function showDetails(data) {
    const content = document.getElementById('content');
    const modal = document.getElementById('pop');

    if (!content || !modal) return;

    content.innerHTML = `
    <div id="head" class="header">
            <h2 id="ID1">${data.titre}</h2> 
            <button id="take" class="takebtt">prendre</button>
        </div>
        <p id="ID2"><strong>Number of bedrooms</strong> : ${data.chambres}</p>
        <p id="ID3"><strong>Number of bathrooms</strong> : ${data.salles_de_bain}</p>
        <p id="ID4"><strong>Area</strong> : ${data.superficie}</p>
        <p id="ID5"><strong>Location</strong> : ${data.localisation.ville}, ${data.localisation.quartier}</p>
        <p id="ID6"><strong>Price</strong> : ${data.prix_usd}</p>
        <p id="ID7"><strong>Security deposit (months)</strong> : ${data.garantie_mois}</p>
        <p>${data.amenities}</p>
    `;

    modal.showModal();

    document.getElementById('take').addEventListener('click', () => {
        const param = {};
        for (let i = 1; i <= 7; i++) {
            param[`id${i}`] = document.getElementById(`ID${i}`).textContent;
        }
        param.date = new Date().toLocaleDateString();

        localStorage.setItem("param", JSON.stringify(param));
        window.location.href = "payment.html";
    });
    
}