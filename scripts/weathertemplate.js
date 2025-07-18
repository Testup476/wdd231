document.addEventListener('DOMContentLoaded', () => {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    const apikey = `13eeceb063b83c69c194d0f010109db6`;
    const latitude = 49.74;
    const longitude = 6.63;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;

    async function apifetch() {
        try {
            const respons = await fetch(url);
            if (!respons.ok) {
                throw new respons.error('No Data to fetch', await respons.text());
            }
            const data = await respons.json();
            // renderdatat(data);
            displayResults(data);
            console.log(data);


        } catch (error) {
            console.log(error);
        }

    }

    function displayResults(data) {
        captionDesc.innerHTML = data.weather[0].description;
        currentTemp.innerHTML = `${data.main.temp}&deg;C`;
        const iconsource = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherIcon.setAttribute('src', iconsource);
        weatherIcon.setAttribute('alt', data.weather[0].icon);
    }


    apifetch();


})