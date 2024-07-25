import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  position: relative;
  font-size: 0.9375rem;
  font-weight: bold;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover > ul {
    display: block;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.nv};
  background-color: white;
  padding: 0.4375rem 2.125rem;
  border-radius: 2.5rem;
  &:hover {
    color: ${({ theme }) => theme.colors.b1};
  }
  &.active {
    color: white;
    background-color: ${({ theme }) => theme.colors.b1};
    padding: 0.4375rem 2.125rem;
    border-radius: 2.5rem;
  }
`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  background-color: white;
  padding: 0;
  list-style: none;
  z-index: 1000;
  text-align: center;
`;

const SubMenuItem = styled.li`
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.b4};
  }
  &:hover ${StyledLink} {
    background-color: ${({ theme }) => theme.colors.b4};
  }
  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.colors.b4};
    & ${StyledLink} {
      background-color: ${theme.colors.b4};
      color: ${theme.colors.nv}
    }
  `}
`;

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
          <MenuItem>
            <StyledLink to="/community">커뮤니티</StyledLink>
            <SubMenu>
              <SubMenuItem active={currentPath.startsWith("/disease")}>
                <StyledLink to="/disease">질환 고민</StyledLink>
              </SubMenuItem>
              <SubMenuItem active={currentPath.startsWith("/surgery")}>
                <StyledLink to="/surgery">수술 후기</StyledLink>
              </SubMenuItem>
              <SubMenuItem active={currentPath.startsWith("/daily")}>
                <StyledLink to="/daily">일상</StyledLink>
              </SubMenuItem>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/hospital-review">병원후기</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/counsel">전문의 상담</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/library">자료실</StyledLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </div>
  );
};

export default Header;
