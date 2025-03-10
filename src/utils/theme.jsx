import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#FFFFFF',
    textColor: '#000000',
    headerBackground: '#f0f0f0',
    footerBackground: '#f0f0f0',
    sidebarBackground: '#f0f0f0',
    responseBackground: '#f9f9f9',
    inputBackground: '#ffffff',
    borderColor: '#cccccc',
    primaryColor: '#007bff',
    secondaryColor: '#ffffff',
};

export const darkTheme = {
    body: '#121212',
    textColor: '#FFFFFF',
    headerBackground: '#212121',
    footerBackground: '#212121',
    sidebarBackground: '#212121',
    responseBackground: '#333333',
    inputBackground: '#424242',
    borderColor: '#666666',
    primaryColor: '#bb86fc',
    secondaryColor: '#000000',
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.textColor};
        transition: all 0.50s linear;
    }

    textarea,
    input,
    select {
        background: ${props => props.theme.inputBackground};
        color: ${props => props.theme.textColor};
        border: 1px solid ${props => props.theme.borderColor};
    }
`;