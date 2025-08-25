import { Calendar } from "@/components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";

export function CalendarStep() {
  const isDateSelected = true;

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Terça-feira <span>20 de setembro</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>13:00</TimePickerItem>
            <TimePickerItem>14:00</TimePickerItem>
            <TimePickerItem>15:00</TimePickerItem>
            <TimePickerItem>16:00</TimePickerItem>
            <TimePickerItem>17:00</TimePickerItem>
            <TimePickerItem>18:00</TimePickerItem>
            <TimePickerItem>20:00</TimePickerItem>
            <TimePickerItem>21:00</TimePickerItem>
            <TimePickerItem>22:00</TimePickerItem>
            <TimePickerItem>23:00</TimePickerItem>
            <TimePickerItem>00:00</TimePickerItem>
            <TimePickerItem>1:00</TimePickerItem>
            <TimePickerItem>2:00</TimePickerItem>
            <TimePickerItem>3:00</TimePickerItem>
            <TimePickerItem>4:00</TimePickerItem>
            <TimePickerItem>5:00</TimePickerItem>
            <TimePickerItem>6:00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
