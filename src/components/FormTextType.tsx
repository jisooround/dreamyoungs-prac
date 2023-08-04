import styled from "styled-components";

type Props = {
  label: string;
  value: string;
};

const FormTextType = ({ label, value }: Props) => {
  return (
    <TextStyle>
      <LabelStyle htmlFor={label}>{label}</LabelStyle>
      <input name={label} type="text" id={label} placeholder={value} />
    </TextStyle>
  );
};

const TextStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  color: var(--color-black);
  align-items: center;
  input {
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--color-gray-border);
  }
`;

const LabelStyle = styled.label`
  font-weight: 600;
  width: 80px;
  padding-right: 60px;
  font-size: 14px;
`;
export default FormTextType;
