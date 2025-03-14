import { useState } from "react";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    { id: window.crypto.randomUUID(), name: "Comprar frutas" },
    { id: window.crypto.randomUUID(), name: "Responder e-mails" },
    { id: window.crypto.randomUUID(), name: "Estudar JavaScript" },
  ]);

  function handleAddNewTask(taskId) {
    const newTask = { id: window.crypto.randomUUID(), name: taskId };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleEditTask (taskId) {
    const task = tasks.find((task) => task.id === taskId);

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
