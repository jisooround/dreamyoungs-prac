import styled from "styled-components";

type Props = {
  label: string;
  value: string;
};

const FormFixedType = ({ label, value }: Props) => {
  return (
    <FixedStyle>
      <label htmlFor={label}>{label}</label>
      <p id={label}>{value}</p>
    </FixedStyle>
  );
};

const FixedStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  margin: 10px 0;
  color: var(--color-black);
  label {
    font-weight: 600;
    width: 80px;
    padding-right: 60px;
  }
  p {
    font-size: 14px;
  }
`;

export default FormFixedType;
