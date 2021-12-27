import styled from "styled-components";

interface TodoView {
  setTodoView: (view: string) => void;
}

export function Nav(props: TodoView) {
  const { setTodoView } = props;
  const handleTodayView = () => {
    setTodoView("today");
  };

  const handleTomoView = () => {
    setTodoView("tomo");
  };
  const handleAllView = () => {
    setTodoView("both");
  };

  return (
    <StyledNav>
      <SytledButton onClick={handleTodayView}>오늘만 보기</SytledButton>
      <SytledButton onClick={handleTomoView}>내일만 보기</SytledButton>
      <SytledButton onClick={handleAllView}>모두 보기</SytledButton>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button:nth-child(3) {
    margin-right: 0;
  }
`;

const SytledButton = styled.button`
  border: none;
  outline: none;
  margin: 0 5px;
  padding: 5px 25px;
  border-radius: 25px;
  background-color: hotpink;
  box-shadow: 0 1px 15px rgba(29, 32, 36, 0.15);
  color: white;
  cursor: pointer;
`;
