import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Text, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getRandomQuote } from "../actions";

const AllAuthorQuotes = ({ getRandomQuote, randomQuote }) => {
  return (
    <Flex
      alignItems="center"
      width="67.2rem"
      height="15.1rem"
      _hover={{ background: "#333333", color: "#ffffff" }}
      marginTop="10rem"
      display={
        randomQuote[0] !== undefined && randomQuote[0].quoteText !== undefined
          ? "flex"
          : "none"
      }
    >
      <Flex direction="column" width="90%">
        <Text fontSize="2.4rem">{randomQuote[0]?.quoteAuthor}</Text>
        <Text fontSize="1.4rem" color="#828282">
          {randomQuote[0]?.quoteGenre}
        </Text>
      </Flex>

      <BsArrowRight size="2.5rem" />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote,
});

const mapDispatchToProps = {
  getRandomQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAuthorQuotes);
