import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    max-width: 900px;
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

const Section = styled.div`
    margin-bottom: 20px;

    h2 {
        color: ${props => props.theme.primaryColor};
        font-size: 22px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        line-height: 1.6;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <Title>About Con10 AI</Title>

            <Section>
                <h2>Who We Are</h2>
                <p>Con10 AI is an advanced AI-powered content creation platform designed to help creators, marketers, and businesses generate high-quality content effortlessly. Whether you need engaging captions, repurposed content, paraphrased text, or compelling video scripts, our AI delivers results tailored to your needs.</p>
            </Section>

            <Section>
                <h2>What We Do</h2>
                <p>We leverage cutting-edge AI technology to provide tools that enhance content creation. Our platform offers:</p>
                <ul>
                    <li><strong>AI Caption & Hashtag Generator:</strong> Instantly craft engaging social media captions with relevant hashtags.</li>
                    <li><strong>AI Video Script Generator:</strong> Generate structured, compelling video scripts for YouTube, TikTok, and more.</li>
                    <li><strong>AI Content Repurposer:</strong> Transform existing content into different formats, adapting it for various platforms.</li>
                    <li><strong>AI Paraphraser:</strong> Rewrite text while maintaining its original meaning, perfect for avoiding plagiarism.</li>
                    <li><strong>AI Summarizer:</strong> Condense long-form content into clear, concise summaries.</li>
                </ul>
            </Section>

            <Section>
                <h2>Why Choose Us?</h2>
                <p>At Con10 AI, we focus on efficiency, creativity, and user-friendliness. Our AI tools save time, improve content quality, and help you maintain a consistent brand voice. Whether you're a content creator, business owner, or social media manager, our AI solutions streamline your workflow.</p>
            </Section>

            <Section>
                <h2>Get in Touch</h2>
                <p>Have questions or need support? Contact us at:</p>
                <ul>
                    <li><strong>Email:</strong> support@textiq.org</li>
                    <li><strong>Phone:</strong> +2348089009786</li>
                    <li><strong>Address:</strong> Nigeria</li>
                </ul>
            </Section>
        </AboutContainer>
    );
};

export default About;
