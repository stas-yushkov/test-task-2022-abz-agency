import styled from 'styled-components';

import { colors } from '../../constants/colors';

const style = {
  margin: 0,
  padding: 0,
  textAlign: 'center',
  fontSize: '40px',
  lineHeight: '40px',
  color: colors.BLACK_87,
}

export const StyledH1 = styled.h1({
  ...style,
  color: colors.WHITE,
});


export const StyledH2 = styled.h2(style);
