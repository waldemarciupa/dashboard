import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 10rem;
  background-color: #000;
  color: #e5127d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 525px) {
    display: block;
  }
`;

const StyledApiWrapper = styled.div`
  & li {
    list-style: none;
  }

  & a {
    color: #f68c2f;
  }
`;

const Footer = () => {
    return (
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
    )
}

export default Footer;
