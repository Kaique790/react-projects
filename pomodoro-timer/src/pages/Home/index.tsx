import { HandPalm, Play } from "phosphor-react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export function Home() {
  const {
    activeCycle,
    interruptCurrentCycle,
    createNewCycle,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Especifique uma tarefa!"),
    minutesAmount: zod
      .number()
      .min(5, "O cíclo tem no mínimo 5 minutos.")
      .max(60, "O ciclo tem no máximo 60 minutos."),
  });

  type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });

  const { reset, handleSubmit, watch } = newCycleForm;

  function handleCreateNewCycle(data: newCycleFormData) {
    setSecondsPassed(0);
    createNewCycle(data);

    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(handleCreateNewCycle)();
        }}
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        <div>
          {activeCycle ? (
            <StopCountdownButton onClick={interruptCurrentCycle} type="button">
              <HandPalm />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play />
              Começar
            </StartCountdownButton>
          )}
        </div>
      </form>
    </HomeContainer>
  );
}
