

let currentIndex = 0;
let slides = [];
let autoSlideInterval;
export async function DataFetch(url) {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('No data To Fetch');
    }

    return data;
}

export function showSlide(index) {
    if (!slides.length) return;
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

export function changeSlide(direction) {
    showSlide(currentIndex + direction);
    RestartAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

export function RestartAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}


export function dataView(data) {

    data.forEach((elements, index) => {
        const eventcontainer = document.getElementById("eventsContainer");
        const slide = document.createElement('div');
        slide.className = `slide`;

        if (index === 0) slide.classList.add('active');
        slide.innerHTML = `
            <div class="event-info">
                <img src="${elements.image}" alt="${elements.title}"><hr>
                <p id="title">${elements.title}</p>
                <p><strong>Date</strong>: ${elements.date}</p>
                <p><strong>Location</strong>: ${elements.location}</p>
                <p>${elements.description}</p>
            </div>
        `;
        eventcontainer.appendChild(slide);
    });
    slides = document.querySelectorAll('.slide')
    showSlide(0);
    startAutoSlide();
}

export async function Displayweather(url) {

    const WeatherIcon = document.getElementById('iconweather');

    const intels = document.getElementById('intels');

    const description = document.createElement('div');

    const response = await fetch(url);
    const data = await response.json();
    const iconsource = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    WeatherIcon.setAttribute('src', iconsource);
    WeatherIcon.setAttribute('alt', data.weather[0].icon);

    description.innerHTML = `
            <p>Today</p><hr>
        <p>${data.main.temp}&deg;C</p>
        <p>${data.weather[0].description}</p><hr>     
    `;
    intels.innerHTML = ``;
    intels.appendChild(description);
}

export async function ForCast(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Weather fetch failed');
        }
        ForCastCard(data);
    } catch (error) {
        console.error('No data to fecth', error);
    }

}

function ForCastCard(data) {
    try {
        if (!data.list || !Array.isArray(data.list)) {
            throw new Error("data.list is missing or not an array.");
        }

        const current = document.getElementById('current-weather');

        // Garder uniquement les prévisions à midi
        const daysAtNoon = data.list.filter(item => item.dt_txt.includes("12:00:00"));

        const next3Days = daysAtNoon.slice(0, 3); // Les 3 jours suivants

        next3Days.forEach(day => {
            const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            const temp = Math.round(day.main.temp);
            const description = day.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="forecast-card">
                    <p>${date}</p>
                    <img src="${icon}" alt="${description}">
                    <p>${temp}°C - ${description}</p>
                </div>
            `;
            current.appendChild(card);


        });

    } catch (error) {
        console.error('Error building forecast cards:', error);
    }
}


export async function DisplaySpotlight(url) {

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new error('No data to fetch');
    }
    Card(data);
}

function Card(data) {
    const spot = document.getElementById('spotlight');
    spot.innerHTML = ""; // Nettoyer au cas où
    spot.classList.add('content');

    // Filtrer membres Gold ou Silver
    const filtered = data.filter(el => el.membership === "gold" || el.membership === "silver");

    // Mélanger aléatoirement
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Prendre 2 ou 3 membres
    const count = Math.floor(Math.random() * 2) + 2;
    const selected = shuffled.slice(0, count);

    selected.forEach(element => {
        const container = document.createElement('div');
        container.className = 'part';
        container.innerHTML = `
            <img src="${element.image}" alt="${element.company_name}" class="logo">
            <div class="info">
                <h3>${element.company_name}</h3>
                <p><strong>Phone:</strong> ${element.phone}</p>
                <p><strong>${element.address}</strong></p>
                <p><strong>Website:</strong> <a href="${element.website}" target="_blank">${element.website}</a></p>
                <p><strong>Membership:</strong> ${element.membership.toUpperCase()}</p>
            </div>
        `;

        spot.appendChild(container);
    });
}
