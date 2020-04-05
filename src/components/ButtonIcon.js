import styled from 'styled-components';

const ButtonIcon = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    box-shadow: 
    0px 3px 5px -1px rgba(0,0,0,0.2), 
    0px 6px 10px 0px rgba(0,0,0,0.14), 
    0px 1px 18px 0px rgba(0,0,0,0.12);
    transition: all 0.4s ease 0s;

    &:hover {
        color: ${({ theme }) => theme.tertiary};
        background: ${({ theme }) => theme.primary};
    }
`;

export default ButtonIcon;