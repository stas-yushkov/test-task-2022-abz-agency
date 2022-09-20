import styled from 'styled-components'

import { colors } from '../constants/colors';
import { media } from '../constants/media';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BACKGROUND};
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.BLACK_87};
`;

export const Container = styled.div`
  padding: 0 16px;
  width: 100%;
  min-width: ${media[360]}px;
`;
