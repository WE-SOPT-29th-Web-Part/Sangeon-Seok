import React, { useState } from 'react';
import styled from "styled-components";
import { imageClient } from '../../../libs/api';
import { colors } from "../../../libs/constants/colors";
import { ImgWrapper } from '../../common/ImgWrapper';

export function PublishViewLeft(props) {
  const { summary, onArticleDataChange } = props;
  const [ preview, setPreview ] = useState("")
  const MAX_NUM = 150;

  const handleChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    if (length > MAX_NUM) {
      // ex 144자에서 10자짜리를 복붙했을 때, 들어가지 않는 현상 해결
      // 6자는 채워지길 원함.

      // 남은 공간 ex 6자
      const room = MAX_NUM - summary.length;
      // 남은 공간만큼의 글자. 10자 중 앞 6자
      const roomSummary = value.slice(summary.length, summary.length + room);
      // 기본 144자에 잘라온 6글자를 더함
      const fullSummary = summary + roomSummary;
      onArticleDataChange("summary", fullSummary);
      return;
    }
    onArticleDataChange("summary", value);
  };

  const handleImageChange = async (e) => {
    // 서버에 이미지 보내기 (post), 정제된 이미지 url 받아오기 (get)
    const formData = new FormData();
    const imageFile = e.target.files[0];
    formData.append("file", imageFile);
    const imageResponse = await imageClient.post("", formData);
    const imageUrl = imageResponse.data.url;
    onArticleDataChange("thumbnail", imageUrl)
    setPreview(`${imageUrl}`)

    // 이 url을 articleData의 thumbnail에 넣어서 post할 것
    // request body, response body
    // post의 결과값 => response body
  }

  return (
    <StyledRoot>
      <h3>포스트 미리보기</h3>
      <input type="file" onChange={handleImageChange}/>
      { 
        preview !== "" &&
        <ImgWrapper ratio="40%">
          {preview && <img src={preview} alt="thumbnail" />}
        </ImgWrapper>
      }
      <textarea
        placeholder="당신의 포스트를 짧게 소개해보세요."
        value={summary}
        onChange={handleChange}
      />
      <StyledCharacterCounter limit={summary.length === 150}>
        {summary.length || "0"}/150
      </StyledCharacterCounter>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 100%;
  & > h3 {
    margin-bottom: 8px;
    font-size: 21px;
    font-weight: bold;
  }
  & > input {
    margin-bottom: 32px;
    display: block;
  }
  & > textarea {
    width: 100%;
    height: 118px;
    resize: none;
    padding: 12px 16px;
  }
`;

const StyledCharacterCounter = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 4px;
  color: ${({ limit }) => (limit ? "red" : colors.dateGray)};
`;