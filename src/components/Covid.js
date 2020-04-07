import React from 'react';
import styled from 'styled-components';
import StyledTitle from 'components/StyledTitle.js';

const StyledCovidWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 3rem;
    align-items: center;
    font-weight: 700;
`;

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px #ccc;
    min-height: 100px;
`;

const StyledCardTitle = styled.p`
    font-size: 1.8rem;
`;

const StyledContent = styled.p`
    padding-top: 10px; 
    color: ${({ color }) => color ? color : "#000"};
    font-size: 2rem;
`;

const Covid = ({ covid, setCovid, countryName }) => {

    if (!covid) return <h1>Loading...</h1>

    return (
        <>
            <StyledTitle>Coronavirus pandemic</StyledTitle>
            {/* <p>The data changes dynamically, so it may be out of date when displayed. Data API provided by <a target="blank" rel="noopener" href="https://github.com/mathdroid/covid-19-api">Mathdroid</a>.</p> */}
            <StyledCovidWrapper>

                {/* <p>{countryName}</p> */}

                <StyledCard>
                    <StyledCardTitle>Total infected: </StyledCardTitle>
                    <StyledContent color="red">
                        {(covid.confirmed.value).toLocaleString()}
                    </StyledContent>
                </StyledCard>
                <StyledCard>
                    <StyledCardTitle>Total deaths: </StyledCardTitle>
                    <StyledContent>
                        {(covid.deaths.value).toLocaleString()}
                    </StyledContent>
                </StyledCard>
                <StyledCard>
                    <StyledCardTitle>Total recovered: </StyledCardTitle>
                    <StyledContent color="green">
                        {(covid.recovered.value).toLocaleString()}
                    </StyledContent>
                </StyledCard>
            </StyledCovidWrapper>
        </>
    )
}

export default Covid;