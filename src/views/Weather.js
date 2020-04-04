import React, { useState, useEffect } from 'react';

const API_key = '9e6406cf5fdb38d3be336d69086e660b';

let long;
let lat;

navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

})

const Weather = () => {

    useEffect(() => {
        console.log('fetch');
        console.log(lat, long);

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Weather</h1>
            <h2>Location</h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>

        </>
    )
}

export default Weather;