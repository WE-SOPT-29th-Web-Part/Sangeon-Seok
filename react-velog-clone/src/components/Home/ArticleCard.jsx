import React from 'react';
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";
import { Link } from "react-router-dom";
import { ImgWrapper } from '../common/ImgWrapper';

export function ArticleCard({article}) {
  const {title, summary, tags, thumbnail, date} = article;
  
  return (
    <StyledRoot>
      <Link to={`article/${article.id}`} state={article}>
        {/* to - 어디로 보낼것인가 && state - 어떠한 상태를 보낼 것인가 */}
        {/* 데이터를 싣어보낼 때, Navigate와 Link 모두 사용가능하지만 Link는 a태그를 형성하기에 검색엔진에 노출을 원할 경우, Navigate는 edit등의 검색엔진 노출이 필요 없을 경우에 사용된다.  */}
      <ImgWrapper ratio="40%">
        {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      </ImgWrapper>
      </Link>
      <h3>{title}</h3>
      <p>{summary}</p>
      <StyledTag>
        {tags && tags.map((tag) => <span key={tag}>{tag}</span>)}
      </StyledTag>
      <span>{date}</span>
    </StyledRoot>
  );
};

const StyledRoot = styled.article`
  width: 100%;
  color: ${colors.lightGray};
  padding-bottom: 64px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 32px;
  }
  & > span {
    color: ${colors.dateGray};
    font-size: 14px;
  }
`;

export const StyledTag = styled.div`
  margin-bottom: 16px;
  & > span {
    display: inline-block;
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    margin-right: 14px;
    background-color: ${colors.tagGray};
    color: ${colors.subGreen};
    border-radius: 16px;
    cursor: pointer;
  }
`;
