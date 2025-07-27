document.addEventListener('DOMContentLoaded', () => {

    const link = "./data/membershipL.json";

    async function Fetchdata(url) {
        const data = await fetch(url);

        if (!data.ok) {
            throw new Error('Fail to Fetch Data', data);
        }

        const response = await data.json();

        return await card(response);
    }

    window.showModal = function (descriptionArray) {
        const modal = document.getElementById('modal-np');
        const list = descriptionArray.map(item => `<li>${item}</li>`).join('');

        modal.innerHTML = `
        <ul>${list}</ul>
        <button class="modal" onclick="this.closest('dialog').close()">Close</button>
    `;
        modal.showModal();
    }


    function card(data) {
        const card = document.getElementById('cards');
        data.forEach(info => {
            const div = document.createElement('div');
            const descriptionParam = JSON.stringify(info.description);
            div.innerHTML = `
                <h2>${info.name}</h2>
                 <p>${info.subject}</p>
                 <a href="#" onclick='showModal(${descriptionParam}); return false;'>More info</a>
            `;
            card.appendChild(div);
        });
    }

    Fetchdata(link);

    // === FORM SUBMISSION LOGIC ===
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const fname = document.getElementById('firstname')?.value || "";
            const lname = document.getElementById('lastname')?.value || "";
            const orgt = document.getElementById('orgTitle')?.value || "";
            const email = document.getElementById('email')?.value || "";
            const phone = document.getElementById('phone')?.value || "";
            const orgn = document.getElementById('organization')?.value || "";
            const mbrl = document.getElementById('membership')?.value || "";
            const bd = document.getElementById('description')?.value || "";
            const date = new Date().toDateString();

            localStorage.setItem("from", JSON.stringify({
                fname, lname, orgt, email, phone, orgn, mbrl, bd, date
            }));

            window.location.href = "Thankyou.html";
        });
    }

    // === THANK YOU PAGE LOGIC ===
    if (window.location.pathname.includes("Thankyou.html")) {
        const data = JSON.parse(localStorage.getItem("form"));

        if (data) {
            const fnameEl = document.getElementById("fname");
            const lnameEl = document.getElementById("lname");
            const emailEl = document.getElementById("email");
            const mobileEl = document.getElementById("mobile");
            const businessEl = document.getElementById("business");
            const dateEl = document.getElementById("date");

            if (fnameEl) fnameEl.textContent = data.fname;
            if (lnameEl) lnameEl.textContent = data.lname;
            if (emailEl) emailEl.textContent = data.email;
            if (mobileEl) mobileEl.textContent = data.phone;
            if (businessEl) businessEl.textContent = data.orgn;
            if (dateEl) dateEl.textContent = data.date;
        } else {
            const thankContainer = document.querySelector(".thank-container");
            if (thankContainer) {
                thankContainer.innerHTML = "<h1>Something went wrong. No form data found.</h1>";
            }
        }
    }
})