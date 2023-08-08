// 대메뉴 카테고리 컴포넌트

import { useState } from "react";
import styled from "styled-components";
import foldActive from "../assets/images/gnb_fold_active.png";
import unfoldActive from "../assets/images/gnb_unfold_active.png";
import { Link, useLocation } from "react-router-dom";

type Props = {
  content: string;
  list: categoryList[];
};

interface categoryList {
  label: string;
  path: string;
}

const Category = ({ content, list }: Props) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // 대메뉴 토글 동작 함수
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainMenuStyle onClick={toggle}>
        <h4>{content}</h4>
        {isOpen ? (
          <img src={foldActive} alt="foldActive" />
        ) : (
          <img src={unfoldActive} alt="unfoldActive" />
        )}
      </MainMenuStyle>
      {isOpen && (
        <SubMenuStyle>
          {list.map((item) => (
            <Link to={item.path} key={item.path}>
              <li
                style={{
                  backgroundColor:
                    item.path === pathname
                      ? "var(--color-gray-003)"
                      : "transparent",
                  color: item.path === pathname ? "var(--color-black)" : "#777",
                }}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </SubMenuStyle>
      )}
    </>
  );
};

const MainMenuStyle = styled.div`
  display: flex;
  color: var(--color-gray-009);
  padding: 15px 28px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  user-select: none;
  &:hover {
    background-color: var(--color-gray-002);
  }
  img {
    width: 20px;
  }
`;

const SubMenuStyle = styled.ul`
  li {
    font-weight: 100;
    color: #777;
    padding: 15px 28px 15px 40px;

    &:hover {
      background-color: var(--color-gray-002);
    }
  }
`;
export default Category;
