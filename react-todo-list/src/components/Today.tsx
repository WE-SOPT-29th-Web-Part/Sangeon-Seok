import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export interface TodoView {
  todoView: string;
}

export interface NewTodo {
  id: number;
  value: string;
}

export function Today(props: TodoView) {
  const { todoView } = props;

  const [todayTodos, setTodayTodos] = useState<NewTodo[]>([]);
  const [input, setInput] = useState("");

  const createTodo = (value: string) => {
    const temptodayTodos = [...todayTodos, { id: uuidv4(), value: value }];
    setTodayTodos(temptodayTodos);
    setInput("");
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handelKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo(e.currentTarget.value);
    }
  };

  const handleDelete = (currentId: number) => {
    const tempList = todayTodos.filter((item) => item["id"] !== currentId);
    setTodayTodos(tempList);
  };

  return (
    <StyledRoot todoView={todoView}>
      <h2>오늘</h2>
      <ul>
        {todayTodos.map((item) => (
          <li key={item["id"]}>
            <span className="value">{item["value"]}</span>
            <span className="delete" onClick={() => handleDelete(item["id"])}>
              🗑
            </span>
          </li>
        ))}
      </ul>
      <input
        value={input}
        onChange={handleInputChange}
        onKeyPress={handelKeyPress}
        placeholder="할 일을 입력해주~"
      ></input>
    </StyledRoot>
  );
}

const StyledRoot = styled.div<{ todoView: string }>`
  width: ${(props) => (props.todoView === "today" ? "100%" : "50%")};
  display: ${(props) => (props.todoView === "tomo" ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  transition: all ease-in 300ms;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    overflow-y: auto;

    li {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      height: 50px;
      border: none;
      outline: none;
      margin-bottom: 1rem;
      padding: 0 25px;
      border-radius: 25px;
      box-shadow: 0 1px 15px rgba(29, 32, 36, 0.15);

      .delete {
        font-size: 25px;
        cursor: pointer;
      }
    }
  }

  input {
    width: 75%;
    height: 50px;
    border: none;
    outline: none;
    padding: 0 25px;
    border-radius: 25px;
    box-shadow: 0 1px 15px rgba(29, 32, 36, 0.15);
  }
`;
