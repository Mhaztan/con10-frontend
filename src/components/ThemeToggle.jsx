import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 5px;
  color: ${(props) => props.theme.textColor};
  transition: color 0.3s ease-in-out;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {theme === "light" ? <FaSun /> : <FaMoon />}
    </ToggleContainer>
  );
};

export default ThemeToggle;
