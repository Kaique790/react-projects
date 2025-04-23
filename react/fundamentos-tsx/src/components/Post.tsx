import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { format, formatDistanceToNow } from "date-fns";

import { ptBR } from "date-fns/locale/pt-BR";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostInterface {
  id?: number;
  author: Author;
  publishedAt: Date;
  content: content[];
}

interface PostProps {
  post: PostInterface;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Post muito braboo!!"]);

  const publishedAtFormated = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newCommentText, setNewCommentText] = useState("");

  const isNewCommentValid: boolean = newCommentText.length === 0;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function handleNewCommentChangeInvalid(
    event: InvalidEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("Este campo não pode estar vazio!");
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(commentWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>

          <time
            title={publishedAtFormated}
            dateTime={post.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          switch (line.type) {
            case "paragraph":
              return <p key={line.content}>{line.content}</p>;

            case "link":
              return (
                <p key={line.content}>
                  <a>{line.content}</a>
                </p>
              );

            default:
              return null;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="content"
          placeholder="Deixe seu comentário!"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentChangeInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentValid}>
            Enviar comentário
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
