import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ getUserInfo }) => {
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    // submit시 새로고침 되는 현상 방지
    e.preventDefault();
    // user API 받아오기
    getUserInfo(user);

    // 중복될 때
    if (userList.includes(user)) {
      setUser("");
      return;
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Github 프로필을 검색해보세요."
          onChange={handleChange}
          value={user || ""}
        />
      </StyledForm>
    </>
  );
};

export default SearchBar;

const StyledForm = styled.form`
  /* margin-bottom: 10px; */
`;

const StyledInput = styled.input`
  border: 8px solid rgba(105, 105, 105, 0.5);
  outline: none;
  border-radius: 20px;
  width: 320px;
  height: 57px;
  background-color: #24272b;
  color: #e5e6e7;
  padding: 16px;
`;
