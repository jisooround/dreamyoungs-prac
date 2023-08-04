import DatePickerUi from "./DatePickerUi";
import styled from "styled-components";

type Props = {
  label: string;
  value?: string;
};

const FormDateType = ({ label }: Props) => {
  return (
    <DateStyle>
      {label}
      <DatePickerUi date={"2014-05-03"} />
    </DateStyle>
  );
};

const DateStyle = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--color-gray-001);
  padding: 15px 0;
  label {
    width: 80px;
    padding-right: 30px;
  }
`;

export default FormDateType;
