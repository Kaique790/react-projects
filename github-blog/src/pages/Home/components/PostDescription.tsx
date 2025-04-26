import { formatDistance, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface PostDescriptionProps {
  number: number;
  title: string;
  createdAt: string;
  body: string;
}

export default function PostDescription({
  number,
  createdAt,
  title,
  body,
}: PostDescriptionProps) {
  const dateFormat = formatDistance(
    subDays(new Date(createdAt), 1),
    new Date(),
    { addSuffix: true, locale: ptBR }
  );

  return (
    <Link to={`/post/${number}`}>
      <article className="bg-base-post max-h-65 md:h-55 p-8 rounded-[0.625rem] flex flex-col gap-5">
        <header className="flex items-start justify-between">
          <h3 className="text-base-title text-size-xl overflow-hidden">
            {title}
          </h3>
          <span className="whitespace-nowrap mt-1">
            <time className="text-base-span text-size-lg">{dateFormat}</time>
          </span>
        </header>

        <p className="boxWithLimitedText">
          <ReactMarkdown>{body}</ReactMarkdown>
        </p>
      </article>
    </Link>
  );
}
