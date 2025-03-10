import React, { useState } from 'react';
import styled from 'styled-components';
import { formatApiResponse } from '../utils/formatting';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaTwitter, FaFacebook, FaLinkedin, FaCopy } from 'react-icons/fa';

const ResponseContainer = styled.div`
    background-color: ${props => props.theme.responseBackground};
    color: ${props => props.theme.textColor};
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
`;

const FormattedResponse = styled.div`
    white-space: pre-line;
    margin-bottom: 15px;
`;

const ActionsContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px 12px;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const CopyMessage = styled.span`
    color: white;
    margin-left: 5px;
    font-size: 0.8em;
`;

const AiResponse = ({ response }) => {
    const [copySuccess, setCopySuccess] = useState('');
    const formattedText = formatApiResponse(response);

    const handleShare = (platform) => {
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);
        const encodedText = encodeURIComponent(response);

        let shareUrl;

        switch (platform) {
            case 'Twitter':
                shareUrl = `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
                break;
            case 'Facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'LinkedIn':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            default:
                console.warn(`Unsupported platform: ${platform}`);
                return;
        }

        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    const handleCopy = () => {
        setCopySuccess('Copied!');
        setTimeout(() => {
            setCopySuccess('');
        }, 2000); // Clear the message after 2 seconds
    };

    return (
        <ResponseContainer>
            <FormattedResponse dangerouslySetInnerHTML={{ __html: formattedText }} />
            <ActionsContainer>
                <CopyToClipboard text={response} onCopy={handleCopy}>
                    <Button>
                        <FaCopy />
                        {copySuccess ? <CopyMessage>{copySuccess}</CopyMessage> : null}
                    </Button>
                </CopyToClipboard>
                <Button onClick={() => handleShare('Twitter')}><FaTwitter /></Button>
                <Button onClick={() => handleShare('Facebook')}><FaFacebook /></Button>
                <Button onClick={() => handleShare('LinkedIn')}><FaLinkedin /></Button>
            </ActionsContainer>
        </ResponseContainer>
    );
};

export default AiResponse;