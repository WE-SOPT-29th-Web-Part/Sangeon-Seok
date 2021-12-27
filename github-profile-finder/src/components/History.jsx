import React from "react";
import styled from "styled-components";

export function History(props) {
  const { getUserInfo, userList, setUserList } = props

  const handleClick = (user) => {
    getUserInfo(user);
  };

  const handleRemove = (user) => {
    const newUserList = userList.filter((userId) => userId !== user);
    setUserList(newUserList);
    localStorage.setItem("userList", JSON.stringify(newUserList));
  };

  return (
    <StyledRoot>
      {userList &&
        userList.map((user) => (
          <StyledList key={user}>
            <span onClick={() => handleClick(user)}>{user}</span>
            <button onClick={() => handleRemove(user)}>X</button>
          </StyledList>
        ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.ul`
  width: 300px;
  background-color: #24272b;
  color: #e5e6e7;
  margin-bottom: 10px;
  position: relative;
  top: -10px;
`;

const StyledList = styled.li`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  & > button {
    border: 0;
    outline: 0;
    background-color: #24272b;
    color: white;
    cursor: pointer;
  }
  & > span {
    cursor: pointer;
  }
`;