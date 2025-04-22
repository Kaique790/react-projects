import PostDescription from "./components/PostDescription";
import SearchForm from "./components/SearchForm";
import { UserInformations } from "./components/UserInformations";

export function Home() {
  return (
    <main className="mx-auto max-w-4xl ">
      <UserInformations />

      <SearchForm />
      <section>
        <PostDescription />
      </section>
    </main>
  );
}
