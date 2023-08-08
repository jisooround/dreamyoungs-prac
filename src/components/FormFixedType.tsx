import styled from "styled-components";

type Props = {
  name: string;
  label: string;
  value: string | undefined;
};

const FormFixedType = ({ name, label, value }: Props) => {
  return (
    <FixedStyle>
      <LabelStyle htmlFor={name}>{label}</LabelStyle>
      <input name={name} value={value !== undefined ? value : ""} readOnly />
    </FixedStyle>
  );
};

const FixedStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  margin: 10px 0;
  color: var(--color-black);
  align-items: center;
  input {
    font-size: 14px;
  }
`;

const LabelStyle = styled.label`
  font-weight: 500;
  width: 80px;
  padding-right: 60px;
  font-size: 14px;
`;

export default FormFixedType;
