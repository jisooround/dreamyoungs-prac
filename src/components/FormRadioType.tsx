// Form - 라디오박스 컴포넌트
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IOption } from "../types/data";

type Props = {
  label: string;
  name: string;
  value: string | undefined;
  options: IOption[];
};

const FormRadioType = ({ name, options, label, value }: Props) => {
  const [currentValue, setCurrentValue] = useState(value); // 선택 값 관리
  const [showMessage, setShowMessage] = useState(false); // 메세지 노출 상태 관리

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (currentValue === "선택3") {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [currentValue]);

  return (
    <RadioStyle>
      <LabelStyle>{label}</LabelStyle>
      <RadioBoxStyle>
        {options.map((option) => (
          <label
            className="group_input"
            htmlFor={option.optionValue}
            key={option.optionLabel}
          >
            <input
              type="radio"
              id={option.optionValue}
              value={option.optionLabel}
              name={name}
              checked={currentValue === option.optionLabel}
              onChange={() => setCurrentValue(option.optionLabel)}
            />
            {option.optionLabel}
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
    color: var(--color-red);
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
  }
`;

const LabelStyle = styled.label`
  font-size: 14px;
  font-weight: 500;
  width: 80px;
  padding-right: 60px;
`;

export default FormRadioType;
