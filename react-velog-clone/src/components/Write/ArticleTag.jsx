import React, { useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../libs/constants/colors';

const ArticleTag = ({tags, TagDataCreate, TagDataRemove}) => {
  const inputRef = useRef(null)

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "" || tags.includes(e.target.value)) {
        inputRef.current.value = "";
        return;
      }
      TagDataCreate("tags", e.target.value);
      inputRef.current.value = "";
      // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, e.target.value]
      // }))
      // e.target.value = ""
      // e.target.value = ""가 오류를 일으킬 수 있는데 그 이유는 setState가 비동기라 e.target.value = ""가 먼저 실행되기 때문이다.
    }
  }

  return (
    <Root>
      {tags.map((tag) => (
        <span key={tag}
        onClick={(e) => TagDataRemove("tags", e.target.innerText)}
        >{tag}</span>
      ))}
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} placeholder="태그를 입력하세요."/>
    </Root>
  );
};

export default ArticleTag;

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 18px;
  input {
    outline: none;
    border: none;
    width: 200px;
    font-size: 18px;
    margin-bottom: 12px;
  }
  span {
    display: inline-block;
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    margin: 0 12px 12px 0;
    background-color: ${colors.tagGray};
    color: ${colors.subGreen};
    border-radius: 16px;
    cursor: pointer;
  }
`;