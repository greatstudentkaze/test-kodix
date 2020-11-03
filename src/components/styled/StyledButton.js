import styled, { css } from 'styled-components';

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
  
  ${({ theme }) => theme === 'red' && css`
    background: linear-gradient(255.35deg, #dc3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #ff5e56;
    box-shadow: 0 0 24px 0 #ea0029 33%;
    
    filter: none;
    
    &:hover,
    &:focus,
    &:active {
      color: #ffffff;
      background: #ea0029;
    }
  `}
  
  &:disabled {
    color: #ffffff;
    background: #bec5cc;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    padding: 15px 32px;
    
    font-size: 16px;
    line-height: 24px;
  }
`;

export default StyledButton;
