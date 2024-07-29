import React, { useState } from 'react';
import styled from 'styled-components';
import selectArrow from '../assets/select_arrow.png';

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
  font-weight: normal;
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
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.b4};
  }
`;

const SelectCategory = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('질환/고민을 선택하세요');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    onSelect(option.key);  // 선택된 옵션의 키를 부모 컴포넌트로 전달
  };

  const options = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <ArrowIcon src={selectArrow} alt="arrow" />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem key={option.key} onClick={() => handleOptionClick(option)}>
              {option.value}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default SelectCategory;

