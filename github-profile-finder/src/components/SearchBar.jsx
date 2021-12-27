import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { History } from "./History";

const SearchBar = ({setUserInfo, getUserInfo}) => {
  const [user, setUser] = useState("")
  const [userList, setUserList] = useState([]);
  const MAX_NUM = 3;

  const changeInput = (e) => {
    setUser(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 새로고침 방지
    setUserInfo((currenUser) => ({
      ...currenUser,
      status: "loading" 
    }))
    // userInfo 받는 중

    try {
      const {data} = await axios.get(`https://api.github.com/users/${user}`)
      setUserInfo((currenUser) => ({
        ...currenUser,
        data,
        status: "resolved"
      }))
      // userInfo 받기 성공
    } 

    catch {
      setUserInfo((currenUser) => ({
        ...currenUser,
        data: null,
        status: "rejected"
      }))
      // userInfo 받기 실패 (해당 유저 없음)
    }

    // 중복 방지
    if (userList.includes(user)) {
      setUser("");
      return;
    }

    // history 3개 기준 분기 처리
    const setNewUserList = () => {
      if (userList.length >= MAX_NUM) {
        return [...userList, user].slice(1, 4);
      }
      return [...userList, user];
    };

    const newUserList = setNewUserList();
    setUserList(newUserList);
    localStorage.setItem("userList", JSON.stringify(newUserList));

    setUser("");
  }

  useEffect(() => {
    // 컴포넌트가 mount되었을 때, localStorage 정보를 가지고 옴.
    localStorage.getItem("userList") &&
      setUserList(JSON.parse(localStorage.getItem("userList")));
  }, []);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput value={user} onChange={changeInput}/>
      </StyledForm>
      <History
        getUserInfo={getUserInfo}
        userList={userList}
        setUserList={setUserList}
      />
    </div>
  )
}

export default SearchBar


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
