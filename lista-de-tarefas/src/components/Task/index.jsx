import { PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { EditTask } from "../EditTask";

export function Task({ taskName, onDeleteTask, taskId }) {
  const [completed, setCompleted] = useState(false);
  const [edit, setEdit] = useState(false);

  function handleSetCompletedTask() {
    setCompleted(!completed);
  }

  function handleEditTask () {
    setEdit(!edit);
  }

  return (
    <>
      <div
        className={`flex w-full justify-between text-stone-600 p-4 items-center rounded-md duration-300 hover:scale-105 ${
          completed ? "bg-gray-300" : "bg-white"
        }`}
      >
        <div className={`${completed ? "line-through" : null}`}>{taskName}</div>
        <div className="flex gap-4">
          <button onClick={handleEditTask}>
            <PencilSimpleLine
              size={28}
              className="duration-300 cursor-pointer hover:text-emerald-600"
            />
          </button>

          <button onClick={() => onDeleteTask(taskId)}>
            <Trash
              size={28}
              className="duration-300 cursor-pointer hover:text-red-500"
            />
          </button>

          <input
            type="checkbox"
            className="w-4 cursor-pointer"
            checked={completed}
            onChange={handleSetCompletedTask}
          />
        </div>
      </div>
      <EditTask active={edit} toggleForm={handleEditTask} />
    </>
  );
}
