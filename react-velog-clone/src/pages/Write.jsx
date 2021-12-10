import React, { useState } from 'react';
import styled from "styled-components";
import { ArticleTitle } from '../components/Write/ArticleTitle'
import { ArticleTags } from '../components/Write/ArticleTag'
import { ArticleBody } from '../components/Write/ArticleBody'
import { ArticleFooter } from '../components/Write/ArticleFooter'
import { PublishViewMain } from '../components/Write/PublishView/PublishViewMain'
import { client } from "../libs/api";
import { colors } from "../libs/constants/colors";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

export function Write() {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state;
  // 필요한 데이터 입력과 동시에 받아오고, 출간하기 누르면 post

  const [articleData, setArticleData] = useState(
    article ?? {
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: "",
    }
  );
  // const [articleData, setArticleData] = useState({
  //   title: article?.title ?? "",
  //   body: article?.body ?? "",
  //   summary: article?.summary ?? "",
  //   tags: article?.tags ?? [],
  //   thumbnail: article?.thumbnail ?? "",
  // });
    // ??(null operator)와 ||의 차이 - ??는 null, undefined 체크 // || 는 null, undefined에 0까지 체크한다.

  const [isPublishView, setIsPublishView] = useState(false);

  const createArticle = async () => {
    // 수정 중일때 출간하기는 update -> patch
    // 새글작성중일때 출간하기는 post
    if (article) {
      await client.patch(`article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", articleData);
    navigate("/");
  };

  const handleArticleDataChange = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    // 대괄호안에 key넣은건 key를 변수로 인식하게끔 하기위함이다. .key는 진짜 key값이 따라온다.
    setArticleData(tempArticleData);
  }
  const TagDataCreate = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
    // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, e.target.value]
      // }))
      // e.target.value = ""
      // e.target.value = ""가 오류를 일으킬 수 있는데 그 이유는 setState가 비동기라 e.target.value = ""가 먼저 실행되기 때문이다.
      // 해결법 : articleData를 임의의 변수 안에 넣어 변수에 먼저 데이터를 저장한 뒤 e.target.value = ""를 실행해준다.
      // 기존 순서(문제) - setArticleData() -> e.target.value = "" (-> tags: [...articleData.tags, e.target.value])
      // 해결 순서 - tempArticleData[key] = [...tempArticleData[key], value] -> setArticleData() -> e.target.value
  };
  const TagDataRemove = (key, tag) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (item) => item !== tag
    );
    setArticleData(tempArticleData);
  };


  return (
    <Root>
      <StyledTop>
        <ArticleTitle title={articleData.title} onArticleDataChange={handleArticleDataChange}/>
        <StyledMiddleLine />
        <ArticleTags tags={articleData.tags}
        TagDataCreate={TagDataCreate}
        TagDataRemove={TagDataRemove}
        />
      </StyledTop>
      <ArticleBody body={articleData.body} setArticleData={setArticleData}/>
      <ArticleFooter setIsPublishView={setIsPublishView}/>
      <PublishViewMain 
        thumbnail={articleData.thumbnail}
        summary={articleData.summary}
        onArticleDataChange={handleArticleDataChange}
        createArticle={createArticle}
        isPublishView={isPublishView}
        setIsPublishView={setIsPublishView}
      />
    </Root>
    
  );
};

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