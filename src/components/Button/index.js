import React from 'react';

import StyledButton from '../styled/StyledButton';

const Button = ({ text, type, handleClick, theme, ...props }) => (
  <StyledButton type={type} theme={theme} onClick={handleClick} {...props}>{text}</StyledButton>
);

export default Button;
