// Form - 날짜 컴포넌트
import DatePickerUi from "./ui/DatePickerUi";
import styled from "styled-components";

type Props = {
  label: string;
  value?: string | undefined;
  name: string;
};

const FormDateType = ({ name, value, label }: Props) => {
  return (
    <DateStyle>
      <LabelStyle>{label}</LabelStyle>
      <DatePickerUi name={name} date={value} />
    </DateStyle>
  );
};

const DateStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  color: var(--color-black);
  align-items: center;
`;

const LabelStyle = styled.label`
  font-size: 14px;
  font-weight: 500;
  width: 80px;
  padding-right: 60px;
`;

export default FormDateType;
