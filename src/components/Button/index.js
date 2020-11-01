import React from 'react';

import StyledButton from '../styled/StyledButton';

const Button = ({ text, type, handleClick, theme }) => (
  <StyledButton type={type} theme={theme} onClick={handleClick}>{text}</StyledButton>
);

export default Button;
