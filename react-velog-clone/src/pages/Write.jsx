import React, { useState } from 'react';
import styled from "styled-components";
import ArticleTitle from '../components/Write/ArticleTitle'
import ArticleTags from '../components/Write/ArticleTag'
import ArticleBody from '../components/Write/ArticleBody'
import ArticleFooter from '../components/Write/ArticleFooter'
import PublishView from '../components/Write/PublishView/PublishViewMain'
import { client } from "../libs/api";
import { colors } from "../libs/constants/colors";

const Write = () => {
  // 필요한 데이터 입력과 동시에 받아오고, 출간하기 누르면 post
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    tags: [],
    thumbnail: "",
    date: "",
  });

  const [isPublishView, setIsPublishView] = useState(false);

  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const now = new Date();
    const today = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date: today,
      thumbnail: "",
    });
  };

  const handleArticleDataChange = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  }
  const TagDataCreate = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };
  const TagDataRemove = (key, innerText) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (item) => item !== innerText
    );
    setArticleData(tempArticleData);
  };


  return (
    <Root>
      <StyledTop>
        <ArticleTitle  handleArticleDataChange={handleArticleDataChange}/>
        <StyledMiddleLine />
        <ArticleTags tags={articleData.tags}
        TagDataCreate={TagDataCreate}
        TagDataRemove={TagDataRemove}
        />
      </StyledTop>
      <ArticleBody setArticleData={setArticleData}/>
      <ArticleFooter setIsPublishView={setIsPublishView}/>
      <PublishView 
        thumbnail={articleData.thumbnail}
        summary={articleData.summary}
        handleArticleDataChange={handleArticleDataChange}
        createArticle={createArticle}
        isPublishView={isPublishView}
        setIsPublishView={setIsPublishView}
      />
    </Root>
    
  );
};

export default Write;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTop = styled.div`
  padding: 32px 48px 0 48px;
  width: 50%;
`;

const StyledMiddleLine = styled.div`
  width: 64px;
  height: 6px;
  background-color: ${colors.lightGray};
  margin: 24px 0;
`;
