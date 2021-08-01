import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import QuoteCard from "../components/QuoteCard";
import AllAuthorQuotes from "../components/AllAuthorQuotes";
import axios from "axios";
import { connect } from "react-redux";
import { setRandomQuote } from "../actions";

const Home = ({ setRandomQuote }) => {
  useEffect(() => {
    async function getData() {
      const resp = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes/random`
      );

      const { data } = resp;
      setRandomQuote(data.data);
    }
    getData();
  }, []);

  return (
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
};

const mapDispatchToProps = {
  setRandomQuote,
};

export default connect(null, mapDispatchToProps)(Home);
