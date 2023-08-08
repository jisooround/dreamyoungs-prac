// 타이틀 컴포넌트
import styled from "styled-components";

type Props = {
  content: string;
};

const Title = ({ content }: Props) => {
  return (
    <TitleContainerStyle>
      <h2>{content}</h2>
    </TitleContainerStyle>
  );
};

const TitleContainerStyle = styled.div`
  margin: 0 40px;
  padding: 40px 0;
  h2 {
    font-weight: 700;
    font-size: 32px;
    color: var(--color-black);
  }
`;
export default Title;
