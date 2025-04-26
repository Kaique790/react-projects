import { formatDistance, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

interface PostDescriptionProps {
  id: number;
  title: string;
  createdAt: string;
}

export default function PostDescription({
  id,
  createdAt,
  title,
}: PostDescriptionProps) {
  const dateFormat = formatDistance(
    subDays(new Date(createdAt), 1),
    new Date(),
    { addSuffix: true, locale: ptBR }
  );

  return (
    <Link to={`/post/${id}`}>
      <article className="bg-base-post max-h-65 p-8 rounded-[0.625rem] flex flex-col gap-5">
        <header className="flex items-start justify-between">
          <h3 className="text-base-title text-size-xl">{title}</h3>
          <span className="whitespace-nowrap mt-1">
            <time className="text-base-span text-size-lg">{dateFormat}</time>
          </span>
        </header>

        <p className="boxWithLimitedText">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </article>
    </Link>
  );
}
