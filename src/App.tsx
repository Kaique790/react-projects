import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeesContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
