import React from 'react';
import { Logo, Button } from '../../components';
import { Wrapper, StyledContainer, ButtonsWrapper } from './StyledComponents';

export const Header = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Logo />
        <ButtonsWrapper>
          <Button>Users</Button>
          <Button style={{ marginLeft: '10px' }}>Sign up</Button>
        </ButtonsWrapper>
      </StyledContainer>
    </Wrapper>
  )
}
