import "./App.css";

import styled from "styled-components";
import React, { useState, useRef } from "react";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <StyledRoot>
      <Header />
      <SearchBar setUserInfo={setUserInfo}/>
      {
        userInfo.login
        ? <Result userInfo={userInfo} setUserInfo={setUserInfo}/>
        : null // JSX에서 null은 텅빈 HTML 태그를 뜻함.
      }

    </StyledRoot>
  );
}

export default App;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #1b1d21;
  color: #e5e6e7;
`;
