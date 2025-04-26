import PostInformation from "./PostInformation";
import codeSvg from "../../assets/code.svg";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostsContext";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const postProvided = posts.find((post) => {
    return post.id === Number(id);
  });

  if (!postProvided) return <h1>Post not found</h1>;
  const {} = postProvided;

  return (
    <main className="mx-auto max-w-4xl px-4 mb-20">
      <PostInformation />
      <article className="p-10 flex flex-col gap-5">
        <p>{id}</p>

        <section>
          <h3 className="underline text-blue">Dynamic Typing</h3>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
        </section>

        <img src={codeSvg} alt="" />
      </article>
    </main>
  );
}
