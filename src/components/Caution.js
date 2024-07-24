import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 2.5rem 2rem;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Content = styled.p`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Check = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2.5rem;
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
`;

const Identify = styled.span``;

const Caution = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper>
      <Title>&lt;주의사항&gt;</Title>
      <Content>
        커뮤니티 운영 취지에 부합하지 않는 음란물, 지나친 폭력성, 약물 남용 등
        부적절한 내용을 담은 게시글 <br />
        초상권 등 타인의 권리 침해가 예상되는 게시글 <br />
        타인을 비방하는 내용이나 차별성, 욕설 등이 포함된 게시글
        <br />
        허위 사실이나 유언비어 등 다른 사용자들에게 혼란을 줄 수 있는 게시글{" "}
        <br />
        <br />
        <br />이 외에도 건전하고 긍정적인 커뮤니티 분위기 조성에 부정적 영향을
        주는 게시글은 임의로 삭제될 수 있습니다.
      </Content>
      <Check>
        <CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Identify>네. 확인하였습니다.</Identify>
      </Check>
    </Wrapper>
  );
};

export default Caution;
