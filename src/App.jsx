import logo from "./logo.svg";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import AuthorQuotes from "./pages/AuthorQuotes";

const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:quoteAuthor" component={AuthorQuotes} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
