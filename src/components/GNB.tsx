// GNB 컴포넌트
import styled from "styled-components";
import Category from "./Category";

// 대메뉴 첫 번째 내용
const linkList_1 = [
  { label: "소메뉴", path: "/" },
  { label: "소메뉴", path: "/2" },
];

// 대메뉴 두 번째 내용
const linkList_2 = [
  { label: "소메뉴", path: "/3" },
  { label: "소메뉴", path: "/4" },
];

const GNB = () => {
  return (
    <GNBStyle>
      <Category content={"대메뉴"} list={linkList_1} />
      <Category content={"대메뉴"} list={linkList_2} />
    </GNBStyle>
  );
};

const GNBStyle = styled.div`
  width: 100%;
  min-width: 200px;
  background-color: var(--color-gray-001);
  padding: 20px 0;
`;

// eslint-disable-next-line react-refresh/only-export-components
export default GNB;
