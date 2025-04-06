import { MainContainer } from "../../components/mainContainer";
import { Container } from "./styles";
import { Cart } from "./components/Cart";
import { Form } from "./components/Form";

export function Checkout() {
  return (
    <MainContainer>
      <Container>
        <Form />
        <Cart />
      </Container>
    </MainContainer>
  );
}
