import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const API_key = '9e6406cf5fdb38d3be336d69086e660b';

const StyledWeatherCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    width: 100%;
`;

const StyledTemperature = styled.p`
    font-size: 2.6rem;
`;

const StyledCity = styled.p`
    font-size: 1.4rem;
`;

const Weather = () => {

    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(position => {
            setLong(position.coords.longitude)
            setLat(position.coords.latitude)
        }, (err) => {
            console.log(err);
        })

    }, [])

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

        if (lat.length === 0 || long.length === 0) return;

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
    }, [lat, long])

    if (!weather.icon) return '';

    return (
        <>
            <StyledWeatherCard>
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.desciption} />
                <StyledTemperature>{weather.temp}&deg;</StyledTemperature>
                <StyledCity>{weather.city}</StyledCity>
            </StyledWeatherCard>
        </>
    )
}

export default Weather;