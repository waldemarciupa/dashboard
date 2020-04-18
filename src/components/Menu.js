import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Clock from 'components/Clock';
import DashboardIcon from '@material-ui/icons/Dashboard';

const StyledWrapper = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 20rem;
    padding: 2rem .5rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* box-shadow: 0 2px 5px #ccc; */
    border-right: 1px solid #333333;

    @media (max-width: 768px) {
        z-index: 1;
        height: 7rem;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #333333;
        padding-right: 1rem;
    }
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
`;

const StyledLinksList = styled.ul`
    list-style: none;
    margin-top: 10rem;

    @media (max-width: 768px) {
        margin: 0;
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        /* display: none; */
        position: fixed;
        top: 7rem;
        left: 0;
        background: black;
        width: 100vw;
    }
`;

const StyledClock = styled.span`
    margin-top: auto;
    font-size: 1.6rem;

    @media (max-width: 768px) {
        display: none;
    }
`

const active = {
    color: "#e5127d",
}

const StyledNavLink = styled(NavLink)`
    display: block;
    padding-bottom: 3rem;
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: .2rem;

`;

const Hamburger = styled.button`
    padding: 10px;
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin: 0;

    @media (max-width: 768px) {
        display: inline-block;
    }
`;

const HamburgerBox = styled.span`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`;

const HamburgerInner = styled.span`
    width: 100%;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .1s .2s ease-in-out;

    &:before,
    &:after {
        width: 100%;
        height: 3px;
        background-color: white;
        position: absolute;
    content: '';
        left: 0;
        transition: transform .2s .2s ease-in-out;
    }

    &:before {
        top: -10px;
    }

    &:after {
        top: 10px;
    }

`;


const Menu = () => {

    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    return (
        <StyledWrapper>
            <StyledLogoLink onClick={handleClick} to="/dashboard/" >
                <DashboardIcon style={{ fontSize: "5rem" }} />
            </StyledLogoLink>
            <Hamburger onClick={handleClick}>
                <HamburgerBox on>
                    <HamburgerInner />
                </HamburgerBox>
            </Hamburger>
            {menu ? <StyledLinksList>
                <li>
                    <StyledNavLink onClick={handleClick} exact to='/dashboard/' activeStyle={active}>Homepage</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink onClick={handleClick} to='/notes' activeStyle={active}>Notes</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink onClick={handleClick} to='/weather' activeStyle={active}>Weather</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink onClick={handleClick} to='/currencies' activeStyle={active}>Currencies</StyledNavLink>
                </li>
            </StyledLinksList> : null}
            <StyledClock>
                <Clock />
            </StyledClock>
        </StyledWrapper>
    )
}

export default Menu;