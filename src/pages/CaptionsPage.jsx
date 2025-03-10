import React, { useState } from 'react';
import styled from 'styled-components';
import ContentForm from '../components/ContentForm';
import AiResponse from '../components/AiResponse';
import LoadingSpinner from '../components/LoadingSpinner';
import { generateCaptions } from '../utils/api';

const Container = styled.div`
    max-width: 700px;
    margin: 40px auto;
    padding: 25px;
    background-color: ${props => props.theme.responseBackground};
    color: ${props => props.theme.textColor};
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
    color: ${props => props.theme.primaryColor};
`;

const Description = styled.p`
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
    color: ${props => props.theme.textColor};
    opacity: 0.8;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
    color: ${props => props.theme.textColor};
`;

const Input = styled.input`
    padding: 12px;
    border: 2px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: border 0.3s;
    background-color: white;
    color: #333;

    &:focus {
        border-color: ${props => props.theme.primaryColor};
        outline: none;
        box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
    }
`;

const Select = styled.select`
    padding: 12px;
    border: 2px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: border 0.3s;
    background-color: white;
    color: #333;

    &:focus {
        border-color: ${props => props.theme.primaryColor};
        outline: none;
        box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
    }
`;

const Button = styled.button`
    padding: 12px;
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: ${props => props.theme.hoverColor};
    }
`;

const CaptionsPage = () => {
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        topic: '',
        style: 'inspirational'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await generateCaptions(formData.topic, formData.style);
            setResponse(data.result);
        } catch (error) {
            console.error("Error generating captions:", error);
            setResponse("Error generating captions. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Title>AI Caption & Hashtag Generator</Title>
            <Description>
                Generate AI-powered captions and hashtags for social media posts.
                Choose a style and get creative!
            </Description>

            <form onSubmit={handleSubmit}>
                <InputWrapper>
                    <Label>Topic</Label>
                    <Input
                        type="text"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label>Style</Label>
                    <Select name="style" value={formData.style} onChange={handleChange} required>
                        <option value="inspirational">Inspirational</option>
                        <option value="humorous">Humorous</option>
                        <option value="motivational">Motivational</option>
                        <option value="trendy">Trendy</option>
                        <option value="informative">Informative</option>
                        <option value="sales">Sales & Marketing</option>
                    </Select>
                </InputWrapper>

                <Button type="submit">Generate Captions</Button>
            </form>

            {loading ? <LoadingSpinner /> : null}
            {response && <AiResponse response={response} />}
        </Container>
    );
};

export default CaptionsPage;
