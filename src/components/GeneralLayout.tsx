// 전역 레이아웃 컴포넌트
import React from "react";
import styled from "styled-components";
import GNB from "./GNB";

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <GeneralLayoutStyle>
      <GNB />
      <GeneralBodyStyle>{children}</GeneralBodyStyle>
    </GeneralLayoutStyle>
  );
};

const GeneralLayoutStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const GeneralBodyStyle = styled.div``;
export default GeneralLayout;
