import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export function NewCycleForm() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Especifique uma tarefa!"),
    minutesAmount: zod
      .number()
      .min(1, "O cíclo tem no mínimo 5 minutos.")
      .max(60, "O ciclo tem no máximo 60 minutos."),
  });

  type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 1,
    },
  });

  return (
    <form onSubmit={handleSubmit(handleCreateNewCicle)}>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em:</label>
        <TaskInput
          type="text"
          id="task"
          placeholder="Qual o próximo projeto?"
          list="task-suggestions"
          {...register("task")}
          disabled={!!activeCycle}
        />

        <datalist id="task-suggestions">
          <option value="Projeto1" />
          <option value="Projeto2" />
          <option value="Projeto3" />
          <option value="Projeto4" />
        </datalist>

        <label htmlFor="minutesAmount">durante:</label>
        <MinutesAmountInput
          id="minutesAmount"
          placeholder="00"
          type="number"
          step={5}
          min={1}
          max={60}
          required
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <span>minutes.</span>
      </FormContainer>
    </form>
  );
}
