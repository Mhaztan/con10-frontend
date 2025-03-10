import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    background-color: ${props => props.theme.responseBackground};
    color: ${props => props.theme.textColor};
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ErrorTitle = styled.h1`
    font-size: 2.5em;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
    font-size: 1.2em;
    margin-bottom: 30px;
`;

const HomeLink = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.primaryColor};
        opacity: 0.8;
    }
`;

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>Oops! Something went wrong.</ErrorTitle>
            <ErrorMessage>
                It seems you're using an ad blocker, which prevents access to this AI tool.
                To continue, please disable your ad blocker and refresh the page.
            </ErrorMessage>
            <HomeLink to="/">Go back to homepage</HomeLink>
        </ErrorContainer>
    );
};

export default ErrorPage;