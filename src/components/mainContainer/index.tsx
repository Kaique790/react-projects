import { ReactElement } from "react";
import { Container } from "./styles";

interface MainContainerProps {
  children: ReactElement;
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}
