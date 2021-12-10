import React from 'react';
import { useLocation } from 'react-router';
import { ArticleOptions } from '../components/article/ArticleOptions';
import { Header } from "../components/common/Header"
import { ImgWrapper } from '../components/common/ImgWrapper';
import { Profile } from "../components/Home/Profile"
import { StyledTag } from "../components/Home/ArticleCard"

export function Article() {
  // 데이터 넘기는 방법 Link
  // 받는 방법 useLocation
  const location = useLocation();
  const article = location.state;
  const {title, body, thumbnail, date, tags} = article;
  
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <ArticleOptions article={article}/>
      <div>
        <span>석상언</span>
        <span>•</span>
        <span>{date}</span>
      </div>
      <StyledTag>
      {
        tags && tags.map(tag => <span key={tag}>{tag}</span>)
      }
      </StyledTag>
      <ImgWrapper ratio="50%">
        {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      </ImgWrapper>
      <div>{body}</div>
      <Profile />
    </div>
  );
};