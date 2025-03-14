import { useState } from "react";
import { Button } from "../Button";
import { SignOut } from "@phosphor-icons/react";

export function EditTask({ active = true, taskName, onEditTask, handleEditTask, taskId }) {
  const [newTaskName, setNewTaskName] = useState(taskName);

  function handleInputName(event) {
    setNewTaskName(event.target.value);
  }

   function handleFormSubmit(event) {
    event.preventDefault();

    handleEditTask(taskId, newTaskName);

    onEditTask();
  }

  return (
    <div
      className={`${
        active ? null : "hidden"
      } bg-[#313131a8] h-full flex items-center justify-center w-full rounded-md absolute top-[50%] left-[50%] translate-[-50%]`}
    >


      <form onSubmit={handleFormSubmit} className="max-w-80 bg-white p-8 rounded-md">
        <button className="ml-auto block" type="button" onClick={onEditTask}>
         <SignOut size={40} className="text-[#323232] p-1 rounded-4xl cursor-pointer duration-300 hover:bg-[#32323233]"/>
        </button>
        <label htmlFor="newName" className="text-[#323232]">
          Novo nome:
        </label>
        <input
          value={newTaskName}
          onChange={handleInputName}
          type="text"
          id="newName"
          className="bg-[#3131314d] text-[#616161] font-normal p-1 my-5 w-full rounded-md"
        />
        <Button />
      </form>
    </div>
  );
}
