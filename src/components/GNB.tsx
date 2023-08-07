import styled from "styled-components";
import Category from "./Category";

const GNB = () => {
  return (
    <GNBStyle>
      <Category content={"대메뉴"}>
        <li>소메뉴</li>
        <li>소메뉴</li>
      </Category>
    </GNBStyle>
  );
};

const GNBStyle = styled.div`
  width: 100%;
  min-width: 200px;
  background-color: var(--color-gray-001);
  li {
    font-weight: 100;
    color: #777;
    padding: 10px 28px 10px 40px;
    &:hover {
      background-color: var(--color-gray-002);
    }
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export default GNB;
