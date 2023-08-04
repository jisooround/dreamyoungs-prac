import { useState } from "react";
import styled from "styled-components";
import CheckIcon from "../assets/images/check_checked.svg";

type Props = {
  label: string;
  value: string;
  options: string[];
};
const FormCheckType = ({ options, label, value }: Props) => {
  const [currentValue, setcurrentValue] = useState<string[]>([value]); // currentValue를 배열로 초기화

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    if (event.target.checked) {
      setcurrentValue((prev) => [...prev, option]); // 선택된 값을 배열에 추가
    } else {
      setcurrentValue((prev) => prev.filter((item) => item !== option)); // 선택 해제된 값을 배열에서 제거
    }
  };

  console.log(currentValue);
  return (
    <CheckStyle>
      <p>{label}</p>
      <CheckBoxStyle>
        {options.map((option) => (
          <label className="group_input" htmlFor={option}>
            <input
              type="checkbox"
              id={option}
              value={option}
              name={label}
              checked={currentValue.includes(option)}
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        ))}
      </CheckBoxStyle>
    </CheckStyle>
  );
};

const CheckStyle = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 15px 0;
  color: var(--color-black);
  align-items: center;
  p {
    font-weight: 600;
    width: 80px;
    padding-right: 60px;
    font-size: 14px;
  }
  span {
    font-size: 12px;
    color: red;
    position: absolute;
    top: 53px;
    left: 140px;
  }
`;

const CheckBoxStyle = styled.div`
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
    &:hover {
      &::before {
        border: 1px solid var(--color-gray-005);
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 15px;
      height: 15px;
      border: 1px solid var(--color-gray-border);
      border-radius: 4px;
    }
    &:checked {
      &::before {
        box-sizing: border-box;
        border: none;
        background-color: var(--color-primary);
        background-image: url(${CheckIcon});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 11px;
      }
    }
    p {
      width: 100%;
    }
  }
`;

export default FormCheckType;
