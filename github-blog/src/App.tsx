import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PostContextProvider } from "./contexts/PostsContext";

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
