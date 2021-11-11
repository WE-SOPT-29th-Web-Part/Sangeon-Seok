import React from 'react';
import styled from 'styled-components';

const ArticleBody = ({setArticleData}) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value
    }))
  }
  return (
    <Textarea onChange={handleChange} placeholder="당신의 이야기를 적어보세요..."/>
  );
};

export default ArticleBody;

const Textarea = styled.textarea`
  all: unset;
  width: 50%;
  min-height: 10rem !important;
  white-space: pre-wrap;
  padding: 0 50px;
  font-size: 20px;
`;