import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Covid from 'components/Covid.js';
import Weather from 'components/Weather';
import News from 'components/News';
import Currency from 'components/Currency';
import Footer from 'components/Footer';

const StyledHomepageWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 15rem;
  grid-gap: 3rem;

  @media (max-width: 525px) {
    display: block;
  }
`;

const StyledMainContent = styled.div`

`;

const StyledSideContent = styled.div`
  
  @media (max-width: 525px) {
        margin: 3rem;
  }
`;



// const Countries = ({ countries, handleChange }) => {

//   return (
//     <>
//       <select onChange={handleChange}>
//         <option>World</option>
//         {
//           countries.map((e, i) => {
//             return (
//               <option
//                 key={i}
//                 value={e.ios3}>
//                 {e.name}
//               </option>
//             )
//           }
//           )
//         }
//       </select>
//     </>
//   )
// }

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

  // const [countries, setCountries] = useState([]);
  // const [countryName, setCoutryName] = useState('World');

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api/countries/')
      .then(res => res.json())
      // .then(res => setCountries(res.countries)
      // )
      .catch(err => console.log(err))
  }, [])

  // const handleChange = (e) => {

  //   fetch(`https://covid19.mathdro.id/api/countries/${e.currentTarget.value}`)
  //     .then(res => res.json())
  //     .then(res => setCovid({
  //       confirmed: {
  //         value: res.confirmed.value,
  //       },
  //       recovered: {
  //         value: res.recovered.value,
  //       },
  //       deaths: {
  //         value: res.deaths.value,
  //       },
  //     }))
  //     .catch(err => console.log(err))

  //   setCoutryName(e.currentTarget.value);
  // }



  return (
    <>
      <StyledHomepageWrapper>
        <StyledMainContent>
          <Covid covid={covid} setCovid={setCovid} />
          {/* countryName={countryName} to propsy do Covid */}
          {/* <Countries countries={countries} setCountries={setCountries} handleChange={handleChange} /> */}
          <News />
        </StyledMainContent>
        <StyledSideContent>
          <Weather />
          <Currency />
        </StyledSideContent>
      </StyledHomepageWrapper>
      <Footer />
    </>
  )
}

export default Homepage;