import styled from "styled-components";

type Props = {
  label: string;
  value: string;
};

const FormFixedType = ({ label, value }: Props) => {
  return (
    <FixedStyle>
      <label htmlFor={label}>{label}</label>
      <label id={label}>{value}</label>
    </FixedStyle>
  );
};

const FixedStyle = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--color-gray-001);
  padding: 15px 0;
  label {
    width: 80px;
    padding-right: 30px;
  }
`;

export default FormFixedType;
