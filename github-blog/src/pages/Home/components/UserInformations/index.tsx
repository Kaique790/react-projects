import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { ListItem } from "../../../../components/ListItem";

export function UserInformations() {
  return (
    <aside className="bg-base-profile flex gap-6 p-8 mt-[-6rem] rounded-md">
      <img
        className="rounded-md h-36"
        src="https://avatars.githubusercontent.com/u/183293306?v=4"
        alt=""
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base-title text-2xl">Kaique Bezerra</h2>
          <a
            href="https://github.com/Kaique790"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue flex items-center gap-1 text-sm duration-100 hover:border-b-1 hover:border-b-blue"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul className="flex gap-4">
          <ListItem icon={faGithub}>Kaique790</ListItem>
          <ListItem icon={faBuilding}>Apple</ListItem>
          <ListItem icon={faUserGroup}>32 seguidores</ListItem>
        </ul>
      </div>
    </aside>
  );
}
