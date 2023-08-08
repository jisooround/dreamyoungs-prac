import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { getYear, getMonth } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import Select from "./Select";
import backIcon from "../assets/images/calender_back_default.png";
import backIconHover from "../assets/images/calender_back_hover.png";
import nextIcon from "../assets/images/calender_next_default.png";
import nextIconHover from "../assets/images/calender_next_hover.png";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerUi.css";

type Props = {
  date: string | undefined;
  name: string;
};

const CalendarUI = ({ name, date }: Props) => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    date ? new Date(date) : undefined,
  );
  const [isBackHover, setIsBackHover] = useState<boolean>(false);
  const [isNextHover, setIsNextHover] = useState<boolean>(false);

  useEffect(() => {
    if (date) {
      setStartDate(new Date(date));
    }
  }, [date]);

  const years = _.range(1990, getYear(new Date()) + 1, 1);

  years.reverse();
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <CalendarContainer>
      <DatePicker
        name={name}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={startDate || undefined}
        onChange={(date: Date) => {
          setStartDate(date);
        }}
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
              onMouseEnter={() => setIsBackHover(true)}
              onMouseLeave={() => setIsBackHover(false)}
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              style={{
                marginLeft: -10,
                padding: 0,
              }}
            >
              <img
                src={isBackHover ? backIconHover : backIcon}
                alt="backIcon"
              />
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
              onMouseEnter={() => setIsNextHover(true)}
              onMouseLeave={() => setIsNextHover(false)}
              type="button"
              style={{
                marginRight: -10,
                padding: 0,
              }}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <img
                src={isNextHover ? nextIconHover : nextIcon}
                alt="nextIcon"
              />
            </button>
          </div>
        )}
      />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--color-gray-border);
  position: relative;
  display: flex;
  align-items: center;
  img {
    height: 20px;
  }
  svg {
    stroke: red;
  }
`;

export default CalendarUI;
