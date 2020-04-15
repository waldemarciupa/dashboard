import React, { useState, useEffect } from 'react';
import Covid from 'components/Covid.js';
import Weather from 'components/Weather';
import styled from 'styled-components';
import News from 'components/News';
import Currency from 'components/Currency';
import Button from 'components/Button';

const StyledHomepageWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 15rem;
  grid-gap: 3rem;
`;

const StyledMainContent = styled.div`

`;

const StyledSideContent = styled.div`
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 10rem;
  background-color: #000;
  color: #e5127d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const StyledApiWrapper = styled.div`
  & li {
    list-style: none;
  }

  & a {
    color: #f68c2f;
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

  const [countries, setCountries] = useState([]);
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
      <StyledHomepageWrapper>
        <StyledMainContent>
          <Covid covid={covid} setCovid={setCovid} countryName={countryName} />
          {/* <Countries countries={countries} setCountries={setCountries} handleChange={handleChange} /> */}
          <News />
        </StyledMainContent>
        <StyledSideContent>
          <Weather />
          <Currency />
        </StyledSideContent>
      </StyledHomepageWrapper>
      <StyledFooter>
        <p>&copy; waldemarciupa 2020</p>
        <StyledApiWrapper>
          <p>Used APIs:</p>
          <ul>
            <li>
              <a target="blank" rel="noopener" href="https://openweathermap.org/">openweathermap.org</a>
            </li>
            <li>
              <a target="blank" rel="noopener" href="https://newsapi.org/">newsapi.org</a>
            </li>
            <li>
              <a target="blank" rel="noopener" href="https://github.com/mathdroid/covid-19-api">mathdroid/covid-19-api</a>
            </li>
            <li>
              <a target="blank" rel="noopener" href="https://https://api.nbp.pl/">NBP Web API</a>
            </li>
          </ul>
        </StyledApiWrapper>
      </StyledFooter>
    </>
  )
}

export default Homepage;