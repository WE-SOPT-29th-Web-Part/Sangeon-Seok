import "./App.css";

import styled from "styled-components";
import React, { useState } from "react";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result/Result';

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: "idle" });

  return (
    <StyledRoot>
      <Header />
      <SearchBar setUserInfo={setUserInfo}/>
      <Result userInfo={userInfo} setUserInfo={setUserInfo}/>
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
