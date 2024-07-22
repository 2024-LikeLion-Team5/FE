import React, { useState } from "react";
import styled from "styled-components";
import searchBtn from "../../assets/search_img.png";

const Wrapper = styled.div.attrs((props) => ({
  searching: props.searching.toString(),
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${(props) => (props.searching === "true" ? "3.5rem" : "6.5rem")};
`;

const SearchTitle = styled.span.attrs((props) => ({
  searching: props.searching.toString(),
}))`
  font-weight: bold;
  font-size: ${(props) => (props.searching === "true" ? "1rem" : "2.5rem")};
`;

const SearchForm = styled.form.attrs((props) => ({
  searching: props.searching.toString(),
}))`
  height: 2.8125rem;
  width: 100%;
  max-width: 37.25rem;
  border: 1px solid ${({ theme }) => theme.colors.nv};
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => (props.searching === "true" ? "1rem" : "2.25rem")};
`;

const SearchInput = styled.input`
  border: none;
  padding: 0;
  margin-left: 2rem;
  flex-grow: 1;
  &::placeholder {
    color: ${({ theme }) => theme.colors.nv};
    font-weight: bold;
    font-size: 0.875rem;
    height: 100%;
  }
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 0;
  display: flex;
  margin-right: 2rem;
  align-items: center;
  cursor: pointer;
`;

const SearchHospital = ({ searching, setSearching }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearching(true);
  };

  return (
    <Wrapper searching={searching}>
      <SearchTitle searching={searching}>
        병원명 또는 지역으로 후기를 검색해보세요.
      </SearchTitle>
      <SearchForm searching={searching} onSubmit={onSubmit}>
        <SearchInput
          type="text"
          placeholder="후기 검색"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchBtn type="submit">
          <img src={searchBtn} alt="검색 버튼" />
        </SearchBtn>
      </SearchForm>
    </Wrapper>
  );
};

export default SearchHospital;
