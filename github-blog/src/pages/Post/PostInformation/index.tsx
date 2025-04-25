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

export default function PostInformation() {
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
          href="https://github.com/Kaique790"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm duration-100 border-b-1 border-transparent hover:border-b-blue"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1 className="text-base-title text-size-2xl">
        JavaScript data types and data structures
      </h1>
      <ul className="flex gap-4 text-base-span">
        <ListItem icon={faGithub}>kaique790</ListItem>
        <ListItem icon={faCalendarDay}>Há 1 dia</ListItem>
        <ListItem icon={faComment}>5 comentários</ListItem>
      </ul>
    </aside>
  );
}
