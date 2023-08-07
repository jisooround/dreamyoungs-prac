// 대메뉴 카테고리 컴포넌트

import { useState } from "react";
import styled from "styled-components";

type Props = {
  content: string;
  children: React.ReactNode;
};

const Category = ({ content, children }: Props) => {
  const [open, setOpen] = useState<boolean>(true);

  // 대메뉴 토글 동작 함수
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <MainMenuStyle>
        <h4 onClick={toggle}>
          {content} {open ? "open" : "close"}
        </h4>
      </MainMenuStyle>
      {open && <ul>{children}</ul>}
    </>
  );
};

const MainMenuStyle = styled.div`
  display: flex;
  color: var(--color-gray-009);
  padding: 10px 28px;
  &:hover {
    background-color: var(--color-gray-002);
  }
`;
export default Category;
