import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SelectCategory from "./SelectCategory";
import writeBtnImg from "../assets/write_btn.png";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: ${({ showSelect }) =>
    showSelect ? "space-between" : "flex-end"};
  align-items: center;
  margin: 1rem 0;
  height: 99px;
`;

const WriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.g3};
  color: ${({ theme }) => theme.colors.nv};
  border: none;
  border-radius: 40px;
  width: 117px;
  height: 38px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.button};
  &:hover {
    background-color: ${({ theme }) => theme.colors.g2};
  }
`;

const WriteButtonText = styled.span`
  margin-left: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: auto;
`;

const WriteButtonImage = styled.img`
  width: 18px;
  height: 18px;
`;

const PostActions = ({ writePath, showSelect, onSelectDisease }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(writePath);
  };

  return (
    <ActionsWrapper showSelect={showSelect}>
      {showSelect && <SelectCategory onSelect={onSelectDisease} />}
      <WriteButton onClick={handleClick}>
        <WriteButtonImage src={writeBtnImg} alt="write" />
        <WriteButtonText>글쓰기</WriteButtonText>
      </WriteButton>
    </ActionsWrapper>
  );
};

export default PostActions;
