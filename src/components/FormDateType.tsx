import DatePickerUi from "./DatePickerUi";
import styled from "styled-components";

type Props = {
  label: string;
  value?: string;
};

const FormDateType = ({ label }: Props) => {
  return (
    <DateStyle>
      <LabelStyle>{label}</LabelStyle>
      <DatePickerUi date={"2014-05-03"} />
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
  font-weight: 600;
  width: 80px;
  padding-right: 60px;
`;

export default FormDateType;
