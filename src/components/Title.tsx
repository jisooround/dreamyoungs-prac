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
  margin: 0 2.5rem;
  padding: 2.5rem 0;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    color: var(--color-black);
  }
`;
export default Title;
