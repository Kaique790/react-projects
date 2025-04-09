import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { UserInformationContextProvider } from "./contexts/UserInformationContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <UserInformationContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserInformationContextProvider>
      </CoffeesContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
