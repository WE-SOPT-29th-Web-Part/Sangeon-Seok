import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/common/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { Footer } from "./components/common/Footer";

const App = () => {
  const [todoView, setTodoView] = useState("both");

  return (
    <StyledRoot>
      <StyledWrapper>
        <Header />
        <Nav setTodoView={setTodoView} />
        <Main todoView={todoView} />
        <Footer />
      </StyledWrapper>
    </StyledRoot>
  );
};

export default App;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #fefefe;
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 20px;
  box-shadow: 0 1px 15px rgba(29, 32, 36, 0.15);
`;
