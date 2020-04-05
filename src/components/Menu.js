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
    width: 26rem;
    padding: 20px 5px;
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 5px #ccc;
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 50px;
    height: 50px;
    margin: 20px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.tertiary};
`;

const StyledLinksList = styled.ul`
    list-style: none;
    margin-top: 10rem;
`;

const StyledClock = styled.span`
    margin-top: auto;
`

const active = {
    color: "grey",
}

const StyledNavLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    padding-bottom: 3rem;
    font-weight: 600;
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