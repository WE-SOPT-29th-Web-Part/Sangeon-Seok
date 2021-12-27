import React from 'react';
import styled from 'styled-components';

export function Footer() {
  return (
    <StyledRoot>
      SOPT 29th Web Part
    </StyledRoot>
  );
};

const StyledRoot = styled.footer`
  width: 100%;
  text-align: center;
  height: 100px;
  line-height: 50px;
`