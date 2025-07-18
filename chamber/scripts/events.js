import { DataFetch, dataView, Displayweather, DisplaySpotlight, ForCast } from "./Funtional.mjs";

document.addEventListener('DOMContentLoaded', async () => {


    const keyapi = `13eeceb063b83c69c194d0f010109db6`;
    const latitude = 16.76;
    const longitude = -3.00;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${keyapi}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=16.76&lon=-3&units=metric&appid=13eeceb063b83c69c194d0f010109db6`;

    const spoturl = `data/spotlight.json`;

    const dataurl = "data/eventdata.json";

    try {
        const events = await DataFetch(dataurl);
        dataView(events);
        Displayweather(url);
        DisplaySpotlight(spoturl);
        ForCast(forecastUrl);
    } catch (error) {
        console.error("Error While download Event", error);
    }
})