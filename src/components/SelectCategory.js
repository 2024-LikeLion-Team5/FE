import React, { useState } from 'react';
import styled from 'styled-components';
import selectArrow from '../assets/select_arrow.png'; // select_arrow 이미지 import

const DropdownWrapper = styled.div`
  position: relative;
  width: 256px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.b3};
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.nv};
  font-weight: normal; /* bold 제거 */
`;

const ArrowIcon = styled.img`
  width: 1rem;
  height: 0.7rem;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.b3};
  border-radius: 8px;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
`;

const DropdownListItem = styled.li`
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.nv};
  cursor: pointer;
  text-align: center; /* 중앙 정렬 추가 */
  &:hover {
    background-color: ${({ theme }) => theme.colors.b4};
  }
`;

const SelectCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('질환/고민을 선택하세요');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['발기부전', '음경 확대', '정관수술', '요로결석', '조루/지루', '전립선염', '기타'];

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <ArrowIcon src={selectArrow} alt="arrow" />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownListItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default SelectCategory;
