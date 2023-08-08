// Select Box UI 컴포넌트 (달력에서 사용)
import { useState } from "react";
import styled from "styled-components";
import selectIcon from "../../assets/images/select.png";

type Props = {
  options: number[] | string[];
  currentValue: number | string;
  onChange: (selectedValue: number) => void;
  unit?: string;
};

const Select = ({ options, currentValue, onChange, unit }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  // 대메뉴 토글 동작 함수
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <SelectBoxStyle>
      <CurrentValueStyle onClick={toggle} open={open}>
        <p>
          {currentValue}
          {unit}
        </p>
        <img src={selectIcon} alt="" />
      </CurrentValueStyle>
      {open && (
        <OptionStyle>
          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={currentValue === option}
                onChange={() => {
                  onChange(Number(option));
                  toggle();
                }}
              />
              {option}
              {unit}
            </label>
          ))}
        </OptionStyle>
      )}
    </SelectBoxStyle>
  );
};

const SelectBoxStyle = styled.div`
  position: relative;
  color: var(--color-black);
  margin: 5px;
`;

const CurrentValueStyle = styled.div<{ open: boolean }>`
  border-radius: 5px;
  user-select: none;
  padding: 5px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    text-align: left;
    margin-right: 10px;
  }
  img {
    height: 20px;
  }
  border: 1px solid
    ${(props) =>
      props.open ? "var(--color-primary)" : "var(--color-gray-border)"};
  box-shadow: ${(props) =>
    props.open ? "0 0 0 3px var(--color-primary-light)" : "none"};
  &:hover {
    background-color: var(--color-gray-000);
    border: 1px solid
      ${(props) =>
        props.open ? "var(--color-primary)" : "var(--color-gray-005)"};
  }
`;

const OptionStyle = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);
  height: 160px;
  overflow-y: scroll;
  box-sizing: border-box;
  position: absolute;
  top: 45px;
  background-color: var(--color-white);
  &::-webkit-scrollbar {
    display: none;
  }
  input {
    appearance: none;
    margin-left: -2px;
  }
  label {
    font-weight: 400;
    display: block;
    user-select: none;
    font-size: 14px;
    cursor: pointer;
    text-align: left;
    padding: 13px 12px;
    &:hover {
      background-color: var(--color-gray-001);
    }
  }
`;
export default Select;
