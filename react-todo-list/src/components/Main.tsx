import { Today } from "./Today";
import { Tomorrow } from "./Tomorrow";
import styled from "styled-components";

interface TodoViewProps {
  todoView: string;
}

export function Main(props: TodoViewProps) {
  const { todoView } = props;
  return (
    <StyledRoot>
      <Today todoView={todoView} />
      <Tomorrow todoView={todoView} />
    </StyledRoot>
  );
}

const StyledRoot = styled.main`
  flex: 1;
  width: 100%;
  height: 70%;
  display: flex;
  overflow-x: hidden;
`;
