import React from "react";
import { Flex } from "@chakra-ui/react";
import QuoteCard from "../components/QuoteCard";
import AuthorQuotes from "./AuthorQuotes";
import AllAuthorQuotes from "../components/AllAuthorQuotes";

const Home = () => (
  <Flex
    direction="column"
    width="100%"
    height="100%"
    justifyContent="center"
    alignItems="center"
  >
    <QuoteCard />
    <AllAuthorQuotes />
  </Flex>
);

export default Home;
