import styled from "styled-components";

type Props = {
  content: string;
};

const Button = ({ content }: Props) => {
  return (
    <ButtonStyle type="submit" value="Submit">
      {content}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  border-radius: 5px;
  padding: 8px 24px;
  line-height: 1.8;
  font-size: 14px;
  background-color: var(--color-primary);
  color: var(--color-white);
  position: absolute;
  bottom: -60px;
  right: 0;
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default Button;
