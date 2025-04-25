import PostInformation from "./PostInformation";
import codeSvg from "../../assets/code.svg";

export default function Post() {
  return (
    <main className="mx-auto max-w-4xl px-4 mb-20">
      <PostInformation />

      <article className="p-10 flex flex-col gap-5">
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

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
