import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from "@ignite-ui/react";
import { Container, Header } from "../styles";
import {
  IntervalBox,
  IntervalItem,
  IntervalDay,
  IntervalsContainer,
  IntervalInputs,
} from "./styles";
import { ArrowRight } from "phosphor-react";
import { useFieldArray, useForm } from "react-hook-form";
import { getWeekDays } from "@/utils/get-week-days";

const defaultIntervals = [
  { weekDay: 0, enabled: false, startTime: "08:00", endTime: "18:00" },
  { weekDay: 1, enabled: true, startTime: "08:00", endTime: "18:00" },
  { weekDay: 2, enabled: true, startTime: "08:00", endTime: "18:00" },
  { weekDay: 3, enabled: true, startTime: "08:00", endTime: "18:00" },
  { weekDay: 4, enabled: true, startTime: "08:00", endTime: "18:00" },
  { weekDay: 5, enabled: true, startTime: "08:00", endTime: "18:00" },
  { weekDay: 6, enabled: false, startTime: "08:00", endTime: "18:00" },
];

export default function TimeIntervals() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      intervals: defaultIntervals,
    },
  });

  const { fields } = useFieldArray({
    name: "intervals",
    control,
  });

  const weekDays = getWeekDays();

  async function handleSetTimeIntervals(data: any) {
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep currentStep={2} size={4} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => (
            <IntervalItem key={field.id}>
              <IntervalDay>
                <Checkbox />
                <Text>{weekDays[field.weekDay]}</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  as="input"
                  size="sm"
                  type="time"
                  step={60}
                  {...register(`intervals.${index}.startTime`)}
                />
                <TextInput
                  as="input"
                  size="sm"
                  type="time"
                  step={60}
                  {...register(`intervals.${index}.endTime`)}
                />
              </IntervalInputs>
            </IntervalItem>
          ))}
        </IntervalsContainer>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
