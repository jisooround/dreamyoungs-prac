import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerUi.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { useState } from "react";

type Props = {
  value: string;
};

const CalendarUI = ({ value }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(value);
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy.MM.dd"
      selected={startDate}
      onChange={(date: Date) => {
        setStartDate(date);
      }}
    ></DatePicker>
  );
};

export default CalendarUI;
