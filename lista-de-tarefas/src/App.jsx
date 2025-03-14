import { useState } from "react";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    { id: window.crypto.randomUUID(), name: "Comprar frutas" },
  ]);

  function handleAddNewTask(taskId) {
    const newTask = { id: window.crypto.randomUUID(), name: taskId };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleEditTask(taskId, newTaskName) {
    const updateTask = tasks.map((task) => {
      return task.id === taskId ? { ...task, name: newTaskName } : task;
    });

    setTasks(updateTask);
  }

  return (
    <main className="w-full h-full p-4">
      <h1 className="text-4xl text-center mt-6">TO-DO-LIST</h1>
      <Container>
        <Form onAddNewTask={handleAddNewTask} />
      </Container>
      {tasks.length > 0 ? (
        <Container>
          {tasks.map(({ name, id }) => {
            return (
              <Task
                handleEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                taskName={name}
                key={id}
                taskId={id}
              />
            );
          })}
        </Container>
      ) : null}
    </main>
  );
}

export default App;
