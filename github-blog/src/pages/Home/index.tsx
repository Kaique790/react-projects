import { useContext } from "react";
import { PostContext } from "../../contexts/PostsContext";
import PostDescription from "./components/PostDescription";
import { UserInformations } from "./components/UserInformations";

export function Home() {
  const { posts } = useContext(PostContext);

  return (
    <main className="mx-auto max-w-4xl px-4 mb-20">
      <UserInformations />

      <section className="mt-14">
        <header className="w-full flex justify-between">
          <h4 className="text-base-title font text-size-lg">Publicações</h4>
          <span className="text-base-span text-size-md">6 pulicações</span>
        </header>

        <form className="w-full text-base-text mt-2">
          <input
            type="text"
            placeholder="Buscar postagem"
            className="bg-base-input w-full px-4 py-3 border-3 border-base-border rounded-md placeholder:text-base-label"
          />
        </form>

        <section className="grid gap-7 grid-cols-2 mt-10">
          {posts.map((post) => {
            return (
              <PostDescription
                key={post.id}
                createdAt={post.created_at}
                title={post.title}
                id={post.id}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}
