import styled, { css } from 'styled-components';

const Input = styled.input`
    padding: 15px 30px;
    font-size: 1.6rem;
    font-weight: 300;
    background-color: ${({ theme }) => theme.tertiary};
    border: none;
    border-radius: 50px;

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.primary};
    }

    ${({ search }) =>
        search && css`
            font-size: 1rem;
            padding: 10px 20px 10px 40px;
            
        `
    }
`;

export default Input;