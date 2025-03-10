import React, { forwardRef } from 'react'; // Import forwardRef
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 200px;
    background-color: ${props => props.theme.sidebarBackground};
    color: ${props => props.theme.textColor};
    padding: 20px;

    @media (max-width: 768px) {
        width: 60%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 100;
        overflow-y: auto;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
        transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
        transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 769px) {
        position: static;
        transform: translateX(0);
        transition: none;
    }
`;

const Logo = styled.h1`
    margin-bottom: 20px;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
`;

const NavItem = styled.li`
    margin-bottom: 10px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.textColor};
    display: block;
    padding: 8px 12px;
    border-radius: 5px;

    &:hover {
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.secondaryColor};
    }
`;

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {  // Use forwardRef
    return (
        <SidebarContainer isOpen={isOpen} ref={ref}>
            <Logo>Con10</Logo>
            <NavList>
                <NavItem>
                    <NavLink to="/captions" onClick={onClose}>Captions</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/video-script" onClick={onClose}>Video Script</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/repurpose" onClick={onClose}>Repurpose</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/paraphrase" onClick={onClose}>Paraphraser</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/summarize" onClick={onClose}>Summarizer</NavLink>
                </NavItem>
            </NavList>
        </SidebarContainer>
    );
});

Sidebar.displayName = 'Sidebar'; // Recommended for debugging

export default Sidebar;