import React from 'react';
import styled from 'styled-components';

export function ArticleBody (props) {
  const {setArticleData, body} = props;
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value
    }))
  }
  
  return (
    <Textarea value={body} onChange={handleChange} placeholder="당신의 이야기를 적어보세요..."/>
  );
};

const Textarea = styled.textarea`
  all: unset;
  width: 50%;
  min-height: 10rem !important;
  white-space: pre-wrap;
  padding: 0 50px;
  font-size: 20px;
`;