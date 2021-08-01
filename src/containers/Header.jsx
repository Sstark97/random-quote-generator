import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import { HiOutlineRefresh } from "react-icons/hi";
import axios from "axios";
import { connect } from "react-redux";
import { setRandomQuote } from "../actions";

const Header = ({ setRandomQuote }) => {
  const handleGetAnotherQuote = async () => {
    console.log("hola");
    const resp = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random`
    );

    const { data } = resp;
    setRandomQuote(data.data);
  };

  return (
    <Flex justifyContent="flex-end" width="100%" alignItems="center">
      <Button
        variant="ghost"
        _hover="none"
        marginRight="10rem"
        onClick={handleGetAnotherQuote}
      >
        <Text marginRight="0.5rem" fontSize="1.8rem">
          random
        </Text>
        <HiOutlineRefresh size="1.6rem" />
      </Button>
    </Flex>
  );
};

const mapDispatchToProps = {
  setRandomQuote,
};

export default connect(null, mapDispatchToProps)(Header);
