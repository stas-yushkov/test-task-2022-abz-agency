import React from 'react';
import { StyledH1, StyledH2 } from './StyledComponents';

export const Heading = ({ h1, children }) => {
  return h1
    ? (<StyledH1>{children}</StyledH1>)
    : (<StyledH2>{children}</StyledH2>)
};
