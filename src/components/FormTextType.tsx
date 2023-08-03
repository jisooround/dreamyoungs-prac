import styled from "styled-components";

type Props = {
  label: string;
  value: string;
};

const FormTextType = ({ label, value }: Props) => {
  return (
    <TextStyle>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} placeholder={value} />
    </TextStyle>
  );
};

const TextStyle = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--color-gray-001);
  padding: 15px 0;
  label {
    width: 80px;
    padding-right: 30px;
  }
`;
export default FormTextType;
