import React, { useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 16rem;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 11px 1rem 11px 1.5rem;
  border-radius: 0.5rem;
  align-self: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  &::before {
    content: "⌵";
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.b4};
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

const Label = styled.label`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 0.5rem;
  text-align: center;
  list-style: none;
  border-radius: 0.5rem;
  background-color: white;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "500px" : "0")};
  border: ${(props) =>
    props.show ? `1px solid ${props.theme.colors.b4}` : "none"};
  transition: max-height 0.3s ease, border 0.3s ease;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.b4};
  }
`;

const CustomSelect = ({ optionData, value, onChange }) => {
  const [currentValue, setCurrentValue] = useState(
    optionData.find((option) => option.key === value)?.value || "Select"
  );
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (key, value) => {
    setCurrentValue(value);
    setShowOptions(false);
    onChange(key);
    setShowOptions(true);
  };

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions ? 1 : 0}>
        {optionData.map((data) => (
          <Option
            key={data.key}
            onClick={() => handleOnChangeSelectValue(data.key, data.value)}
          >
            {data.value}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelect;
