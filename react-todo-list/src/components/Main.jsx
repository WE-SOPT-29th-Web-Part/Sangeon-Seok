import React from 'react';
import Today from './Today'
import Tomorrow from './Tomorrow'
import styled from 'styled-components';

const Main = ({todoView}) => {
  return (
    <StyledRoot>
        <Today todoView={todoView}/>
        <Tomorrow todoView={todoView}/>
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.main`
  flex: 1;
  width: 100%;
  height: 70%;
  display: flex;
  overflow-x: hidden;
`