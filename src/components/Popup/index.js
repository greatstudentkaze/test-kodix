import React from 'react';
import styled from 'styled-components';

import Form from './Form';

import closeButtonIcon from '../../images/close.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 997;
  padding: 120px 0;
  
  background-color: rgba(0, 0, 0, 0.3);
  
  overflow-y: scroll;
`;

const StyledPopup = styled.section`
  position: relative;
  z-index: 999;
  
  width: 100%;
  height: 100%;
  padding: 32px 16px;
  
  background-color: #ffffff;
  
  @media (min-width: 768px) {
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  
    max-width: 453px;
    height: auto;
    padding: 32px;
    
    border-radius: 30px;
  }
  
  @media (min-width: 1440px) {
    max-width: 552px;
  }
  
  h2 {
    margin: 0;
    margin-bottom: 16px;
  
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #000000;
  
    @media (min-width: 768px) {
      font-size: 28px;
      line-height: 40px;
    }
  }
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 24px;

  font-size: 12px;
  line-height: 16px;
  color: #808080;
  
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: block;
  width: 24px;
  height: 24px;
  padding: 6px;
  
  background-color: transparent;
  background-image: url(${closeButtonIcon});
  background-repeat: no-repeat;
  background-size: 12px 12px;
  background-position: center;
  border: none;
  outline: none;
  
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover,
  &:focus {
    transform: rotate(-90deg) scale(0.9);
  }
  
  &:focus {
    opacity: 0.7;
  }
  
  &:active {
    opacity: 0.4;
  }
  
  @media (min-width: 768px) {
    right: 12px;
    
    width: 40px;
    height: 40px;
    padding: 11px;
    
    background-size: 18px 18px;
  }
  
  @media (min-width: 1440px) {
    right: 16px;
  }
`;

const Popup = ({ hidePopup }) => (
  <Overlay>
    <StyledPopup>
      <CloseButton type="button" aria-label="Закрыть" onClick={hidePopup} />
      <h2>Налоговый вычет</h2>
      <Text>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </Text>
      <Form />
    </StyledPopup>
  </Overlay>
);

export default Popup;
