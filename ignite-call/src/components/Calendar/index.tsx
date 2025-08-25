import { CaretLeft, CaretRight } from "phosphor-react";
import {
  CalendarActions,
  CalendarBody,
  CalendarConatiner,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from "./styles";
import dayjs from "dayjs";
import { getWeekDays } from "@/utils/get-week-days";
import { useState } from "react";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("date", 1);
  });

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, "month");

    setCurrentDate(previousMonthDate);
  }

  function handleNextMonth() {
    const previousMonthDate = currentDate.add(1, "month");

    setCurrentDate(previousMonthDate);
  }

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");

  const shortWeekDays = getWeekDays({ short: true });

  return (
    <CalendarConatiner>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="previou month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <CalendarDay>1</CalendarDay>
            </th>
            <th>
              <CalendarDay>2</CalendarDay>
            </th>
            <th>
              <CalendarDay>3</CalendarDay>
            </th>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarConatiner>
  );
}
