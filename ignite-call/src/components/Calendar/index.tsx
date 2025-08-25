import { CaretLeft, CaretRight } from "phosphor-react";
import {
  CalendarActions,
  CalendarBody,
  CalendarConatiner,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from "./styles";
import { getWeekDays } from "@/utils/get-week-days";

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true });

  return (
    <CalendarConatiner>
      <CalendarHeader>
        <CalendarTitle>
          Setembro <span>2025</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
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
