import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerUi.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { getYear, getMonth } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import Select from "./Select";
import backIcon from "../assets/images/calender_back_default.png";
import nextIcon from "../assets/images/calender_next_default.png";

type Props = {
  date: string;
};

const CalendarUI = ({ date }: Props) => {
  const [startDate, setStartDate] = useState(new Date(date));

  const years = _.range(1990, getYear(new Date()) + 1, 1);

  years.reverse();
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <CalendarContainer>
      <DatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
        }}
        shouldCloseOnSelect={false}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              style={{
                marginLeft: -10,
                padding: 0,
              }}
            >
              <img src={backIcon} alt="" />
            </button>
            <Select
              options={years}
              currentValue={getYear(date)}
              unit={"년"}
              onChange={(selectedYear) => changeYear(selectedYear)}
            />
            <Select
              options={months}
              currentValue={months[getMonth(date)]}
              unit={"월"}
              onChange={(selectedMonth) =>
                changeMonth(months.indexOf(selectedMonth))
              }
            />
            <button
              type="button"
              style={{
                marginRight: -10,
                padding: 0,
              }}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <img src={nextIcon} alt="" />
            </button>
          </div>
        )}
      />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  position: relative;
  img {
    height: 20px;
  }
  svg {
    stroke: red;
  }
`;

export default CalendarUI;
