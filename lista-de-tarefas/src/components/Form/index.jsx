import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useState } from "react";

export function Form({ functionAddNewTask }) {
  const [newTaskName, setNewtaskName] = useState("");

  function handleSetNewTaskName(event) {
    setNewtaskName(event.target.value);
    console.log(event.target.value)
  }

  return (
    <form className="flex flex-col justify-center">
      <div className="text-center">
        <label htmlFor="task-name">Nome da tarefa:</label>
        <input
          value={newTaskName}
          onChange={handleSetNewTaskName}
          type="text"
          id="task-name"
          className="bg-[#242424] p-1 opacity-30 my-5 w-full rounded-md"
        />
      </div>

      <button
        onClick={() => functionAddNewTask(newTaskName)}
        type="submit"
        className="bg-green-600 text-[1rem] items-center flex justify-center gap-3 p-3 px-6 rounded-md duration-300 cursor-pointer hover:bg-green-500"
      >
        ADICIONAR
        <PaperPlaneTilt size={20} />
      </button>
    </form>
  );
}
