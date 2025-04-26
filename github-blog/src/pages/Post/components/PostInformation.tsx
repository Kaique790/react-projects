import { Link } from "react-router-dom";
import { ListItem } from "../../../components/ListItem";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistance, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostInformationProps {
  createdAt: string;
  comments: number;
  html_url: string;
  login: string;
  title: string;
}

export default function PostInformation({
  comments,
  createdAt,
  login,
  html_url,
  title,
}: PostInformationProps) {
  const dateFormat = formatDistance(
    subDays(new Date(createdAt), 1),
    new Date(),
    { addSuffix: true, locale: ptBR }
  );

  return (
    <aside className="bg-base-profile flex flex-col gap-3 p-8 mt-[-6rem] rounded-md">
      <nav className="flex justify-between items-center text-blue ">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm duration-100 border-b-1 border-transparent hover:border-b-blue"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm duration-100 border-b-1 border-transparent hover:border-b-blue"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1 className="text-base-title text-size-2xl">{title}</h1>
      <ul className="flex gap-4 text-base-span">
        <ListItem icon={faGithub}>{login}</ListItem>
        <ListItem icon={faCalendarDay}>{dateFormat}</ListItem>
        <ListItem icon={faComment}>{comments} comentários</ListItem>
      </ul>
    </aside>
  );
}
