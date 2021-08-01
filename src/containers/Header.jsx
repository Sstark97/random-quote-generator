import React from "react";
import { Text, Flex, Button, useMediaQuery } from "@chakra-ui/react";
import { HiOutlineRefresh } from "react-icons/hi";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setRandomQuote } from "../actions";

const Header = ({ setRandomQuote }) => {
  const location = useLocation();
  const history = useHistory();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const handleGetAnotherQuote = async () => {
    const resp = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random`
    );

    const { data } = resp;
    setRandomQuote(data.data);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <Flex justifyContent="flex-end" width="100%" alignItems="center">
      <Button
        variant="ghost"
        _hover="none"
        marginRight={isLargerThan600 ? "10rem" : null}
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
