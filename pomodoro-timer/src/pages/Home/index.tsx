import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <form action="">
          <div>
            <label htmlFor="task">Vou trabalhar em:</label>
            <TaskInput
              type="text"
              id="taks"
              placeholder="Qual o próximo projeto?"
              list="task-suggestions"
            />

            <datalist id="task-suggestions">
              <option value="Projeto1" />
              <option value="Projeto2" />
              <option value="Projeto3" />
              <option value="Projeto4" />
            </datalist>

            <label htmlFor="minutesAmount">durante:</label>
            <MinutesAmountInput
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />
            <span>minutes.</span>
          </div>
          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <StartCountdownButton disabled type="submit">
            <Play />
            Começar
          </StartCountdownButton>
        </form>
      </FormContainer>
    </HomeContainer>
  );
}
