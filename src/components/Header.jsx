
import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/logo.png';

const HeaderContainer = styled.header`
    background-color: ${props => props.theme.headerBackground};
    color: ${props => props.theme.textColor};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100; /* Stay on top of other elements */
    border-bottom: 1px solid ${props => props.theme.borderColor};

    @media (max-width: 768px) {
        flex-direction: row; /* Display items in a row */
        justify-content: space-between; /* Space items evenly */
        align-items: center; /* Align items vertically */
    }
`;

const Title = styled.h1`
    margin: 0;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    font-size: 20px;
    cursor: pointer;
    display: none; /* Hide by default on larger screens */

    @media (max-width: 768px) {
        display: block; /* Show on smaller screens */
    }
`;

const Header = ({ theme, toggleTheme, toggleSidebar }) => {
    return (
        <HeaderContainer>
            <MenuButton onClick={toggleSidebar}>☰</MenuButton>
            {/* <Title>{title}</Title> */}
            <img src={Logo} alt="Con10" width="100" /> {/* Logo */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </HeaderContainer>
    );
};

export default Header;