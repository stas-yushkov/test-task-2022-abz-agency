import React from 'react';
import { StyledButton } from './StyledComponents';

export const Button = ({ disabled, children, style }) => {
  return <StyledButton style={style} disabled={disabled}>{children}</StyledButton>
};
