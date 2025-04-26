import PostInformation from "./components/PostInformation";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostsContext";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const postProvided = posts.find((post) => {
    return post.id === Number(id);
  });

  if (!postProvided) return <h1>Post not found</h1>;
  const postContent = postProvided.body;

  return (
    <main className="mx-auto max-w-4xl px-4 mb-20">
      <PostInformation
        comments={postProvided.comments}
        login={postProvided.user.login}
        url={postProvided.url}
        createdAt={postProvided.created_at}
      />
      <article className="p-10 flex flex-col gap-5">
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </article>
    </main>
  );
}
