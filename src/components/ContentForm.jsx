import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-weight: bold;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.inputBackground};
    color: ${props => props.theme.textColor};
`;

const Textarea = styled.textarea`
    padding: 8px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.inputBackground};
    color: ${props => props.theme.textColor};
    min-height: 100px;
`;

const Select = styled.select`
    padding: 8px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.inputBackground};
    color: ${props => props.theme.textColor};
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const ContentForm = ({ inputs, onSubmit }) => {
    const [formData, setFormData] = React.useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            {inputs.map(input => (
                <div key={input.name}>
                    <Label htmlFor={input.name}>{input.label}</Label>
                    {input.type === 'textarea' ? (
                        <Textarea
                            id={input.name}
                            name={input.name}
                            value={formData[input.name] || ''}
                            onChange={handleChange}
                            required={input.required}
                        />
                    ) : input.type === 'select' ? (
                        <Select
                            id={input.name}
                            name={input.name}
                            value={formData[input.name] || ''}
                            onChange={handleChange}
                            required={input.required}
                        >
                            {input.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </Select>
                    ) : (
                        <Input
                            type={input.type}
                            id={input.name}
                            name={input.name}
                            value={formData[input.name] || ''}
                            onChange={handleChange}
                            required={input.required}
                        />
                    )}
                </div>
            ))}
            <Button type="submit">Generate</Button>
        </FormContainer>
    );
};

export default ContentForm;