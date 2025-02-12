import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Programar",
      description: "Foco em desenvolvimento web Full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Inglês",
      description: "2 horas estudando inglês.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Marketing",
      description: "Estudo sobre o mercado de vendas.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
