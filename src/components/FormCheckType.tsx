import { useEffect, useState } from "react";
import styled from "styled-components";
import CheckIcon from "../assets/images/check_checked.svg";
import { IOption } from "../types/data";

type Props = {
  label: string;
  name: string;
  value: string[] | undefined;
  options: IOption[];
};

const FormCheckType = ({ name, options, label, value }: Props) => {
  const [currentValue, setCurrentValue] = useState<string[]>([]);

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    if (event.target.checked) {
      setCurrentValue((prev) => [...prev, option]);
    } else {
      setCurrentValue((prev) => prev.filter((item) => item !== option));
    }
  };

  // console.log(currentValue);
  return (
    <CheckStyle>
      <LabelStyle>{label}</LabelStyle>
      <CheckBoxStyle>
        {options.map((option) => (
          <label
            className="group_input"
            htmlFor={option.optionValue}
            key={option.optionLabel}
          >
            <input
              type="checkbox"
              id={option.optionValue}
              value={option.optionLabel}
              name={name}
              checked={currentValue.includes(option.optionLabel)}
              onChange={handleCheckboxChange}
            />
            {option.optionLabel}
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

const LabelStyle = styled.label`
  font-size: 14px;
  font-weight: 500;
  width: 80px;
  padding-right: 60px;
`;

export default FormCheckType;
