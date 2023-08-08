import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  label: string;
  value: string | undefined;
};

const FormTextType = ({ name, label, value }: Props) => {
  const [isValue, setIsValue] = useState<string | undefined>(value);

  useEffect(() => {
    setIsValue(value);
  }, [value]);

  return (
    <TextStyle>
      <LabelStyle htmlFor={name}>{label}</LabelStyle>
      <input
        onChange={(event) => {
          setIsValue(event.target.value);
        }}
        name={name}
        type="text"
        value={isValue || ""}
        placeholder={value}
      />
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
  font-weight: 500;
  width: 80px;
  padding-right: 60px;
  font-size: 14px;
`;

export default FormTextType;
