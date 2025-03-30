import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "./Logo.svg";

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
            <div>
              <ShoppingCart size="1.375rem" weight="fill" />
            </div>
          </div>
        </nav>
      </HeaderContainer>
    </header>
  );
}
