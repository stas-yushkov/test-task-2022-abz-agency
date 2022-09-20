import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Container } from '../../styledComponents';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: ${colors.WHITE};
  height: 60px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
