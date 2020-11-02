import styled from 'styled-components';

import check from '../../../images/check.svg';

export const StyledForm = styled.form`
  color: #000000;
  
  button[type=submit] {
    width: 100%;
  }
`;

export const FormGroup = styled.fieldset`
  margin: 0;
  padding: 0;
  
  border: none;
`;

export const FormItem = styled.p`
  margin: 0;
  margin-bottom: 16px;
  
  input[type=text] {
    width: 100%;
    padding: 7px 10px;
    
    font: inherit;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  
    border: 1px solid #dfe3e6;
    border-radius: 3px;
    outline: none;
    
    transition: 0.2s ease-out;
    
    &:hover {
      border-color: #000000;
    }
    
    &:disabled {
      border-color: #808080;
    }
    
    &.error {
      border-color: #ea0029;
    }
    
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

export const StyledFormPayments = styled(FormGroup)`
  margin-bottom: 24px;
  
  animation-name: show;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  legend {
    margin-bottom: 0;
  }
`;

export const FormCheckbox = styled.p`
  margin: 0;
  padding: 16px 0;
  
  border-bottom: 1px solid #dfe3e6;
  
  animation-name: show;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  input[type=checkbox] + label {
    position: relative;
    padding-left: 31px;
    
    margin: 0;
    
    cursor: pointer;
    transition: 0.15s ease-out;
    
    &:hover {
      &::before {
        border-color: #000000;
      }
      
      &::after {
        opacity: 0.6;
      }
    }
    
    &::before {
      content: "";
      
      position: absolute;
      top: 0;
      left: 0;
      
      width: 20px;
      height: 20px;
      
      border: 1px solid #dfe3e6;
      border-radius: 6px;
        
      cursor: pointer;
      transition: 0.15s ease-out;
    }
    
    &::after {
      content: "";
    
      position: absolute;
      top: 0;
      left: 0;
      
      width: 20px;
      height: 20px;
      
      background-image: url(${check});
      background-repeat: no-repeat;
      background-size: 14px 11px;
      background-position: center;
      
      opacity: 0;
        
      transition: 0.15s ease-out;
    }
  }
  
  input[type=checkbox]:focus + label::before {
    border-color: #000000;
  }
  
  input[type=checkbox]:focus + label::after {
    transform: scale(0.6);
  }
  
  input[type=checkbox]:active + label::before,
  input[type=checkbox]:checked + label::before {
    background: linear-gradient(255.35deg, #dc3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #ff5e56;
    border-color: transparent;
  }
  
  input[type=checkbox]:active + label::after,
  input[type=checkbox]:checked + label::after {
    opacity: 1;
  }
  
  input[type=checkbox]:disabled + label::before {
    border-color: #bec5cc;
  }
`;

export const StyledFormType = styled.div`
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  legend {
    margin-bottom: 24px;
  
    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 76px;
    }
  
    @media (min-width: 1440px) {
      margin-right: 32px;
    }
  }
`;

export const FormRadio = styled.p`
  display: inline-block;
  margin: 0;
  margin-right: 8px;
  
  &:last-of-type {
    margin-right: 0;
  }
  
  @media (min-width: 768px) {
    margin-right: 16px;
  }

  input[type=radio] + label {
    display: inline-block;
    padding: 6px 12px;
    
    font: inherit;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    text-align: center;
    vertical-align: middle;
    
    background-color: #eef0f2;
    border-radius: 50px;
    cursor: pointer;
    
    transition: 0.2s ease-out;
  }
  
  input[type=radio]:hover + label {
    background-color: #dfe3e6;
  }
  
  input[type=radio]:active + label,
  input[type=radio]:checked + label {
    color: #ffffff;
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;  
  }
`;
