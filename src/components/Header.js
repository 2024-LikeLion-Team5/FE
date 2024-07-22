import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import searchBtn from "../assets/search_btn_nobackground.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 0 1rem;
`;

const Logo = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

const SearchForm = styled.form`
  border: 1px solid #002357;
  border-radius: 2.8125rem;
  height: 2.8125rem;
  width: 18.875rem;
  display: flex;
  justify-content: space-around;
`;

const SearchInput = styled.input`
  border: none;
  padding: 0;
  margin-left: 0.5rem;
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

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 6rem;
  margin-right: 2rem;
`;

const MenuItem = styled.li`
  font-size: 0.9375rem;
  font-weight: bold;
  line-height: 2rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.nv};
  background-color: white;
  padding: 0.4375rem 2.125rem;
  border-radius: 2.5rem;
  &.active {
    color: white;
    background-color: ${({ theme }) => theme.colors.b1};
    padding: 0.4375rem 2.125rem;
    border-radius: 2.5rem;
  }
`;

const Header = () => {
  return (
    <div>
      <Wrapper>
        <Logo>MOMENTUM</Logo>
        <SearchForm>
          <SearchInput type="text" placeholder="통합 검색" />
          <SearchButton type="submit">
            <img src={searchBtn} alt="검색 버튼" />
          </SearchButton>
        </SearchForm>
        <Menu>
          <MenuItem>커뮤니티</MenuItem>
          <MenuItem>
            <StyledLink to="/hospital-review">병원후기</StyledLink>
          </MenuItem>
          <MenuItem>전문의 상담</MenuItem>
          <MenuItem>자료실</MenuItem>
        </Menu>
      </Wrapper>
    </div>
  );
};

export default Header;
