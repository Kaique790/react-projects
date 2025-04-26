import PostInformation from "./components/PostInformation";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { api } from "../../lib/axios";
import { PostInterface } from "../../contexts/PostsContext";

export default function Post() {
  const { number } = useParams();

  const [post, setPost] = useState<PostInterface | null>(null);

  const getPost = useCallback(async () => {
    const response = await api.get(
      `/repos/kaique790/react-projects/issues/${number}`
    );
    setPost(response.data);
  }, [setPost, number]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (!post)
    return (
      <h1 className="text-center mt-20 text-size-2xl font-bold">
        Post não encontrado
      </h1>
    );
  const postContent = post.body;

  return (
    <main className="mx-auto max-w-4xl px-4 mb-20">
      <PostInformation
        title={post.title}
        comments={post.comments}
        login={post.user.login}
        html_url={post.html_url}
        createdAt={post.created_at}
      />
      <article className="p-10 flex flex-col gap-5">
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </article>
    </main>
  );
}
