import { useState, useEffect } from "react";
import styles from './ListTasks.module.css';
import Card from "../Card";

export default function ListTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("tasks");
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);

    return (
        <section className={styles.tasks}>
            {tasks.map(task => <Card task={task} key={task.id} />)}
        </section>
    );
}
