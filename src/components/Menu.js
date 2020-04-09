import React from 'react';
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
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 50px;
    height: 50px;
    margin: 20px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
`;

const StyledLinksList = styled.ul`
    list-style: none;
    margin-top: 10rem;
`;

const StyledClock = styled.span`
    margin-top: auto;
    font-size: 1.6rem;
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

const Menu = () => {
    return (
        <StyledWrapper>
            <StyledLogoLink to="/dashboard/" >
                <DashboardIcon style={{ fontSize: "5rem" }} />
            </StyledLogoLink>
            <StyledLinksList>
                <li>
                    <StyledNavLink exact to='/dashboard/' activeStyle={active}>Homepage</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/notes' activeStyle={active}>Notes</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/weather' activeStyle={active}>Weather</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/currencies' activeStyle={active}>Currencies</StyledNavLink>
                </li>
            </StyledLinksList>
            <StyledClock>
                <Clock />
            </StyledClock>
        </StyledWrapper>
    )
}

export default Menu;