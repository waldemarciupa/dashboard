import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const Stats = () => {
  const [stats, setStats] = useState();

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api/')
      .then(res => res.json())
      .then(res => setStats(res))
      .catch(err => console.log(err)
      );
  }, [])

  if (!stats) return <h1>Loading...</h1>

  return (
    <>
      <h1>Total confirmed: {stats.confirmed.value}</h1>
      <h1>___</h1>
      <h1>Total deaths: {stats.deaths.value}</h1>
      <h1>___</h1>
      <h1>Total recovered: {stats.recovered.value}</h1>
    </>
  )

}

const Countries = () => {

  const [country, setCountry] = useState({
    confirmed: {
      value: ''
    },
    recovered: {
      value: ''
    },
    deaths: {
      value: ''
    }
  });
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api/countries/')
      .then(res => res.json())
      .then(res => setCountries(res.countries)
      )
      .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {

    fetch(`https://covid19.mathdro.id/api/countries/${e.currentTarget.value}`)
      .then(res => res.json())
      .then(res => setCountry({
        confirmed: {
          value: res.confirmed.value,
        },
        recovered: {
          value: res.recovered.value,
        },
        deaths: {
          value: res.deaths.value,
        },
      }))
      .catch(err => console.log(err))


  }


  return (
    <>
      <h3>Countries</h3>
      <select onChange={handleChange}>
        <option></option>
        {
          countries.map((e, i) => {
            return (
              <option
                key={i}
                value={e.ios3}>
                {e.name}
              </option>
            )
          }
          )
        }
      </select>
      <p>Confirmed: {country.confirmed.value}</p>
      <p>Deaths: {country.deaths.value}</p>
      <p>Recovered: {country.recovered.value}</p>
    </>
  )
}

const Homepage = () => {

  return (
    <>
      <Stats />
      <Countries />
      <StyledFooter>
        <p>The data changes dynamically, so it may be out of date when displayed. Data API provided by <a target="blank" rel="noopener" href="https://github.com/mathdroid/covid-19-api">Mathdroid</a>.</p>
      </StyledFooter>
    </>
  )
}

export default Homepage;