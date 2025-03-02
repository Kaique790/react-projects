import { useState } from "react";
import styles from "./card.module.css";

export default function Card({ task }) {
  const [taskCompleted, setTaskCompleted] = useState(task.isCompleted);

  function setCompletedOrNot() {
    setTaskCompleted(!taskCompleted);
  }

  return (
    <section
      className={`${styles.card} ${taskCompleted ? styles.task_completed : "not"}`}
    >
      <h3>{task.taskName}</h3>

      <label htmlFor="is-completed">Concluído:</label>

      <input
        type="checkbox"
        id="is-completed"
        checked={taskCompleted ? true : false}
        onChange={setCompletedOrNot}
      />
    </section>
  );
}
