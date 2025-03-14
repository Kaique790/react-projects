import { useState } from "react";
import { Button } from "../Button";

export function EditTask({ active = true, taskName }) {
  const [newTaskName, setNewTaskName] = useState(taskName);

  function handleInputName(event) {
    setNewTaskName(event.target.value);
  }

  return (
    <div
      className={`${
        active ? null : "hidden"
      } bg-[#313131a8] h-full flex items-center justify-center w-full rounded-md absolute top-[50%] left-[50%] translate-[-50%]`}
    >
      <form className="max-w-80 bg-white p-8 rounded-md">
        <label htmlFor="newName" className="text-[#323232]">Novo nome:</label>
        <input
          value={newTaskName}
          onChange={handleInputName}
          type="text"
          id="newName"
          className="bg-[#3131314d] p-1 my-5 w-full rounded-md text-white"
        />
        <Button />
      </form>
    </div>

  );
}
