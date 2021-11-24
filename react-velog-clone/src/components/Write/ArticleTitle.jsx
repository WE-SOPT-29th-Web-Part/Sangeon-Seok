import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from "react-textarea-autosize";

const ArticleTitle = ({handleArticleDataChange}) => {
  return (
    <Textarea 
    placeholder="제목을 입력하세요."
    onChange={(e) => handleArticleDataChange("title", e.target.value)}
    />
  );
};

export default ArticleTitle;

const Textarea = styled(TextareaAutosize)`
  all: unset;
  width: 100%;
  white-space: pre-wrap;
  height: auto;
  font-size: 36px;
`;