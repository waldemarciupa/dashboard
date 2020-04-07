import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_key = '9e6406cf5fdb38d3be336d69086e660b';

let long;
let lat;

navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
})

const StyledWeatherCard = styled.div`
    /* position: fixed; */
    /* top: 10px; */
    /* right: 10px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(#c21500, #ffc500);
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px #ccc;
    width: 100%;
    height: 180px;
`;

const StyledTemperature = styled.p`
    font-size: 2rem;
`;

const StyledDescription = styled.p`
    font-size: 1.2rem;
`;

const StyledCity = styled.p`
    font-size: 1.4rem;
`;

const Weather = () => {

    const kelvin = 273.15;

    const calculateToCelscius = (temp) => {
        const celsius = Math.floor(temp - kelvin);
        return celsius;
    };

    const [weather, setWeather] = useState({
        city: '',
        temp: '',
        temp_min: '',
        temp_max: '',
        desciption: '',
        icon: '',
        sunrise: '',
        sunset: ''

    });

    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`)
            .then(res => res.json())
            .then(res =>
                setWeather({
                    city: res.name,
                    temp: calculateToCelscius(res.main.temp),
                    temp_min: calculateToCelscius(res.main.temp_min),
                    temp_max: calculateToCelscius(res.main.temp_max),
                    desciption: res.weather[0].description,
                    icon: res.weather[0].icon,
                    sunrise: res.sys.sunrise,
                    sunset: res.sys.sunset
                }),
            )
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <StyledWeatherCard>
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.desciption} />
                {weather.temp ? <StyledTemperature>{weather.temp}&deg;C</StyledTemperature> : <h1>Error</h1>}
                <StyledDescription>{weather.desciption}</StyledDescription>
                <StyledCity>{weather.city}</StyledCity>
            </StyledWeatherCard>
        </>
    )
}

export default Weather;