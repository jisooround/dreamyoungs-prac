import styled from "styled-components";

type Props = {
  label: string;
  value: string;
};

const FormFixedType = ({ label, value }: Props) => {
  return (
    <FixedStyle>
      <LabelStyle htmlFor={label}>{label}</LabelStyle>
      <input name={label} id={label} value={value} readOnly />
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
  font-weight: 600;
  width: 80px;
  padding-right: 60px;
  font-size: 14px;
`;

export default FormFixedType;
