import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import tasksJson from "../../data/tasks.json";

export default function Form() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [...tasksJson];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function formSubmit(event) {
    event.preventDefault();

    const task = {
      id: Date.now(),
      taskName: newTask,
      isCompleted: false
    };

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);

    setNewTask("");
  }

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <h1>Liste suas tarefas</h1>
      <div>
        <label htmlFor="task">Nome da tarefa:</label>
        <input
          type="text"
          id="task"
          required
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
