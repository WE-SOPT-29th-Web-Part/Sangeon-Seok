import React, { useRef } from 'react';
import styled from 'styled-components';
import { StyledTag } from '../Home/ArticleCard';

export function ArticleTags(props) {
  const {tags, TagDataCreate, TagDataRemove} = props;
  const inputRef = useRef(null)

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "" || tags.includes(e.target.value)) {
        inputRef.current.value = "";
        return;
      }
      TagDataCreate("tags", e.target.value);
      inputRef.current.value = "";
    }
  }

  return (
    <Root>
      <StyledTag>
        {tags.map((tag) => (
          <span key={tag}
          onClick={() => TagDataRemove("tags", tag)}
          >{tag}</span>
        ))}
      </StyledTag>
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} placeholder="태그를 입력하세요."/>
    </Root>
  );
};

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
`;