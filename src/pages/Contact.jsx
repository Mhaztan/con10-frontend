import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 20px;
`;

const ContactInfo = styled.div`
    margin-bottom: 20px;
    text-align: center;

    p {
        font-size: 16px;
        line-height: 1.6;
    }

    strong {
        color: ${props => props.theme.primaryColor};
    }
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    input, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid ${props => props.theme.borderColor};
        border-radius: 5px;
        font-size: 16px;
        background: ${props => props.theme.inputBackground};
        color: ${props => props.theme.textColor};
        outline: none;
        transition: 0.3s;

        &:focus {
            border-color: ${props => props.theme.primaryColor};
        }
    }

    button {
        padding: 12px;
        background: ${props => props.theme.primaryColor};
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: 0.3s;

        &:hover {
            background: ${props => props.theme.buttonHover};
        }
    }
`;

const Contact = () => {

    return (
        <ContactContainer>
            <Title>Contact Us</Title>

            <ContactInfo>
                <p><strong>Email:</strong> support@textiq.org</p>
                <p><strong>Phone:</strong> +2348089009786</p>
                <p><strong>Address:</strong> Nigeria</p>
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
