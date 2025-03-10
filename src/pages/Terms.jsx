import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
    max-width: 900px;
    margin: 50px auto;
    padding: 30px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    line-height: 1.8;
`;

const Title = styled.h1`
    text-align: center;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 20px;
`;

const Section = styled.div`
    margin-bottom: 20px;

    h2 {
        color: ${props => props.theme.primaryColor};
        font-size: 20px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
    }
`;

const TermsOfService = () => {
    return (
        <TermsContainer>
            <Title>Terms of Service</Title>

            <Section>
                <h2>1. Introduction</h2>
                <p>Welcome to Con10 AI. By using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our platform.</p>
            </Section>

            <Section>
                <h2>2. Use of Our Services</h2>
                <p>By accessing Con10 AI, you agree that you will:</p>
                <ul>
                    <li>Use our platform only for lawful purposes.</li>
                    <li>Not attempt to hack, disrupt, or abuse the service.</li>
                    <li>Follow all applicable laws and regulations.</li>
                </ul>
            </Section>

            <Section>
                <h2>3. User Accounts</h2>
                <p>If you create an account with us, you are responsible for maintaining the security of your account credentials. We are not liable for any unauthorized access due to your failure to protect your account details.</p>
            </Section>

            <Section>
                <h2>4. Intellectual Property</h2>
                <p>All content, trademarks, and data provided by Con10 AI are owned by or licensed to us. You may not copy, distribute, or modify any content without our written permission.</p>
            </Section>

            <Section>
                <h2>5. Termination of Services</h2>
                <p>We reserve the right to suspend or terminate access to our platform if you violate these terms or misuse our services.</p>
            </Section>

            <Section>
                <h2>6. Limitation of Liability</h2>
                <p>We are not liable for any indirect, incidental, or consequential damages resulting from your use of our platform.</p>
            </Section>

            <Section>
                <h2>7. Changes to Terms</h2>
                <p>We may update these Terms of Service at any time. Continued use of our platform after changes means you accept the new terms.</p>
            </Section>

            <Section>
                <h2>8. Contact Us</h2>
                <p>If you have any questions about these Terms, contact us at:</p>
                <p><strong>Email:</strong> support@textiq.org</p>
                <p><strong>Phone:</strong> +2348089009786</p>
            </Section>
        </TermsContainer>
    );
};

export default TermsOfService;
