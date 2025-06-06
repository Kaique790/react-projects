import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ListItemProps {
  icon: IconDefinition;
  children?: React.ReactNode;
}

export function ListItem({ icon, children }: ListItemProps) {
  return (
    <li className="flex items-center gap-2">
      <FontAwesomeIcon className="text-base-label height-4" icon={icon} />
      {children}
    </li>
  );
}
