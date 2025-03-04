import "./components/Header";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sibebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  );
}
