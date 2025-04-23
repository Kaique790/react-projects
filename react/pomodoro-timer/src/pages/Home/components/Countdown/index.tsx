import { useState } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";

export function Countdown() {
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const [amountSecondPassed, setAmountSecondPassed] = useState(0);

  useEffect(() => {
    if (!activeCycle) return;

    let interval: number;

    interval = setInterval(() => {
      const differenceSecond = differenceInSeconds(
        new Date(),
        activeCycle.startDate
      );

      if (differenceSecond >= totalSeconds) {
        setCycles((state) =>
          state.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() };
            }
            return cycle;
          })
        );
        setAmountSecondPassed(0);
        clearInterval(interval);
      } else {
        setAmountSecondPassed(differenceSecond);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCycle, totalSeconds]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
