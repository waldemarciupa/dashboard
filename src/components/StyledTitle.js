import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
    margin: 10px auto;
    font-size: 2rem;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;

    &:before {
        content: '';
        height: 10px;
        display: block;
        background: linear-gradient(to left, ${({ theme }) => theme.tertiary}, transparent);
    }

    &:after {
        content: '';
        height: 10px;
        display: block;
        background: linear-gradient(to right, ${({ theme }) => theme.tertiary}, transparent);
    }
`;

export default StyledTitle;