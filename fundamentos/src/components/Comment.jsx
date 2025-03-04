import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://images.unsplash.com/photo-1512572525676-f9b59951929e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time title="11 de julho às 03:34" dateTime="2023-07-11 03:34:22">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário" >
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Devo. Parabéns 👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
