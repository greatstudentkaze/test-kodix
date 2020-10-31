import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 11px 24px;
  
  font: inherit;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  text-transform: none;
  text-align: center;
  vertical-align: middle;
  
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  
  filter: drop-shadow(0px 0px 44px #cfdae7);
  transition: 0.15s ease-out;
  
  &:hover,
  &:focus,
  &:active {
    color: #000000;
    background-color: #ffffff;
    filter: none;
  }
  
  &:disabled {
    color: #ffffff;
    background-color: #bec5cc;
    cursor: default;
  }
  
  @media (min-width: 768px) {
    padding: 15px 32px;
    
    font-size: 16px;
    line-height: 24px;
  }
`;

const Button = () => (
  <StyledButton>Налоговый вычет</StyledButton>
);

export default Button;
