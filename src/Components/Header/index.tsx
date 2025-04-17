import { HeaderContainer, HeaderCotent, NewTransactionButton } from "./styles";
import logoImage from "../../assets/logo.svg";

import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderCotent>
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderCotent>
    </HeaderContainer>
  );
}
