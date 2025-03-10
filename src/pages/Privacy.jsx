import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
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

const PrivacyPolicy = () => {
    return (
        <PrivacyContainer>
            <Title>Privacy Policy</Title>

            <Section>
                <h2>1. Introduction</h2>
                <p>Welcome to Con10 AI. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
            </Section>

            <Section>
                <h2>2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li>Personal Information: Name, email address, phone number.</li>
                    <li>Usage Data: Information about how you interact with our website.</li>
                    <li>Cookies and Tracking: We use cookies to improve your experience.</li>
                </ul>
            </Section>

            <Section>
                <h2>3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide and improve our services.</li>
                    <li>Respond to customer inquiries and support requests.</li>
                    <li>Analyze usage trends to enhance user experience.</li>
                    <li>Comply with legal obligations.</li>
                </ul>
            </Section>

            <Section>
                <h2>4. Data Protection</h2>
                <p>We implement security measures to protect your personal data. However, no online service is 100% secure, so we cannot guarantee absolute security.</p>
            </Section>

            <Section>
                <h2>5. Third-Party Services</h2>
                <p>We may use third-party services (e.g., analytics, payment processors) that have their own privacy policies. We recommend reviewing their policies to understand how they handle your data.</p>
            </Section>

            <Section>
                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to your personal data.</li>
                    <li>Request corrections or deletions.</li>
                    <li>Opt-out of marketing communications.</li>
                </ul>
            </Section>

            <Section>
                <h2>7. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            </Section>

            <Section>
                <h2>8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p><strong>Email:</strong> support@textiq.org</p>
                <p><strong>Phone:</strong> +2348089009786</p>
            </Section>
        </PrivacyContainer>
    );
};

export default PrivacyPolicy;
