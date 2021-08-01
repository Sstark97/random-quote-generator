import React from "react";
import { Text, Flex, Spinner } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getRandomQuote } from "../actions";

const QuoteCard = ({ getRandomQuote, randomQuote, quote }) => {
  if (quote !== undefined) {
    return (
      <Flex
        paddingLeft="9.9rem"
        borderLeft="3px solid #F7DF94"
        maxWidth="61.4rem"
        paddingRight="1rem"
      >
        <Text fontSize="3.6rem">{`"${quote.quoteText}"`}</Text>
      </Flex>
    );
  } else {
    getRandomQuote();
    if (
      randomQuote[0] !== undefined &&
      randomQuote[0].quoteText !== undefined
    ) {
      return (
        <Flex
          paddingLeft="9.9rem"
          borderLeft="3px solid #F7DF94"
          maxWidth="61.4rem"
          paddingRight="1rem"
        >
          <Text fontSize="3.6rem">{`"${randomQuote[0]?.quoteText}"`}</Text>
        </Flex>
      );
    } else {
      return <Spinner size="xl" />;
    }
  }
};

const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote,
});

const mapDispatchToProps = {
  getRandomQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteCard);
