import styled from 'styled-components';
import { colors } from '../../constants/colors';

const color = colors.buttons.primary;

export const StyledButton = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: ${color.normal.bg};
  color: ${color.normal.text};
  border: none;
  outline: none;

  &:focus,
  &:hover {
    background-color: ${color.hover.bg};
    color: ${color.hover.text};
  }

  ${props => props.disabled &&
    `&,
     &:focus,
     &:hover {
      background-color: ${color.disabled.bg};
      color: ${color.disabled.text};
    }`
  }
`;
