import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    align-items: center;
    padding: 3rem;
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
    min-width: 250px;
    min-height: 100px;
`;

const StyledTitle = styled.p`
    font-size: 2rem;
`;

const StyledContent = styled.p`
    padding-top: 10px; 
    color: ${({ color }) => color ? color : "#000"};
    font-size: 3rem;
`;

const Covid = ({ covid, setCovid, countryName }) => {

    if (!covid) return <h1>Loading...</h1>

    return (
        <StyledWrapper>

            <p>{countryName}</p>

            <StyledCard>
                <StyledTitle>Total infected: </StyledTitle>
                <StyledContent color="red">
                    {(covid.confirmed.value).toLocaleString()}
                </StyledContent>
            </StyledCard>
            <StyledCard>
                <StyledTitle>Total deaths: </StyledTitle>
                <StyledContent>
                    {(covid.deaths.value).toLocaleString()}
                </StyledContent>
            </StyledCard>
            <StyledCard>
                <StyledTitle>Total recovered: </StyledTitle>
                <StyledContent color="green">
                    {(covid.recovered.value).toLocaleString()}
                </StyledContent>
            </StyledCard>
        </StyledWrapper>
    )
}

export default Covid;