import { HeaderContainer } from "./styles";
import logo from "./Logo.svg";
import { DynamicCart } from "../DynamicCart";
import { MapPin } from "@phosphor-icons/react";

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <nav>
          <div>
            <img src={logo} />
          </div>

          <div>
            <span>
              <MapPin weight="fill" size="1.2rem" />
              São Cristovão - SE
            </span>
            <DynamicCart type="yellow" />
          </div>
        </nav>
      </HeaderContainer>
    </header>
  );
}
