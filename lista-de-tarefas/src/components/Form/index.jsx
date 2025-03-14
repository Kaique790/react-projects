import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "../Button";

export function Form({ onAddNewTask}) {
  const [newTaskName, setNewtaskName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddNewTask(newTaskName);
    setNewtaskName("");
  }

  function handleSetNewTaskName(event) {
    setNewtaskName(event.target.value);
    console.log(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col justify-center">
      <div className="text-center">
        <label htmlFor="task-name">Nome da tarefa:</label>
        <input
          value={newTaskName}
          onChange={handleSetNewTaskName}
          type="text"
          id="task-name"
          className="bg-[#3131314d] p-1 my-5 w-full rounded-md outline-none"
        />
      </div>

      <Button name={"ADICIONAR"} />
        
    </form>
  );
}
