import React from 'react';
import styled from 'styled-components';

export function Header() {
  return (
    <StyledRoot>
      <h1>📑투두리스트</h1>
    </StyledRoot>
  );
};

const StyledRoot = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  line-height: 50px;

  h1 {
    margin: 0;
    font-weight: 500;
    color: rgb(36, 36, 36);
  }
`