import React from 'react';
import { useNavigate } from 'react-router';
import { client } from "../../libs/api"
import styled from 'styled-components';

export function ArticleOptions({article}) {
  const navigate = useNavigate()
  const handelArticleDelete = async () => {
    await client.delete(`article/${article.id}`);
    navigate("/")
  }
  const handleNavigateEditPage = async () => {
    navigate(`/article/edit/${article.id}`, { state: article })
    // {replace : true}를 넣게되면 아예 갈아끼우는 느낌으로 history마저 날라간다.
    // navigate의 첫번째 인자 - 보낼 url 두번째 인자 - replace나 state와 같은 options
    // 이때 두번째 인자는 객체로 들어가는데, 그 객체 중 하나의 key가 state인 것이며 현재 상황에는 state의 value값으로 article이 들어간 것이다.
  }
  
  return (
    <StyledRoot>
      <button>통계</button>
      <button onClick={handleNavigateEditPage}>수정</button>
      <button onClick={handelArticleDelete}>삭제</button>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  & > button {
    padding: 0px;
    outline: none;
    border: none;
    background: none;
    font-size: inherit;
    cursor: pointer;
    color: rgb(134, 142, 150);
  }
`