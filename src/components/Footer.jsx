import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
    background-color: ${props => props.theme.footerBackground};
    color: ${props => props.theme.textColor};
    padding: 30px 20px;
    text-align: center;
    border-top: 1px solid ${props => props.theme.borderColor};
`;

const FooterContent = styled.div`
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${props => props.theme.primaryColor};
`;

const Links = styled.div`
    margin: 15px 0;
    
    a {
        color: ${props => props.theme.textColor};
        text-decoration: none;
        margin: 0 15px;
        font-size: 16px;
        transition: color 0.3s;

        &:hover {
            color: ${props => props.theme.primaryColor};
        }
    }
`;

const SocialIcons = styled.div`
    margin: 15px 0;

    a {
        color: ${props => props.theme.textColor};
        font-size: 20px;
        margin: 0 10px;
        transition: color 0.3s;

        &:hover {
            color: ${props => props.theme.primaryColor};
        }
    }
`;

const Copyright = styled.p`
    font-size: 14px;
    margin-top: 15px;
    opacity: 0.7;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Logo>Con10 AI</Logo>

                <Links>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms</a>
                </Links>

                {/* <SocialIcons>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </SocialIcons> */}

                <Copyright>&copy; {new Date().getFullYear()} Con10 AI. All rights reserved.</Copyright>

                <i> <br />powered by AION</i>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
