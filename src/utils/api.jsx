const API_BASE_URL = 'http://localhost:8000/api/content'; // Adjust as needed

export const generateCaptions = async (topic, style) => {
    const response = await fetch(`${API_BASE_URL}/captions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, style }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const generateVideoScript = async (topic, length, style) => {
    const response = await fetch(`${API_BASE_URL}/video-script`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, length, style }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const repurposeContent = async (content, format) => {
    const response = await fetch(`${API_BASE_URL}/repurpose`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, format }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const paraphraseText = async (text) => {
    const response = await fetch(`${API_BASE_URL}/paraphrase`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const summarizeText = async (text, length) => {
    const response = await fetch(`${API_BASE_URL}/summarize`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, length }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};