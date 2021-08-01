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
          <Route exact path="/" component={Home} />
          <Route exact path="/quotes/:quoteAuthor" component={AuthorQuotes} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
