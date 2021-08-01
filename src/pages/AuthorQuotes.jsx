import React, { useState, useEffect } from "react";
import { Text, Flex, List, ListItem } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getRandomQuote, setQuotes } from "../actions";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";

const AuthorQuotes = ({ getRandomQuote, randomQuote }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function getData() {
      getRandomQuote();
      const resp = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${randomQuote[0]?.quoteAuthor}`
      );

      const { data } = resp;
      setQuotes(data.data);
    }

    getData();
  }, [randomQuote[0]?.quoteAuthor]);

  return (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      alignItems="center"
      overflow="scroll"
    >
      {" "}
      <Text fontSize="2.8rem" fontWeight="bold">
        {randomQuote[0]?.quoteAuthor}
      </Text>{" "}
      <List>
        {quotes.map((quote) => (
          <ListItem key={quote._id} marginBottom="6.5rem">
            {console.log(quote)}
            <QuoteCard quote={quote} />
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote,
});

const mapDispatchToProps = {
  getRandomQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuotes);
