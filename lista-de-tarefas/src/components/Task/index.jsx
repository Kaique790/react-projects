import { PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function Task({ taskName }) {
  const [completed, setCompleted] = useState(false);
  function handleSetCompletedTask() {
    setCompleted(!completed);
  }

  return (
    <div
      className={`flex w-full justify-between text-stone-600 p-4 items-center rounded-md duration-300 hover:scale-105 ${
        completed ? "bg-gray-300" : "bg-white"
      }`}
    >
      <div className={`${completed ? "line-through" : null}`}>{taskName}</div>
      <div className="flex gap-4">
        
        <button>
          <PencilSimpleLine
            size={28}
            className="duration-300 cursor-pointer hover:text-emerald-600"
          />
        </button>

        <button>
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
  );
}
