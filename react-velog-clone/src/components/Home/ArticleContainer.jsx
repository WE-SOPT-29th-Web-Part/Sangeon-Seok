import React from 'react';
import { useState, useEffect } from 'react';
import { client } from '../../libs/api'
import { ArticleCard } from './ArticleCard';
import styled from 'styled-components';

export function ArticleContainer() {
  const [articleData, setArticleData] = useState([])
  const getArticleData = async () => {
    const { data } = await client.get("/article")
    setArticleData(data)
    // http://localhost:4000/ - 다회 통신 -> axios.create
  }
  
  useEffect(() => {
    getArticleData();
  }, [])

  return (
    <StyledRoot>
      {articleData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 75%;
  margin: 0 auto;
`