import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import AuthorQuotes from "./pages/AuthorQuotes";

const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:quoteAuthor" component={AuthorQuotes} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
