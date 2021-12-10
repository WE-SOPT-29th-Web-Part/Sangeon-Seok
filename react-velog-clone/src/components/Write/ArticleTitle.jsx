import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from "react-textarea-autosize";

export function ArticleTitle(props) {
  const { onArticleDataChange, title } = props;

  return (
    <Textarea 
    value = {title}
    placeholder="제목을 입력하세요."
    onChange={(e) => onArticleDataChange("title", e.target.value)}
    />
  );
};

const Textarea = styled(TextareaAutosize)`
  all: unset;
  width: 100%;
  white-space: pre-wrap;
  height: auto;
  font-size: 36px;
`;