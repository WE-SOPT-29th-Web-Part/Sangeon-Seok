import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const SearchBar = ({setUserInfo}) => {
  const [user, setUser] = useState("")

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
    
    setUser("")
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput value={user} onChange={changeInput}/>
      </StyledForm>
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
