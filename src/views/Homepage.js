import React, { useState, useEffect } from 'react';
import Covid from 'components/Covid.js';
import Weather from 'components/Weather';
import styled from 'styled-components';
import News from '../components/News';

const StyledWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10px;
`;

const StyledContent = styled.div`
  max-width: 95rem;
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.tertiary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const StyledApiWrapper = styled.div`
  & li {
    list-style: none;
  }
`;

const Countries = ({ countries, handleChange }) => {

  return (
    <>
      <select onChange={handleChange}>
        <option>World</option>
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
    </>
  )
}

const Homepage = () => {

  const [covid, setCovid] = useState({
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

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api/')
      .then(res => res.json())
      .then(res => setCovid({
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
      .catch(err => console.log(err)
      );
  }, [])

  const [countries, setCountries] = useState([])
  const [countryName, setCoutryName] = useState('World');

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
      .then(res => setCovid({
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

    setCoutryName(e.currentTarget.value);
  }



  return (
    <>
      <StyledWrapper>
        <StyledContent>
          <Covid covid={covid} setCovid={setCovid} countryName={countryName} />
          <Weather />
          {/* <Countries countries={countries} setCountries={setCountries} handleChange={handleChange} /> */}
          <News />
        </StyledContent>
      </StyledWrapper>
      <StyledFooter>
        <p>&copy; waldemarciupa 2020</p>
        <StyledApiWrapper>
          <p>Used API:</p>
          <ul>
            <li>
              <a target="blank" rel="noopener" href="https://openweathermap.org/">https://openweathermap.org</a>
            </li>
            <li>
              <a target="blank" rel="noopener" href="https://newsapi.org/">https://newsapi.org</a>
            </li>
            <li>
              <a target="blank" rel="noopener" href="https://github.com/mathdroid/covid-19-api">https://github.com/mathdroid/covid-19-api</a>
            </li>
          </ul>
        </StyledApiWrapper>
      </StyledFooter>
    </>
  )
}

export default Homepage;