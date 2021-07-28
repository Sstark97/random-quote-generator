import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Text, Flex, Box } from "@chakra-ui/react";

const AllAuthorQuotes = () => {
  return (
    <Flex
      alignItems="center"
      width="67.2rem"
      height="15.1rem"
      _hover={{ background: "#333333" }}
      marginTop="10rem"
    >
      <Flex direction="column" width="90%">
        <Text fontSize="2.4rem">Pepe</Text>
        <Text fontSize="1.4rem" color="#828282">
          Business
        </Text>
      </Flex>

      <BsArrowRight size="2.5rem" />
    </Flex>
  );
};

export default AllAuthorQuotes;
