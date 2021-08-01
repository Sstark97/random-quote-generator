import React, { useState, useEffect } from "react";
import { Text, Flex, List, ListItem, Button } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getRandomQuote } from "../actions";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const AuthorQuotes = ({ getRandomQuote, randomQuote }) => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [finalPage, setFinalPage] = useState(0);

  useEffect(() => {
    async function getData() {
      getRandomQuote();
      const resp = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${randomQuote[0]?.quoteAuthor}`
      );

      const { data } = resp;
      setQuotes(data.data);
      setFinalPage(data?.pagination?.totalPages);
    }

    getData();
  }, []);

  const handleNextQuotePage = async () => {
    if (page === finalPage) {
      return;
    }

    setPage(page + 1);
    const resp = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${randomQuote[0]?.quoteAuthor}&&page=${page}`
    );

    const { data } = resp;
    setQuotes(data.data);
  };

  const handlePrevQuotePage = async () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    const resp = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${randomQuote[0]?.quoteAuthor}&&page=${page}`
    );

    const { data } = resp;
    setQuotes(data.data);
  };

  return (
    <Flex direction="column" width="100%" height="100%" alignItems="center">
      {" "}
      <Text fontSize="2.8rem" fontWeight="bold">
        {randomQuote[0]?.quoteAuthor}
      </Text>{" "}
      <List overflow="scroll">
        {quotes.map((quote) => (
          <ListItem key={quote._id} marginBottom="6.5rem">
            <QuoteCard quote={quote} />
          </ListItem>
        ))}
      </List>
      <Flex>
        {page !== 1 ? (
          <Button
            leftIcon={<HiArrowNarrowLeft />}
            marginRight="1.2rem"
            size="lg"
            onClick={handlePrevQuotePage}
          >
            Prev
          </Button>
        ) : null}

        {page !== finalPage ? (
          <Button
            rightIcon={<HiArrowNarrowRight />}
            size="lg"
            onClick={handleNextQuotePage}
          >
            Next
          </Button>
        ) : null}
      </Flex>
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
