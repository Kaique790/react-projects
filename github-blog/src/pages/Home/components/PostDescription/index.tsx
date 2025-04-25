export default function PostDescription() {
  return (
    <article className="bg-base-post max-h-65 p-8 rounded-[0.625rem] flex flex-col gap-5">
      <header className="flex items-start justify-between">
        <h3 className="text-base-title text-size-xl">
          JavaScript data types and data structures
        </h3>
        <span className="whitespace-nowrap mt-1">
          <time className="text-base-span text-size-md">Há 1 dia</time>
        </span>
      </header>

      <p className="boxWithLimitedText">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </article>
  );
}
