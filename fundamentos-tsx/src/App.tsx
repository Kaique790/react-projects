import "./components/Header";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sibebar";
import { Post, PostInterface } from "./components/Post";

const posts: PostInterface[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Salve turma! 👋",
      },
      {
        type: "paragraph",
        content:
          "Hoje compartilhei no meu GitHub um projeto incrível chamado FoodExplorer. Deem uma olhada! 🍔",
      },
      {
        type: "link",
        content: "github.com/maykbrito/foodexplorer",
      },
    ],
    publishedAt: new Date("2022-05-05 18:30:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/cleitonjose.png",
      name: "Cleiton José",
      role: "Dev Front-end @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Oi pessoal! 🌟",
      },
      {
        type: "paragraph",
        content:
          "Finalizei um app que ajuda a organizar suas tarefas do dia. Chamado TaskManager. 📝",
      },
      {
        type: "link",
        content: "taskmanager.app",
      },
    ],
    publishedAt: new Date("2022-05-10 15:45:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </main>
      </div>
    </>
  );
}
