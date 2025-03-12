import { useState } from "react";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Task } from "./components/Task";


function App() {
  const [tasks, setTasks] = useState([
    {id:window.crypto.randomUUID(), name: "Comprar frutas" },
    {id:window.crypto.randomUUID(), name: "Responder e-mails" },
    {id:window.crypto.randomUUID(), name: "Estudar JavaScript" },
  ]);
  
  function handleAddNewTask(taskName) {
    setTasks(...tasks, { name: taskName });
  }

  return (
    <main className="w-full h-full p-4">
      <h1 className="text-4xl text-center mt-6">TO-DO-LIST</h1>
      <Container>
        <Form />
      </Container>

      <Container>
        {tasks.map(({ name, id }) => {
          return <Task taskName={name} key={id} functionAddNewTask={handleAddNewTask} />;
        })}
      </Container>
    </main>
  );
}

export default App;
