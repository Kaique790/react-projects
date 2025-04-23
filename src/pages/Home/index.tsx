import PostDescription from "./components/PostDescription";
import { UserInformations } from "./components/UserInformations";

export function Home() {
  return (
    <main className="mx-auto max-w-4xl ">
      <UserInformations />

      <section className="mt-14">
        <header className="flex w-full justify-between">
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

        <section className="mt-10">
          <PostDescription />
        </section>
      </section>
    </main>
  );
}
