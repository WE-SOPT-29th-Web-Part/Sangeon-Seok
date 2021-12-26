import React from 'react';
import { useLocation } from 'react-router';
import { ArticleOptions } from '../components/article/ArticleOptions';
import { Header } from "../components/common/Header"
import { ImgWrapper } from '../components/common/ImgWrapper';
import { Profile } from "../components/Home/Profile"
import { StyledTag } from "../components/Home/ArticleCard"
import styled from 'styled-components';

export function Article() {
  // 데이터 넘기는 방법 Link
  // 받는 방법 useLocation
  const location = useLocation();
  const article = location.state;
  const {title, body, thumbnail, date, tags} = article;
  
  return (
    <StyledRoot>
      <Header />
      <StyledContent>
        <h1>{title}</h1>
        <StyledInfo>
          <div>
            <span>석상언</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <ArticleOptions article={article}/>
        </StyledInfo>
        <StyledTag>
        {
          tags && tags.map(tag => <span key={tag}>{tag}</span>)
        }
        </StyledTag>
        <ImgWrapper ratio="40%">
          {thumbnail && <img src={thumbnail} alt="thumbnail" />}
        </ImgWrapper>
        <div>{body}</div>
        <Profile />
      </StyledContent>
    </StyledRoot>
  );
};

const StyledRoot = styled.div``

const StyledContent = styled.div`
  width: 75%;
  margin: 0 auto;
`
const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > div > span {
    margin-right: 0.5rem;
  }
`