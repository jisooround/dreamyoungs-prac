import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  label: string;
  value: string;
  options: string[];
};
const FormRadioType = ({ options, label, value }: Props) => {
  const [currentValue, setcurrentValue] = useState(value);
  const [showMessage, setShowMessage] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue === "선택1") {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [currentValue]);

  console.log(currentValue);
  return (
    <RadioStyle>
      <LabelStyle>{label}</LabelStyle>
      <RadioBoxStyle>
        {options.map((option) => (
          <label className="group_input" htmlFor={option}>
            <input
              type="radio"
              id={option}
              value={option}
              name={label}
              checked={currentValue === option}
              onChange={handleRadioChange}
            />
            {option}
          </label>
        ))}
      </RadioBoxStyle>
      {showMessage && <span>* 선택시 텍스트가 표시됩니다.</span>}
    </RadioStyle>
  );
};

const RadioStyle = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 15px 0;
  color: var(--color-black);
  align-items: center;
  span {
    font-size: 12px;
    color: red;
    position: absolute;
    top: 53px;
    left: 140px;
  }
`;

const RadioBoxStyle = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  label {
    display: flex;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    padding: 10px 20px 10px 17px;
  }
  input {
    appearance: none;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 15px;
      height: 15px;
      border: 1px solid var(--color-gray-border);
      border-radius: 50%;
    }
    &:checked {
      &::before {
        box-sizing: border-box;
        border: 4px solid var(--color-primary);
      }
    }
    p {
      width: 100%;
    }
  }
`;

const LabelStyle = styled.label`
  font-size: 14px;
  font-weight: 600;
  width: 80px;
  padding-right: 60px;
`;

export default FormRadioType;
