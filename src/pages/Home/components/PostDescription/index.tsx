export default function PostDescription() {
  return (
    <article className="bg-base-post overflow-hidden max-h-65 max-w-[26rem] p-6 rounded-[0.625rem] flex flex-col gap-5">
      <header className="flex items-center justify-between">
        <h3 className="text-base-title text-size-xl">
          JavaScript data types and data structures
        </h3>
        <time className="text-base-span text-size-md">Há 1 dia</time>
      </header>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in... JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </article>
  );
}
