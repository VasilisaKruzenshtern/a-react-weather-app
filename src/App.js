import React, { useState } from "react";
import axios from "axios";


export default function App() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Введіть місто..." onChange={updateCity} />
            <button className="btn w-40" type="Submit">Пошук</button>
        </form>
    );

    if (loaded) {
        return (
            <div>
                {form}
                <ul>
                    <li>{Math.round(weather.temperature)}°C</li>
                    <li>{weather.description}</li><br/>
                    <li>Вологість: {weather.humidity}%</li>
                    <li>Вітер: {weather.wind}km/h</li>
                    <li>
                        <img src={weather.icon} alt={weather.description} />
                    </li>
                </ul>

            </div>
        );
    } else {
        return form;
    }
}