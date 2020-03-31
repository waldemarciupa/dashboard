import styled, { css } from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.tertiary};
    width: ${({ width }) => width ? width : "220px"};
    height: 47px;
    border: none;
    border-radius: 50px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;

    ${({ secondary }) => {
        return (
            secondary && css`
            background-color: ${({ theme }) => theme.primary};
            width: 105px;
            height: 30px;
            font-size: 10px;
            color:  ${({ theme }) => theme.tertiary};

            `
        )
    }}
`

export default Button;