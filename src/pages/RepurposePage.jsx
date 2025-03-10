import React, { useState } from 'react';
import styled from 'styled-components';
import ContentForm from '../components/ContentForm';
import AiResponse from '../components/AiResponse';
import LoadingSpinner from '../components/LoadingSpinner';
import { repurposeContent } from '../utils/api';

// Styled Components
const PageContainer = styled.div`
    max-width: 700px;
    margin: 50px auto;
    padding: 30px;
    background-color: ${(props) => props.theme.responseBackground};
    color: ${(props) => props.theme.textColor};
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    }
`;

const Title = styled.h2`
    font-size: 24px;
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 20px;
`;

// Styled Form
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

const TextArea = styled.textarea`
    width: 100%;
    min-height: 150px;
    padding: 12px;
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 8px;
    font-size: 16px;
    resize: vertical;
    background-color: ${(props) => props.theme.inputBackground};
    color: ${(props) => props.theme.textColor};
    transition: all 0.3s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.primaryColor};
        box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.2);
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 12px;
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 8px;
    font-size: 16px;
    background-color: ${(props) => props.theme.inputBackground};
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.primaryColor};
        box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.2);
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.primaryColor};
        opacity: 0.85;
    }
`;

const FormatSuggestions = styled.div`
    width: 100%;
    text-align: left;
    font-size: 14px;
    margin-top: 5px;
    color: ${(props) => props.theme.textColor};
    
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 5px 0;
        font-size: 14px;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
`;

const ResponseContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.inputBackground};
    border: 1px solid ${(props) => props.theme.borderColor};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

// Component Logic
const RepurposePage = () => {
    const [content, setContent] = useState('');
    const [format, setFormat] = useState('Blog Post');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await repurposeContent(content, format);
            setResponse(data.result);
        } catch (error) {
            console.error("Error repurposing content:", error);
            setResponse("Error repurposing content. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageContainer>
            <Title>AI Content Repurposer</Title>
            <Form onSubmit={handleSubmit}>
                <TextArea
                    placeholder="Paste or type your content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <Select value={format} onChange={(e) => setFormat(e.target.value)}>
                    <option value="Blog Post">Blog Post</option>
                    <option value="Twitter Thread">Twitter Thread</option>
                    <option value="LinkedIn Post">LinkedIn Post</option>
                    <option value="Instagram Caption">Instagram Caption</option>
                    <option value="YouTube Video Script">YouTube Video Script</option>
                </Select>

                {/* Format Suggestions */}
                <FormatSuggestions>
                    <strong>🔹 Suggested Formats:</strong>
                    <ul>
                        <li>📖 Blog Post - Well-structured, SEO-friendly long-form content.</li>
                        <li>🐦 Twitter Thread - Short, engaging tweets in a thread.</li>
                        <li>💼 LinkedIn Post - Professional, value-driven content.</li>
                        <li>📸 Instagram Caption - Eye-catching text with hashtags.</li>
                        <li>🎥 YouTube Script - Conversational and structured for videos.</li>
                    </ul>
                </FormatSuggestions>

                <Button type="submit">Repurpose Content</Button>
            </Form>

            {loading && <LoadingSpinner />}
            {response && (
                <ResponseContainer>
                    <AiResponse response={response} />
                </ResponseContainer>
            )}
        </PageContainer>
    );
};

export default RepurposePage;
