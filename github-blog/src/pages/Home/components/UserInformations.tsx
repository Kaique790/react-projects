import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { ListItem } from "../../../components/ListItem";
import { PostContext } from "../../../contexts/PostsContext";

export function UserInformations() {
  const { user } = useContext(PostContext);

  return (
    <aside className="bg-base-profile flex gap-6 p-8 mt-[-6rem] rounded-md">
      <img className="rounded-md h-36" src={user.avatar_url} alt="" />
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base-title text-2xl">{user.name}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue flex items-center gap-1 text-sm duration-100 hover:border-b-1 hover:border-b-blue"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="text-base-text">{user.bio}</p>

        <ul className="flex gap-4">
          <ListItem icon={faGithub}>{user.login}</ListItem>
          {user.company && (
            <ListItem icon={faBuilding}>{user.company}</ListItem>
          )}
          <ListItem icon={faUserGroup}>{user.followers} seguidores</ListItem>
        </ul>
      </div>
    </aside>
  );
}
