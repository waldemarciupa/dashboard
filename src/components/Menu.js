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
    padding: 20px 5px;
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.primary};
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
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
`;

const StyledClock = styled.span`
    margin-top: auto;
`

const active = {
    fontWeight: "600",
    color: "red",
}

const Menu = () => {
    return (
        <StyledWrapper>
            <StyledLogoLink to="/" >
                <DashboardIcon style={{ fontSize: "5rem" }} />
            </StyledLogoLink>
            <StyledLinksList>
                <li>
                    <NavLink exact to='/' activeStyle={active}>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to='/notes' activeStyle={active}>Notes</NavLink>
                </li>
                <li>
                    <NavLink to='/weather' activeStyle={active}>Weather</NavLink>
                </li>
                <li>
                    <NavLink to='/currencies' activeStyle={active}>Currencies</NavLink>
                </li>
            </StyledLinksList>
            <StyledClock>
                <Clock />
            </StyledClock>
        </StyledWrapper>
    )
}

export default Menu;